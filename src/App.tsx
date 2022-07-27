import React from "react";
import { DataQuery } from "@dhis2/app-runtime";
import { CenteredContent, CircularLoader, colors } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
// import classes from "./App.module.css";

const query = {
  me: {
    resource: "me",
  },
};

const MyApp = () => (
  <div>
    <DataQuery query={query}>
      {({ error, loading, data }) => {
        if (error) return <span>ERROR</span>;
        if (loading) return <span>...</span>;
        return (
          <CenteredContent>
            <h1>DHIS2 Community</h1>
            <h2 style={{ textAlign: "center" }}>Tanzania</h2>
          </CenteredContent>
        );
      }}
    </DataQuery>
  </div>
);

export default MyApp;
