'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { client } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

type UserCardProps = {
  user?: typeof client.$Infer.Session.user;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
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
          <CardFooter className='flex flex-col justify-between gap-2'>
            <div className='flex w-full justify-between gap-2'>
              <Button variant='secondary'>ログアウト</Button>
              <Button variant='outline' onClick={() => setIsMoreOptionsOpen(!isMoreOptionsOpen)}>
                オプション <LuChevronDown className='size-4' />
              </Button>
            </div>
            {isMoreOptionsOpen && (
              <div className='flex flex-col gap-2'>
                <Link href='/set-password' passHref>
                  <Button variant='secondary'>パスワードを設定</Button>
                </Link>
              </div>
            )}
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
