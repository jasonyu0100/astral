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
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['row']}`}
    >
      {children}
    </Layer>
  );
}
