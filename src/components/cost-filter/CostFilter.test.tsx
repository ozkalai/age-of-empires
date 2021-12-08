import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { CostFilter } from ".";

describe("CostFilter", () => {
  it("renders a checkbox", () => {
    render(
      <CostFilter
        updateSelectedCosts={() => {}}
        updateCostRange={() => {}}
        costType="Wood"
        value={[0, 200]}
        isChecked
        range={[0, 200]}
      />,
    );

    const checkBox = screen.getByTestId("cost-check");
    expect(checkBox).toBeTruthy();
  });

  it("renders  ", async () => {
    render(
      <CostFilter
        updateSelectedCosts={() => {}}
        updateCostRange={() => {}}
        costType="Wood"
        value={[0, 200]}
        isChecked
        range={[0, 200]}
      />,
    );

    const checkBox = screen.getByTestId("cost-check");
    fireEvent.click(checkBox);
    const costType = await screen.getByTestId("wrapper");

    expect(costType).toHaveClass("range");
  });
});
