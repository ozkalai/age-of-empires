import React from "react";
import { useTable } from "react-table";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface ITable {
  data: any[];
}

export const Table: React.FC<ITable> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "name",
        accessor: "col2",
      },
      {
        Header: "age",
        accessor: "col3", // accessor is the "key" in the data
      },
      {
        Header: "costs",
        accessor: "col4",
      },
    ],
    [],
  );

  const data = ["", ""];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, index) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={index + 1}>
            {headerGroup.headers.map((column, idx) => (
              <TableCell {...column.getHeaderProps()} key={idx + 1}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()} key={i + 1}>
              {row.cells.map((cell, j) => {
                return (
                  <TableCell {...cell.getCellProps()} key={j + 1}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};
