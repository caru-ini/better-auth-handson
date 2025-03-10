import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";

export const RSCSession = async ({ className }: { className?: string }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return <pre className={cn(className)}>{JSON.stringify(session, null, 2)}</pre>;
};
