import React from "react";
import {
  EuiKeyPadMenuItem,
  EuiPageTemplate,
  EuiKeyPadMenu,
  EuiIcon,
} from "@elastic/eui";

export default function DefaultTemplate({ children, pageHeader }) {
  return (
    <EuiPageTemplate
      style={{ minHeight: "100vh" }}
      pageSideBar={pageSideBar}
      pageHeader={pageHeader}
    >
      {children}
    </EuiPageTemplate>
  );
}

const pageSideBar = (
  <nav aria-label="Nav title" style={{ width: "100%" }}>
    <EuiKeyPadMenu style={{ margin: "auto", width: "fit-content" }}>
      <EuiKeyPadMenuItem label="Country Table" href="/">
        <EuiIcon type="tableDensityExpanded" />
      </EuiKeyPadMenuItem>
    </EuiKeyPadMenu>
  </nav>
);
