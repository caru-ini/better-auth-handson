'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { client } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { LuAlertTriangle, LuArrowRight } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
export default function LoginPage() {
  const [error, setError] = useState('');
  const handleGithubLogin = async () => {
    await client.signIn.social({ provider: 'github' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const res = await client.signIn.email({ email, password, callbackURL: '/' });
    if (res.error) {
      setError(res.error.message ?? '未知のエラーが発生しました');
    }
  };
  return (
    <div className='flex flex-1 items-center justify-center bg-gray-100'>
      <Card className='w-[350px]'>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>ログイン</CardTitle>
            <CardDescription>アカウントにアクセスしてください</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {error && (
              <div className='flex items-center rounded-md bg-destructive/30 p-3 text-sm'>
                <LuAlertTriangle className='mr-2 shrink-0' />
                {error}
              </div>
            )}
            <div className='space-y-2'>
              <Label htmlFor='email'>メールアドレス</Label>
              <Input id='email' name='email' type='email' placeholder='your@email.com' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>パスワード</Label>
              <Input id='password' name='password' type='password' placeholder='••••••••' />
            </div>
          </CardContent>
          <CardFooter className='flex flex-col space-y-3'>
            <Button type='submit' className='w-full'>
              ログイン <LuArrowRight className='ml-2 size-4' />
            </Button>
            <Button
              type='button'
              variant='outline'
              className='w-full'
              onClick={() => handleGithubLogin()}
            >
              <SiGithub className='mr-2' /> GitHubでログイン
            </Button>
            <div className='text-center text-sm text-gray-500'>
              アカウントをお持ちでない場合は
              <Link href='/signup' className='ml-1 text-blue-500 hover:underline'>
                新規登録
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
