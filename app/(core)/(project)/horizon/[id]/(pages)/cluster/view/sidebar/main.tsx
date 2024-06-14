import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { HorizonClusterSidebarEntry } from './entry/main';

export function HorizonClusterSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonClusterSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <HorizonClusterSidebarEntry>Marketing Group</HorizonClusterSidebarEntry>
      <HorizonClusterSidebarEntry>Sales Group</HorizonClusterSidebarEntry>
      <HorizonClusterSidebarEntry>Production Group</HorizonClusterSidebarEntry>
    </GlassAreaContainer>
  );
}
