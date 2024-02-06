import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function DraftConstellation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftConstellation.name}
      sizeStyle='w-full h-full'
      className={`${containerStyles['row']}`}
    >
      {children}
    </Layer>
  );
}
