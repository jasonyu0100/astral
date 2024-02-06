import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';

export function GalleryContainer({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={GalleryContainer.name}
      sizeStyle='h-[500px] aspect-[11/16]'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <div className='flex h-full w-full flex-col'>{children}</div>
    </Layer>
  );
}
