import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function UserAccount() {
  return null;
}
export const getServerSideProps = withPageAuthRequired();
