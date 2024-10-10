import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonsPointHeaderLeft } from './left/main';
import { HorizonsPointHeaderRight } from './right/main';

export function HorizonsPointHeader() {
  return (
    <GlassAreaContainer
      name={HorizonsPointHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <HorizonsPointHeaderLeft />
      <HorizonsPointHeaderRight />
    </GlassAreaContainer>
  );
}
