"use client";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export const ClientSession = ({ className }: { className?: string }) => {
  const { data, isPending } = authClient.useSession();
  return <pre className={cn(className)}>{isPending ? "Loading..." : JSON.stringify(data, null, 2)}</pre>;
};
