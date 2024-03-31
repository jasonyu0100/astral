import { HorizonsSidebarLabel } from '../(common)/label/main';
import { HorizonsSidebarList } from '../(common)/list/main';
import { HorizonsSidebarOption } from '../(common)/list/option/main';

export function HorizonsSidebarDegree() {
  return (
    <div className='flex flex-col'>
      <HorizonsSidebarLabel>Degree</HorizonsSidebarLabel>
      <HorizonsSidebarList>
        <HorizonsSidebarOption>1st</HorizonsSidebarOption>
        <HorizonsSidebarOption>2nd</HorizonsSidebarOption>
        <HorizonsSidebarOption>3rd</HorizonsSidebarOption>
      </HorizonsSidebarList>
    </div>
  );
}
