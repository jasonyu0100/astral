import { Layer } from '@/(common)/layer/main';
import { borderStyles } from '@/(common)/styles/data';

export function DraftPanel({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DraftPanel.name}
      sizeStyle='w-[300px] h-full'
      borderStyle={borderStyles['border-r']}
    >
      <div className='w-full h-full flex-shrink-0 flex flex-col p-[2rem] space-y-[1rem]'>
        {children}
      </div>
    </Layer>
  );
}
