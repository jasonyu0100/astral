import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';

export function DraftChapters({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DraftChapters.name}
      sizeStyle='w-full h-[80px]'
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <div className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'>
        {children}
      </div>
    </Layer>
  );
}
