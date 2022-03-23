import React from "react";
import { EuiBadge } from "@elastic/eui";

export default function ContinentBadge({ continentName }) {
  let color;

  switch (continentName) {
    case "Europe":
      color = "#29A0B1";
      break;
    case "North America":
      color = "#167D7F";
      break;
    case "South America":
      color = "#98D7C2";
      break;
    case "Asia":
      color = "#DDFFE7";
      break;
    case "Oceania":
      color = "#66AA99";
      break;
    case "Africa":
      color = "#B4F8C8";
      break;
    case "Antarctica":
      color = "#DCEDFC";
      break;
    default:
      color = "#fff";
      break;
  }

  return <EuiBadge color={color}>{continentName}</EuiBadge>;
}
