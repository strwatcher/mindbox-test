import { Box, rem } from "@mantine/core";
import { ReactNode } from "react";

export const PageLayout = (props: { children: ReactNode }) => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      p={rem(40)}
      display={"flex"}
      sx={{ justifyContent: "center", boxSizing: "border-box" }}
    >
      <Box w={"60%"}>{props.children}</Box>
    </Box>
  );
};
