import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';

export function GalleryPhoto({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={GalleryPhoto.name}
      className='flex flex-col'
      sizeStyle='aspect-[11/16] w-full'
      glassStyle={backgroundStyles['glass-10']}
    >
      {children}
    </GlassContainer>
  );
}
