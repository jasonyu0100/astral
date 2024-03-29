import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, borderStyles } from '@/(design)/(styles)/data';
import { SidebarNetworkHorizon } from './horizon/main';

export function JournalNetworkSidebarSection() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <SidebarNetworkHorizon/>
      <SidebarNetworkHorizon/>
      <SidebarNetworkHorizon/>
      <SidebarNetworkHorizon/>
    </div>
  );
}
