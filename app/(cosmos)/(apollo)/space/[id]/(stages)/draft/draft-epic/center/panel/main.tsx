import { Layer } from '@/(common)/layer/main';
import { borderStyles } from '@/(common)/styles/data';

export function DraftPanel({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DraftPanel.name}
      sizeStyle='w-[300px] h-full'
      className="flex flex-col"
      borderStyle={borderStyles['border-r']}
    >
        {children}
    </Layer>
  );
}
