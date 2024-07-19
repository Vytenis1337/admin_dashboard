import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Users() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return <div>Loged In: {user?.given_name} </div>;
}
