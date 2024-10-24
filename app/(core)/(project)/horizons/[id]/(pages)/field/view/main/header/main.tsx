import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { HorizonsFieldHeaderLeft } from './left/main';
import { HorizonsFieldHeaderRight } from './right/main';

export function HorizonsFieldHeader() {
  return (
    <GlassAreaContainer
      name={HorizonsFieldHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <HorizonsFieldHeaderLeft />
      <HorizonsFieldHeaderRight />
    </GlassAreaContainer>
  );
}
