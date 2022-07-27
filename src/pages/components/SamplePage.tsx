import React from "react";
import { CenteredContent, CircularLoader, colors } from "@dhis2/ui";

export default function SamplePage() {
  return (
    <div className="column center" style={{ height: "100%" }}>
      <CenteredContent>
        <h1 style={{ color: colors?.default }}>DHIS2 Community Tanzania</h1>
        <CircularLoader />
      </CenteredContent>
    </div>
  );
}
