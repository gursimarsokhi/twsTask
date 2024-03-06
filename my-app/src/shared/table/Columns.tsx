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
    disableSortBy: false,
  },
  {
    Header: "Username",
    accessor: "username",
    disableSortBy: true,
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
  }, {
    Header: "View",
    accessor: "button",
    disableSortBy: true,
    Cell: ({ row }: any) => (
      <div>view</div>
    ),
  },

];
