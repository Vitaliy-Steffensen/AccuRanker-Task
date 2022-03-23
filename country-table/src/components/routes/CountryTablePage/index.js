import { useQuery } from "@apollo/client";
import accuRankerIcon from "../../../assets/iamges/AccuRankerIcon.png";
import ContinentBadge from "../../ContinentBadge";
import Table from "../../Table";
import DefaultTemplate from "../../templates/DefaultTemplate";
import { GET_COUNTRIES } from "./getCountries";

function CountryTablePage() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  const columns = [
    {
      field: "code",
      name: "ISO Code",
      sortable: true,
    },
    {
      field: "name",
      name: "Country Name",
      sortable: true,
    },
    {
      field: "emoji",
      name: "Flag",
      sortable: true,
      render: (emoji) => <>{emoji}</>,
    },
    {
      field: "continent.name",
      name: "Continent",
      render: (continentName) => (
        <ContinentBadge continentName={continentName} />
      ),
      sortable: true,
    },
  ];

  const continentFilterOptions = data?.countries
    ?.reduce(
      (prevArray, current) =>
        prevArray.includes(current.continent.name)
          ? prevArray
          : [...prevArray, current.continent.name],
      []
    )
    .map((continentName) => ({
      value: continentName,
      name: continentName,
      view: <ContinentBadge continentName={continentName} />,
    }));

  const search = {
    filters: [
      {
        type: "field_value_selection",
        field: "code",
        name: "ISO Code",
        multiSelect: false,
        options: data?.countries?.map(({ code }) => ({
          value: code,
          name: code,
        })),
      },
      {
        type: "field_value_selection",
        field: "name",
        name: "Country Name",
        multiSelect: false,
        options: data?.countries?.map(({ name }) => ({
          value: name,
          name: name,
        })),
      },
      {
        type: "field_value_selection",
        field: "emoji",
        name: "Country Flag",
        multiSelect: false,
        options: data?.countries?.map(({ emoji }) => ({
          value: emoji,
          name: emoji,
        })),
      },
      {
        type: "field_value_selection",
        field: "continent.name",
        name: "Continent",
        multiSelect: false,
        options: continentFilterOptions,
      },
    ],
  };

  return (
    <DefaultTemplate
      pageHeader={{
        iconType: accuRankerIcon,
        breadcrumbs: [
          {
            text: "AccuRanker Task",
            href: "/",
          },
          {
            text: "Country Table",
            href: "/",
          },
        ],
        pageTitle: "Country Table",
        description: "A table-view of countries",
      }}
    >
      <Table
        data={data?.countries}
        columns={columns}
        sorting={true}
        loading={loading}
        error={error}
        search={search}
      />
    </DefaultTemplate>
  );
}

export default CountryTablePage;
