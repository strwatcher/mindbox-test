import { MantineProvider, rem } from "@mantine/core";
import { CustomFonts } from "./styles/fonts";
import { TodoPage } from "@/pages/todo";

export const App = () => {
  return (
    <MantineProvider
      theme={{
        headings: {
          fontFamily: "Quicksand, sans-serif",
          sizes: {
            h1: { fontWeight: 300, fontSize: rem(72) },
          },
        },
        components: {
          Paper: {
            defaultProps: {
              shadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            },
          },
          TextInput: {
            defaultProps: {
              radius: "xl",
            },
            styles: {
              input: {
                fontSize: rem(22),
              },
            },
          },
        },
      }}
    >
      <CustomFonts />
      <TodoPage />
    </MantineProvider>
  );
};
