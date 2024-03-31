import { HorizonsSidebarLabel } from '../(common)/label/main';
import { HorizonsSidebarList } from '../(common)/list/main';
import { HorizonsSidebarOption } from '../(common)/list/option/main';

export function HorizonsSidebarScale() {
  return (
    <div className='flex flex-col'>
      <HorizonsSidebarLabel>Scale</HorizonsSidebarLabel>
      <HorizonsSidebarList>
        <HorizonsSidebarOption>Local</HorizonsSidebarOption>
        <HorizonsSidebarOption>Group</HorizonsSidebarOption>
        <HorizonsSidebarOption>Cluster</HorizonsSidebarOption>
      </HorizonsSidebarList>
    </div>
  );
}

