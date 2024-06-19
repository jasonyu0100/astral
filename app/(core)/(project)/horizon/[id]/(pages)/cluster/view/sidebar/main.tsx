import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { HorizonClusterSidebarEntry } from './entry/main';

export function HorizonClusterSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonClusterSidebar.name}
      sizeFx='w-[300px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-l']}
    >
      <HorizonClusterSidebarEntry>Marketing Group</HorizonClusterSidebarEntry>
      <HorizonClusterSidebarEntry>Sales Group</HorizonClusterSidebarEntry>
      <HorizonClusterSidebarEntry>Production Group</HorizonClusterSidebarEntry>
    </GlassAreaContainer>
  );
}
