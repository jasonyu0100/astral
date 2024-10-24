import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { HorizonsArcHeaderLeft } from './left/main';
import { HorizonsArcHeaderRight } from './right/main';

export function HorizonsArcHeader() {
  return (
    <GlassAreaContainer
      name={HorizonsArcHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <HorizonsArcHeaderLeft />
      <HorizonsArcHeaderRight />
    </GlassAreaContainer>
  );
}
