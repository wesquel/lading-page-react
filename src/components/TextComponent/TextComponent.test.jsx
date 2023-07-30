import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { TextComponent } from ".";
//import { theme } from "../../styles/theme";

describe("<TextComponent />", () => {
  it("should render a text", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText("Children")).toBeInTheDocument;
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchSnapshot;
  });
});
