import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';

export function GalleryContainer({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={GalleryContainer.name}
      className="flex h-full w-full flex-col"
      sizeStyle='h-[500px] aspect-[11/16]'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      {children}
    </Layer>
  );
}
