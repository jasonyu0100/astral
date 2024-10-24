import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { HorizonsHorizonHeaderLeft } from './left/main';
import { HorizonsHorizonHeaderRight } from './right/main';

export function HorizonsHorizonHeader() {
  return (
    <GlassAreaContainer
      name={HorizonsHorizonHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <HorizonsHorizonHeaderLeft />
      <HorizonsHorizonHeaderRight />
    </GlassAreaContainer>
  );
}
