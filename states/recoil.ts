import { atom, selector } from "recoil";

const userInfoInit = selector({
  key: "userInfoinit",
  get: async ({ get }) => {
    try {
      const response = await fetch("http://localhost:3000/api/stats", {
        // headers: { Cookie: get .req.headers.cookie },
      });
      const responseData = await response.json();
      // console.log("getUsers called...");
      return responseData || {};
    } catch (error) {
      console.error(`allUsersState -> getUsers() ERROR: \n${error}`);
      return {};
    }
  },
});

const userInfo = atom({
  key: "userInfo",
  default: userInfoInit,
});

const firstLogin = atom({
  key: "firstLogin",
  default: true,
});

export { userInfo, firstLogin };
