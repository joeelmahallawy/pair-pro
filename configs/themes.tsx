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
    size: "md",
    fontFamily: "mono",
    ml: 3,
    bg: "transparent",
    borderRadius: "0",
    _hover: { borderBottom: "1px solid white" },
    _focus: {},
    _active: {},
  },
});

const bounce = keyframes`
    from { transform: translate(0px, -5px) }
    to { transform: translate(0px, 5px); }
  `;

const bounceAnimation = `${bounce} infinite 1.5s linear`;

export { themes, bounceAnimation };
