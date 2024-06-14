import { HorizonsSidebarLabel } from '../(common)/label/main';
import { HorizonsSidebarList } from '../(common)/list/main';
import { HorizonsSidebarOption } from '../(common)/list/option/main';

export function HorizonsSidebarGuild() {
  return (
    <div className='flex flex-col'>
      <HorizonsSidebarLabel>Guild</HorizonsSidebarLabel>
      <HorizonsSidebarList>
        <HorizonsSidebarOption>Music</HorizonsSidebarOption>
        <HorizonsSidebarOption>Art</HorizonsSidebarOption>
        <HorizonsSidebarOption>Film</HorizonsSidebarOption>
      </HorizonsSidebarList>
    </div>
  );
}
