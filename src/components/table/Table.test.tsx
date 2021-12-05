import { render, screen } from "@testing-library/react";

import { Table, tableCols } from ".";
import data from "../../data/units.json";

describe("Table", () => {
  it("renders all data rows", () => {
    render(<Table data={data.units} />);

    const rowCount = screen.getAllByTestId("body-row");
    expect(rowCount).toHaveLength(data.units.length);
  });

  it("renders the table container", () => {
    render(<Table data={data.units} />);

    const tableContainer = screen.getByTestId("table-container");
    expect(tableContainer).toBeDefined();
  });

  it("renders the table head", () => {
    render(<Table data={data.units} />);

    const head = screen.getByTestId("table-head-row");

    expect(head.childElementCount).toEqual(tableCols.length);
  });
});
