export default function getUserId(user: any) {
  return user.sub?.slice(user?.sub.indexOf("|") + 1);
}
