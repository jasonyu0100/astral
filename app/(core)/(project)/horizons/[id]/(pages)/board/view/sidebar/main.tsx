import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonsBoardSidebarHeader } from './header/main';

export function HorizonsBoardSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsBoardSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <HorizonsBoardSidebarHeader />
    </GlassAreaContainer>
  );
}
