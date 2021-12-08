import React from "react";
import Link from "next/link";

import MaUTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { ICost, IUnitCommon } from "@/typing/Unit";
import { Button } from "@material-ui/core";
import { renderCost } from "../../utils/render-cost";

interface IRow extends Pick<IUnitCommon, "id" | "age" | "name" | "cost"> {}

interface ITable {
  data: IRow[];
}

export const tableCols = ["ID", "Name", "Age", "ICost", " "];

export const Table: React.FC<ITable> = ({ data }) => {
  return (
    <div className="w-full overflow-scroll">
      <TableContainer data-testid="table-container">
        <MaUTable data-testid="mau">
          <TableHead>
            <TableRow data-testid="table-head-row">
              {tableCols.map((name) => (
                <TableCell variant="head" key={`head-cell-${name}`}>
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow data-testid="body-row" key={`body-row-${row.id}`}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <div className="hidden md:block">{row.name}</div>
                    <div className="block md:hidden">
                      <Link href={`/units/${row.id}`}>
                        <a className="underline">{row.name}</a>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{renderCost(row.cost)}</TableCell>
                  <TableCell align="left" padding="none">
                    <div className="hidden md:block">
                      <Link href={`/units/${row.id}`}>
                        <Button className="hidden md:block w-1/2 md:w-full" variant="outlined">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </MaUTable>
      </TableContainer>
    </div>
  );
};
