const formatSettings = (arr: []): string => {
  let result = "";
  arr.forEach((ans, i) => {
    if (i != 0) result += ", " + ans;
    else result += ans;
  });
  return result;
};
export default formatSettings;
