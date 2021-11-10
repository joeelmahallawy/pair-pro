import { useUser } from "@auth0/nextjs-auth0";
import { createGlobalState } from "react-use";
import { atom, selector } from "recoil";

const userState = atom({
  key: "userState",
  default: {},
});

export { userState };
