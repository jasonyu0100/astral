import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles } from '@/(design)/(styles)/data';

export function GalleryPhoto({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={GalleryPhoto.name}
      className='flex flex-col'
      size='aspect-[11/16] w-full'
      glass={glassStyles['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
