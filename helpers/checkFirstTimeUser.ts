import getUserId from "./getUserId";

const checkFirstTime = async (
  userID: string,
  setUser: (args: object) => void
) => {
  const dataToSend = {
    _id: userID,
  };

  // GET user
  const res = await fetch(`/api/mongo/`, {
    method: "GET",
    headers: dataToSend,
  });
  const resData = await res.json();
  console.log(`RESPONSE FROM API/MONGO:`, resData);

  // If user doesn't exist in database, POST to database
  // if (Object.keys(resData).length == 0) {
  if (userID) {
    fetch(`/api/mongo`, {
      method: `POST`,
      body: JSON.stringify(dataToSend),
    });
  }
  // console.log(dataToSend);
  // } else {
  // }
};
export default checkFirstTime;
