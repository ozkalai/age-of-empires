import React from "react";
import { render, screen } from "@testing-library/react";
import DetailPage from "../pages/units/[id]";
import { createMockRouter } from "../__mocks__/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Detail", () => {
  it("renders unit name", () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({
          query: {
            id: "1",
          },
        })}
      >
        <DetailPage />
      </RouterContext.Provider>,
    );

    expect(screen.queryByText("Archer")).toBeTruthy();
  });
});
