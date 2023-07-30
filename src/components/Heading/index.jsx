import P from "prop-types";
import * as Styled from "./styles";

export const Heading = ({ children, colorDark = true, as = "h1", size = "huge", upperCase = false }) => {
  return (
    <Styled.Title colorDark={colorDark} as={as} size={size} upperCase={upperCase}>
      {children}
    </Styled.Title>
  );
};

Heading.defaultProps = {
  $colorDark: true,
  as: "h1",
  size: "big",
  $upperCase: false,
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  upperCase: P.bool,
  as: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: P.oneOf(["small", "medium", "big", "huge"]),
};
