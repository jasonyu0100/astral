import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function ArtistCollection({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={ArtistCollection.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col-center']}`}
    >
      <GlassContainer
        sizeStyle='w-full h-[120px]'
        className='flex flex-shrink-0 flex-row items-center justify-center'
        glassStyle={backgroundStyles['glass-5']}
      >
        <p className='font-bold text-slate-300'>Search People</p>
      </GlassContainer>
      {children}
      <GlassContainer
        sizeStyle='w-full h-[60px]'
        className='flex flex-shrink-0 flex-row items-center justify-center'
        glassStyle={backgroundStyles['glass-5']}
      >
        <p className='font-bold text-slate-300'>200 results</p>
      </GlassContainer>
    </GlassContainer>
  );
}
