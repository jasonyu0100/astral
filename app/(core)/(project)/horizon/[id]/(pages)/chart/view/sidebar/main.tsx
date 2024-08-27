import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonChartSidebarEntry } from './entry/main';

export function HorizonChartSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonChartSidebar.name}
      sizeFx='w-[300px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-l']}
    >
      <HorizonChartSidebarEntry></HorizonChartSidebarEntry>
      <HorizonChartSidebarEntry></HorizonChartSidebarEntry>
      <HorizonChartSidebarEntry></HorizonChartSidebarEntry>
    </GlassAreaContainer>
  );
}
