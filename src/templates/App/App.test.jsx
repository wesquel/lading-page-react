import Home from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

test("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);
  debug();
  const headingContainer = screen.getByRole("heading", { name: "Hello" }).parentElement;
  //expect(headingContainer).toHaveStyleRule("backgorund", "red");
  expect(headingContainer).toMatchSnapshot();
});
