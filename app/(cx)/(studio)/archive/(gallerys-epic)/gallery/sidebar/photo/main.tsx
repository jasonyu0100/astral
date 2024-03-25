import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles } from '@/(design)/(styles)/data';

export function GalleryPhoto({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={GalleryPhoto.name}
      className='flex flex-col'
      sizeStyle='aspect-[11/16] w-full'
      glassStyle={glassStyles['glass-10']}
    >
      {children}
    </GlassContainer>
  );
}
