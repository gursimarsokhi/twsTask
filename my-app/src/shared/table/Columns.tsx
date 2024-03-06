import * as React from "react";
import * as Styles from "./styles";
import { Style } from "util";
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Email",
    accessor: "email",
    disableSortBy: true,
  },
  {
    Header: "City",
    accessor: "city",
    disableSortBy: true,
  },
  {
    Header: "",
    accessor: "button",
    disableSortBy: true,
    Cell: ({ row }: any) => (
      <div>view</div>
    ),
  },

];
