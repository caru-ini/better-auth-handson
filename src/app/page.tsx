import { getServerSession } from '@/lib/server-session';

export default async function Home() {
  const session = await getServerSession();
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>Home</h1>
      <div className='flex flex-col justify-center'>
        <div className='flex items-center gap-2'>
          <p className='rounded-t-md bg-secondary p-2 text-secondary-foreground'>Your session</p>
        </div>
        <div className='h-[200px] w-[500px] overflow-y-auto rounded-md rounded-tl-none bg-gray-100 p-2'>
          <pre className='size-full overflow-y-auto rounded-md bg-gray-300 p-2'>
            <code>{JSON.stringify(session, null, 2)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
