import { getServerSession } from '@/lib/server-session';

export default async function Home() {
  const session = await getServerSession();
  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <div className='container'>
        <h1 className='text-4xl font-bold'>Home</h1>
        <div className='flex flex-col items-center justify-center'>
          <div className=' max-w-[800px] rounded-md rounded-tl-none bg-gray-100 p-2'>
            <div>
              <p className='rounded-t-md bg-gray-200 p-2 text-secondary-foreground'>Your session</p>
            </div>

            <pre className='size-full overflow-auto rounded-md rounded-t-none bg-gray-300 p-2'>
              <code>{JSON.stringify(session, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
