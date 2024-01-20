import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function StormChatMessages({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='flex flex-col items-center w-full overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='max-w-[900px] w-full flex flex-col space-y-[1rem] py-[2rem]'>
        {children}
      </div>
    </div>
  );
}
