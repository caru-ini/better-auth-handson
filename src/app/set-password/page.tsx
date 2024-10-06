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
import { useState } from 'react';

export default function SetPasswordPage() {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newPassword = formData.get('newPassword') as string;
    const res = await client.user.setPassword({ newPassword });
    if (res.error) {
      setError(res.error.message ?? '未知のエラーが発生しました');
    }
  };
  return (
    <div className='flex flex-1 items-center justify-center bg-gray-100'>
      <Card>
        <CardHeader>
          <CardTitle>パスワードを設定</CardTitle>
          <CardDescription>パスワードを設定してください</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            {error && <div className='text-red-500'>{error}</div>}
            <div className='space-y-2'>
              <Label htmlFor='newPassword'>新しいパスワード</Label>
              <Input id='newPassword' name='newPassword' type='password' placeholder='••••••••' />
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit' className='w-full'>
              パスワードを設定
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
