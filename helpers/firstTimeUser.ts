import getUserId from "./getUserId";

const firstTimeUser = (
  user: any,
  setLog: (arg: boolean) => void,
  setData: (arg: any) => void
) => {
  if (!window.localStorage.getItem(getUserId(user))) {
    window.localStorage.setItem(getUserId(user), getUserId(user));
    setLog(true);
  } else {
    setLog(false);
  }
  setData(user);
};
export default firstTimeUser;
