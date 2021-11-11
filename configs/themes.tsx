import {
  extendTheme,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const themes = extendTheme({
  fonts: {
    heading: {
      fontFamily: "Raleway",
      fontSize: ["20px", "25px", "30px", "40px", "40px", "50px"],
      fontWeight: "bold",
    },
    body: "Raleway",
    titles: {
      mb: 8,
      fontSize: "3em",
      textDecor: "underline",
      textUnderlineOffset: "20%",
      fontFamily: "Roboto",
    },
  },
  navButtons: {
    size: "lg",
    fontFamily: "Arial",
    ml: 3,
    bg: "transparent",
    borderRadius: "0",
    _hover: { borderBottom: "1px solid white" },
    _focus: {},
    _active: {},
  },
  userSettingFields: {
    alignItems: "center",
    justifyContent: "space-between",
    bg: "gray.800",
    p: 3,
    borderRadius: 10,
  },
  railwayBg: "#13111c",
});

const bounce = keyframes`
    from { transform: translate(0px, -5px) }
    to { transform: translate(0px, 5px); }
  `;

const bounceAnimation = `${bounce} infinite 1.5s linear`;

export { themes, bounceAnimation };
