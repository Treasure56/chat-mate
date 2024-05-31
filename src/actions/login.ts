"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const name = formData.get("name");
  const check = formData.get("checked");
  const cookiesStore = cookies();
  if (name && check) {
    cookiesStore.set("name", name.toString(), {
      maxAge: 60 * 60 * 24 * 3,
    });
    redirect("/chats");
  }
}
