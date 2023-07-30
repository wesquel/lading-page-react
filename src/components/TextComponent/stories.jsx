import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia sapiente quibusdam incidunt consequatur debitis praesentium dolorum nulla voluptates! Sequi reprehenderit eligendi veniam ut numquam beatae molestiae? Animi, minima earum.`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
