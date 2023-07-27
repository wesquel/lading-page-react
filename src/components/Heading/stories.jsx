import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "O texto está escuro",
    //colorDark: false,
  },
  argTypes: {
    children: { type: "string" },
    //colorDark: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "O texto está claro",
  colorDark: false,
};
