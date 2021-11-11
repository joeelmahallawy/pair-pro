import { createGlobalState } from "react-use";
import { atom, selector } from "recoil";

// const userInfoInit = selector({
//   key: "userInfoinit",
//   get: async ({ get }) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/stats", {
//         // headers: { Cookie: get .req.headers.cookie },
//       });
//       const responseData = await response.json();
//       // console.log("getUsers called...");
//       return responseData || {};
//     } catch (error) {
//       console.error(`allUsersState -> getUsers() ERROR: \n${error}`);
//       return {};
//     }
//   },
// });
const useGlobalValue = createGlobalState(async () => {
  const res = await fetch("http://localhost:3000/api/stats");
  const data = await res.json();
  return data;
});

const userInfo = atom({
  key: "userInfo",
  default: {},
});

const firstLogin = atom({
  key: "firstLogin",
  default: true,
});

export { userInfo, firstLogin, useGlobalValue };
