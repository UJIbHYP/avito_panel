import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { LandList } from "./land/LandList";
import { LandCreate } from "./land/LandCreate";
import { LandEdit } from "./land/LandEdit";
import { LandShow } from "./land/LandShow";
import { HouseList } from "./house/HouseList";
import { HouseCreate } from "./house/HouseCreate";
import { HouseEdit } from "./house/HouseEdit";
import { HouseShow } from "./house/HouseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GraphService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Land"
          list={LandList}
          edit={LandEdit}
          create={LandCreate}
          show={LandShow}
        />
        <Resource
          name="House"
          list={HouseList}
          edit={HouseEdit}
          create={HouseCreate}
          show={HouseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
