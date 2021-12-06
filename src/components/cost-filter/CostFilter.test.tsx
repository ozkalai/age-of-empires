import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { CostFilter } from ".";

describe("CostFilter", () => {
  it("renders a checkbox", () => {
    render(<CostFilter costType="Wood" setUnitsWithCosts={() => {}} range={[0, 200]} />);

    const checkBox = screen.getByTestId("cost-check");
    expect(checkBox).toBeTruthy();
  });

  it("renders  ", async () => {
    render(<CostFilter costType="Wood" setUnitsWithCosts={() => {}} range={[0, 200]} />);

    const checkBox = screen.getByTestId("cost-check");
    fireEvent.click(checkBox);
    const costType = await screen.getByTestId("wrapper");

    expect(costType).toHaveClass("range");
  });

  it("renders max value 200", () => {
    render(<CostFilter costType="Wood" setUnitsWithCosts={() => {}} range={[0, 200]} />);

    const slider = screen.getByTestId("slider");
    expect(slider).toBeTruthy();
  });
});