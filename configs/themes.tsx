import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: {
      fontFamily: "Raleway",
      fontSize: ["20px", "25px", "30px", "40px", "40px", "50px"],
      fontWeight: "bold",
    },
    body: "Raleway",
  },
  navButtons: {
    size: "md",
    fontFamily: "mono",
    ml: 3,
    bg: "transparent",
    borderRadius: "0",
    _hover: { borderBottom: "1px solid white" },
  },
});

export default theme;
