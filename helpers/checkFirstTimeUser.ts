import getUserId from "./getUserId";

const checkFirstTime = async (
  user: object,
  setUser: (args: object) => void
) => {
  const dataToSend = {
    id: getUserId(user),
  };
  // GET REQUESTS
  const res = await fetch(`/api/mongo/`, {
    headers: dataToSend,
  });
  const resData = await res.json();
  console.log(`responseData:`, resData);

  if (resData == {}) {
    const userInstance = JSON.stringify(dataToSend);
    fetch("/api/mongo", {
      method: "POST",
      body: userInstance,
    });
    // setUser(user);
  }
};
export default checkFirstTime;
