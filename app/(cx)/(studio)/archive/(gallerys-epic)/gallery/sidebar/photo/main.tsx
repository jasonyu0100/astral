import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles } from '@/(design)/(styles)/data';

export function GalleryPhoto({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={GalleryPhoto.name}
      className='flex flex-col'
      sizeStyle='aspect-[11/16] w-full'
      glassStyle={glassStyles['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
