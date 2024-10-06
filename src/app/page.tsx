import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getServerSession } from '@/lib/server-session';

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-secondary'>
      <div className='container mx-auto px-4'>
        <h1 className='mb-8 text-center text-4xl font-bold'>ホーム</h1>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <Card className='w-full max-w-[500px]'>
            {session ? (
              <>
                <CardHeader className='relative h-32 bg-gradient-to-r from-blue-500 to-purple-500'>
                  <div className='absolute -bottom-16 left-4'>
                    <Avatar className='size-24 border-4 border-white'>
                      <AvatarImage src={session.user?.image || ''} />
                      <AvatarFallback>
                        {session.user?.name?.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent className='pt-20'>
                  <h2 className='text-2xl font-bold'>{session.user?.name || 'ユーザー名'}</h2>
                  <p className='text-muted-foreground'>{session.user?.email || 'メールアドレス'}</p>
                </CardContent>
                <CardFooter className='flex justify-between'>
                  <Button variant='secondary'>ログアウト</Button>
                </CardFooter>
              </>
            ) : (
              <CardContent className='p-4'>
                <p className='text-center text-muted-foreground'>セッションがありません</p>
                <Button className='mt-4 w-full' variant='default'>
                  ログイン
                </Button>
              </CardContent>
            )}
          </Card>
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
