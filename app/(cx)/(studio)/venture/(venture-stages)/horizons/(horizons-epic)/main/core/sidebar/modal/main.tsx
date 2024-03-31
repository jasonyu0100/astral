import { HorizonsSidebarLabel } from '../(common)/label/main';
import { HorizonsSidebarList } from '../(common)/list/main';
import { HorizonsSidebarOption } from '../(common)/list/option/main';

export function HorizonsSidebarModal() {
  return (
    <div className='flex flex-col'>
      <HorizonsSidebarLabel>Modal</HorizonsSidebarLabel>
      <HorizonsSidebarList>
        <HorizonsSidebarOption>Music</HorizonsSidebarOption>
        <HorizonsSidebarOption>Film</HorizonsSidebarOption>
        <HorizonsSidebarOption>Art</HorizonsSidebarOption>
      </HorizonsSidebarList>
    </div>
  );
}

