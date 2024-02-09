import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';

export function GalleryContainer({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={GalleryContainer.name}
      className='flex flex-col'
      sizeStyle='aspect-[11/16] w-3/4'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      {children}
    </Layer>
  );
}
