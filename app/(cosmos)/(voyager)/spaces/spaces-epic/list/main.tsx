import { containerStyles } from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';

export function SpacesList({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      sizeStyle='w-full'
      displayName={SpacesList.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 p-[2rem] ${containerStyles['col-center']}`}
    >
      {children}
    </Layer>
  );
}
