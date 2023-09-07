import { Global } from "@mantine/core";
import light from "/Quicksand-Light.ttf";

export const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Quicksand",
            src: `url(${light}) format(ttf)`,
            fontWeight: 300,
            fontStyle: "normal",
          },

          body: {
            margin: 0,
          },
        },
      ]}
    />
  );
};
