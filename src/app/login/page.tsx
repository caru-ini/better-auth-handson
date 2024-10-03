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
import { client, signOut } from '@/lib/auth-client';
import { LuArrowRight } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';

export default function LoginPage() {
  const handleGithubLogin = async () => {
    await client.signIn.social({ provider: 'github' });
  };
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <Card className='w-[350px]'>
        <CardHeader>
          <Button onClick={() => signOut()}>ログアウト</Button>

          <CardTitle>ログイン</CardTitle>
          <CardDescription>ログインしてください</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>メールアドレス</Label>
                <Input id='email' type='email' placeholder='メールアドレスを入力' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='password'>パスワード</Label>
                <Input id='password' type='password' placeholder='パスワードを入力' />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex flex-col space-y-2'>
          <Button className='w-full'>
            ログイン <LuArrowRight className='ml-2 size-4' />
          </Button>
          <Button variant='outline' className='w-full' onClick={() => handleGithubLogin()}>
            <SiGithub className='mr-2' /> GitHubでログイン
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
