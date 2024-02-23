import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-violet-950 to-slate-950'>
      <Suspense>{children}</Suspense>
    </div>
  );
}
