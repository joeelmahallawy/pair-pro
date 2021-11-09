import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Dashboard() {
  return null;
}
export const getServerSideProps = withPageAuthRequired();
