import getUserId from "./getUserId";

const checkFirstTime = async (
  user: object,
  setUser: (args: object) => void
) => {
  // const res = await fetch("/api/mongo");
  // const data = await res.json();

  // console.log(data);
  const userInstance = {
    id: getUserId(user),
  };
  fetch("/api/mongo", {
    method: "POST",
    body: JSON.stringify(userInstance),
  });
  //   TODO:TODO:TODO:
  // if()
  //   fetch("/api/mongo", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       _id: getUserId(user),
  //     }),
  //   });
  // TODO:TODO:
  // if (!window.localStorage.getItem(getUserId(user))) {
  //   user && window.localStorage.setItem(getUserId(user), getUserId(user));
  //   setUser(user);
  // }
  // if (window.localStorage.getItem(getUserId(user))) {
  //   setUser({ ...user, firstTime: true });
  // }
};
export default checkFirstTime;
