import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';

export function FlowChapters({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={FlowChapters.name}
      sizeStyle='w-full h-[80px]'
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <div className='flex flex-row items-center justify-center h-full w-full space-x-[1rem] px-[1rem]'>
        {children}
      </div>
    </Layer>
  );
}
