'use client';
import { Button } from '@/components/ui/button';
import { client } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LuLoader2, LuLogOut } from 'react-icons/lu';

export const LogoutButton: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleLogout = async () => {
    try {
      await client.signOut();
      startTransition(() => {
        router.push('/signin');
      });
    } catch (error) {
      console.error('ログアウト中にエラーが発生しました:', error);
    }
  };

  return (
    <Button variant='ghost' size='icon' onClick={handleLogout}>
      {isPending ? (
        <LuLoader2 className='size-[1.2rem] animate-spin' />
      ) : (
        <LuLogOut className='size-[1.2rem]' />
      )}
      <span className='sr-only'>ログアウト</span>
    </Button>
  );
};
