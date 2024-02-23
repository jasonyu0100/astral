import { Glass } from '@/(components)/layer/main';
import { backgroundStyles } from '@/(components)/styles/data';

export function GalleryPhoto({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={GalleryPhoto.name}
      className='flex flex-col'
      sizeStyle='aspect-[11/16] w-full'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      {children}
    </Glass>
  );
}
