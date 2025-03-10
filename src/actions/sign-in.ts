"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const signIn = async () => {
  const res = await auth.api.signInSocial({
    body: {
      provider: "github",
    },
  });
  return redirect(res.url ?? "/");
};
