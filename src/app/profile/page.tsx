import { getSessionData } from "@/utils/session";
import Login from "../login/page";

export default async function Profile() {
  const user = await getSessionData();

  return <Login initialValues={user} />;
}
