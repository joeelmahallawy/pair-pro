import getUserId from "./getUserId";

const checkFirstTime = async (
  user: object,
  setUser: (args: object) => void
) => {
  if (user) {
    const dataToSend = {
      _id: getUserId(user),
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
    };
    // GET user
    const res = await fetch(`/api/mongo/`, {
      headers: dataToSend,
    });
    const resData = await res.json();

    // If user doesn't exist in database, POST to database
    if (Object.keys(resData).length == 0) {
      const userInstance = JSON.stringify(dataToSend);
      fetch("/api/mongo", {
        method: "POST",
        body: userInstance,
      });
      setUser(user);
      console.log("its the users first time signing in");
    } else {
      setUser({ ...user, firstTime: true });
      console.log("its NOT the users first time signing in");
    }
  }
};
export default checkFirstTime;
