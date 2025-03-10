"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const SignOut = () => {
  const router = useRouter();
  const signOut = async () => {
    await authClient.signOut();
    router.refresh();
  };
  return (
    <Button variant={"outline"} onClick={signOut}>
      Sign out
    </Button>
  );
};
