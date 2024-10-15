import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonsBoardHeaderLeft } from './left/main';
import { HorizonsBoardHeaderRight } from './right/main';

export function HorizonsBoardHeader() {
  return (
    <GlassAreaContainer
      name={HorizonsBoardHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <HorizonsBoardHeaderLeft />
      <HorizonsBoardHeaderRight />
    </GlassAreaContainer>
  );
}
