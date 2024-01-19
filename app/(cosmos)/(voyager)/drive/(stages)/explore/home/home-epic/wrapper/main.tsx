import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function CollectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={CollectionWrapper.name}
      sizeStyle='w-full h-full'
      className={`${containerStyles.row}`}
    >
      {children}
    </Layer>
  );
}
