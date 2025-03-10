import { signIn } from "@/actions/sign-in";
import { ClientSession } from "@/components/client-session";
import { RSCSession } from "@/components/rsc-session";
import { SignOut } from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="container mx-auto flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Better Auth Hands On</h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Current Session</h2>
          <Tabs defaultValue="rsc">
            <TabsList>
              <TabsTrigger value="rsc">RSC</TabsTrigger>
              <TabsTrigger value="client">Client</TabsTrigger>
            </TabsList>
            <TabsContent value="rsc">
              <RSCSession className="bg-gray-100 p-4 rounded-md" />
            </TabsContent>
            <TabsContent value="client">
              <ClientSession className="bg-gray-100 p-4 rounded-md" />
            </TabsContent>
          </Tabs>
        </div>
        <form action={signIn}>
          <Button>Sign in with Github</Button>
        </form>
        <div>
          <SignOut />
        </div>
      </div>
    </div>
  );
}
