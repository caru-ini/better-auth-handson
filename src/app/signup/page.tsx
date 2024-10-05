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
import { LuAlertTriangle } from 'react-icons/lu';

export default function SignupPage() {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;
    const res = await client.signUp.email({ email, password, name, callbackURL: '/' });
    if (res.error) {
      setError(res.error.message ?? '未知のエラーが発生しました');
    }
  };
  return (
    <div className='flex flex-1 items-center justify-center bg-gray-100'>
      <Card className='w-[350px]'>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>Signup</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className='flex items-center rounded-md bg-destructive/30 p-2'>
                <LuAlertTriangle className='mr-1' />
                {error}
              </div>
            )}
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' name='name' type='text' />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' type='email' />
            </div>
            <div>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' name='password' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit'>Signup</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
