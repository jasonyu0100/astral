import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';

export function ExploreController({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={ExploreController.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles.col} p-[2rem] space-y-[2rem] overflow-auto`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Layer>
  );
}
