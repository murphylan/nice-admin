import { getCurrentUser } from "@/server/auth/get-current-user";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getCurrentUser();

  console.log(JSON.stringify(user, null, 2));

  if (!user) {
    return redirect("/auth/sign-in");
  } else {
    redirect("/dashboard/overview");
  }
}
