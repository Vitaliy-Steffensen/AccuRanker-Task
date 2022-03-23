import React from "react";
import { EuiInMemoryTable, EuiLoadingChart } from "@elastic/eui";
import ErrorPrompt from "../ErrorPrompt";

export default function Table({
  data = [],
  columns,
  loading = false,
  error = null,
  sorting = false,
  search,
}) {
  if (error) return <ErrorPrompt error={error} />;

  if (loading)
    return (
      <EuiLoadingChart
        size="l"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "150px",
        }}
      />
    );

  return (
    <div>
      <EuiInMemoryTable
        tableCaption="Demo of EuiInMemoryTable with custom sorting"
        items={data}
        columns={columns}
        pagination={false}
        sorting={sorting}
        search={search}
        tableLayout="auto"
      />
    </div>
  );
}
