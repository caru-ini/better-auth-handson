'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { client } from '@/lib/auth-client';
import { ChevronDown, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

type UserCardProps = {
  user?: typeof client.$Infer.Session.user;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onSignOut = async () => {
    await client.signOut();
    startTransition(() => {
      router.push('/signin');
    });
  };
  return (
    <Card className='w-full max-w-[500px]'>
      {user ? (
        <>
          <CardHeader className='relative h-32 bg-gradient-to-r from-blue-500 to-purple-500'>
            <div className='absolute -bottom-16 left-4'>
              <Avatar className='size-24 border-4 border-white'>
                <AvatarImage src={user?.image} />
                <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </div>
          </CardHeader>
          <CardContent className='pt-20'>
            <h2 className='text-2xl font-bold'>{user?.name || 'ユーザー名'}</h2>
            <p className='text-muted-foreground'>{user?.email || 'メールアドレス'}</p>
          </CardContent>
          <CardFooter className='flex justify-between gap-2'>
            <Button variant='secondary' onClick={onSignOut} disabled={isPending}>
              {isPending ? <Loader2 className='size-4 animate-spin' /> : 'ログアウト'}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='secondary'>
                  <ChevronDown className='size-4' /> 詳細設定
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push('/set-password')}>
                  パスワードを設定
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
  );
};
