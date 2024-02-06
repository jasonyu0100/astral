import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function StormChatMessages({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='flex w-full flex-col items-center overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[1rem] py-[2rem]'>
        {children}
      </div>
    </div>
  );
}
