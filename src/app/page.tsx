import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { UserCard } from '@/components/user-card';
import { getServerSession } from '@/lib/server-session';

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-secondary'>
      <div className='container mx-auto px-4'>
        <h1 className='mb-8 text-center text-4xl font-bold'>ホーム</h1>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <UserCard user={session?.user} />
          <Card className='w-full max-w-[500px]'>
            <CardHeader>
              <h3 className='text-lg font-bold'>セッション情報</h3>
            </CardHeader>
            <CardContent>
              <pre className='overflow-x-auto text-sm'>{JSON.stringify(session, null, 2)}</pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
