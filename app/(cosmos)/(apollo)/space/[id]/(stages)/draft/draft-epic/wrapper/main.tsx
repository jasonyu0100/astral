import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';

export function DraftWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DraftWrapper.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Layer>
  );
}
