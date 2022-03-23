import React from "react";
import { EuiEmptyPrompt, EuiPageTemplate } from "@elastic/eui";

export default function ErrorPrompt({ error }) {
  return (
    <EuiPageTemplate
      template="centeredBody"
      pageContentProps={{ paddingSize: "none" }}
    >
      <EuiEmptyPrompt
        title={<span>An error has occurred</span>}
        body={error.message}
        actions={<a href="/">Try again</a>}
      />
    </EuiPageTemplate>
  );
}
