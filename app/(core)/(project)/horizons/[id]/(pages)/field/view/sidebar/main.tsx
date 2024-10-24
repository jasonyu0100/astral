import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { HorizonsFieldSidebarHeader } from './header/main';

export function HorizonsFieldSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsFieldSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <HorizonsFieldSidebarHeader />
    </GlassAreaContainer>
  );
}
