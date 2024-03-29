import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(design)/(fx)/data';

export function GalleryPhoto({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={GalleryPhoto.name}
      className='flex flex-col'
      sizeFx='aspect-[11/16] w-full'
      glassFx={glassFx['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
