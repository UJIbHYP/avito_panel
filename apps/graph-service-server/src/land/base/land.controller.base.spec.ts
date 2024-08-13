import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LandController } from "../land.controller";
import { LandService } from "../land.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  area: "exampleArea",
  createdAt: new Date(),
  id: "exampleId",
  landArea: "exampleLandArea",
  landCreatedAt: new Date(),
  landLocation: "exampleLandLocation",
  landPriceM: "exampleLandPriceM",
  landPriceTotal: "exampleLandPriceTotal",
  landUrl: "exampleLandUrl",
  location: "exampleLocation",
  priceM: "examplePriceM",
  priceTotal: "examplePriceTotal",
  updatedAt: new Date(),
  url: "exampleUrl",
};
const CREATE_RESULT = {
  area: "exampleArea",
  createdAt: new Date(),
  id: "exampleId",
  landArea: "exampleLandArea",
  landCreatedAt: new Date(),
  landLocation: "exampleLandLocation",
  landPriceM: "exampleLandPriceM",
  landPriceTotal: "exampleLandPriceTotal",
  landUrl: "exampleLandUrl",
  location: "exampleLocation",
  priceM: "examplePriceM",
  priceTotal: "examplePriceTotal",
  updatedAt: new Date(),
  url: "exampleUrl",
};
const FIND_MANY_RESULT = [
  {
    area: "exampleArea",
    createdAt: new Date(),
    id: "exampleId",
    landArea: "exampleLandArea",
    landCreatedAt: new Date(),
    landLocation: "exampleLandLocation",
    landPriceM: "exampleLandPriceM",
    landPriceTotal: "exampleLandPriceTotal",
    landUrl: "exampleLandUrl",
    location: "exampleLocation",
    priceM: "examplePriceM",
    priceTotal: "examplePriceTotal",
    updatedAt: new Date(),
    url: "exampleUrl",
  },
];
const FIND_ONE_RESULT = {
  area: "exampleArea",
  createdAt: new Date(),
  id: "exampleId",
  landArea: "exampleLandArea",
  landCreatedAt: new Date(),
  landLocation: "exampleLandLocation",
  landPriceM: "exampleLandPriceM",
  landPriceTotal: "exampleLandPriceTotal",
  landUrl: "exampleLandUrl",
  location: "exampleLocation",
  priceM: "examplePriceM",
  priceTotal: "examplePriceTotal",
  updatedAt: new Date(),
  url: "exampleUrl",
};

const service = {
  createLand() {
    return CREATE_RESULT;
  },
  lands: () => FIND_MANY_RESULT,
  land: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Land", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LandService,
          useValue: service,
        },
      ],
      controllers: [LandController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /lands", async () => {
    await request(app.getHttpServer())
      .post("/lands")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        landCreatedAt: CREATE_RESULT.landCreatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /lands", async () => {
    await request(app.getHttpServer())
      .get("/lands")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          landCreatedAt: FIND_MANY_RESULT[0].landCreatedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /lands/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/lands"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /lands/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/lands"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        landCreatedAt: FIND_ONE_RESULT.landCreatedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /lands existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/lands")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        landCreatedAt: CREATE_RESULT.landCreatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/lands")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
