"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUserName() {
  const cookiesStore = cookies();
  const userName = cookiesStore.get("name")?.value;
  if (!userName) redirect("/");

  return userName;
}
