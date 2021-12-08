import { render, screen } from "@testing-library/react";
import Units from "@pages/units";

describe("Units page", () => {
  it("renders button group", () => {
    render(<Units />);

    const buttonGroup = screen.getByLabelText("button-group");

    expect(buttonGroup).toBeTruthy();
  });

  //   it("renders age of empires image", () => {
  //     render(<Units />);

  //     const ageOfEmpiresImage = screen.getAllByAltText("age-of-empires");

  //     expect(ageOfEmpiresImage).toBeTruthy();
  //   });
});
