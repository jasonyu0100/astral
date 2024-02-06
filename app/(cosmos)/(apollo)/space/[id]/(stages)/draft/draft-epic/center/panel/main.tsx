import { Layer } from '@/(common)/layer/main';
import { borderStyles } from '@/(common)/styles/data';

export function DraftPanel({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DraftPanel.name}
      sizeStyle='w-[300px] h-full'
      borderStyle={borderStyles['border-r']}
    >
      <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[2rem]'>
        {children}
      </div>
    </Layer>
  );
}
