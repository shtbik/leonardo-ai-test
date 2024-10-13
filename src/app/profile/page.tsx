import { getSessionData } from "@/utils/session";
import { Login } from "../login/component";

export default async function ProfilePage() {
  const user = await getSessionData();

  return (
    <Login
      heading="Profile"
      initialValues={user}
      buttonProps={{ children: "Update" }}
    />
  );
}
