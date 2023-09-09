import { Box, rem } from "@mantine/core";
import { ReactNode } from "react";

export const PageLayout = (props: { children: ReactNode }) => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      sx={(theme) => ({
        justifyContent: "center",
        boxSizing: "border-box",
        padding: rem(40),

        [theme.fn.smallerThan("md")]: {
          padding: rem(10),
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: "60%",
          [theme.fn.smallerThan("md")]: {
            width: "100%",
          },
        })}
      >
        {props.children}
      </Box>
    </Box>
  );
};
