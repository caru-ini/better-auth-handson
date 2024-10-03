'use client';
import { Button } from '@/components/ui/button';
import { client } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuLoader2, LuLogOut } from 'react-icons/lu';

export const LogoutButton: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await client.signOut({ fetchOptions: { onSuccess: () => router.push('/login') } });
    } catch (error) {
      console.error('ログアウト中にエラーが発生しました:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button variant='ghost' size='icon' onClick={handleLogout}>
      {isLoading ? (
        <LuLoader2 className='size-[1.2rem] animate-spin' />
      ) : (
        <LuLogOut className='size-[1.2rem]' />
      )}
      <span className='sr-only'>ログアウト</span>
    </Button>
  );
};
