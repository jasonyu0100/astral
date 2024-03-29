import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles } from '@/(design)/(styles)/data';

export function CreativeFooter() {
  return (
    <GlassAreaContainer
      displayName={CreativeFooter.name}
      sizeStyle='w-full h-[60px]'
      className='flex flex-shrink-0 flex-row items-center justify-center'
      glassStyle={glassStyles['glass-5']}
    >
      <p className='font-bold text-slate-300'>200 results</p>
    </GlassAreaContainer>
  );
}
