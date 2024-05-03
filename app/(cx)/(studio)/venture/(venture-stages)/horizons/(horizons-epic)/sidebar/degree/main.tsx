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
        <HorizonsSidebarOption>4th</HorizonsSidebarOption>
        <HorizonsSidebarOption>5th</HorizonsSidebarOption>
        <HorizonsSidebarOption>6th</HorizonsSidebarOption>
        <HorizonsSidebarOption>7th</HorizonsSidebarOption>
        <HorizonsSidebarOption>8th</HorizonsSidebarOption>
        <HorizonsSidebarOption>9th</HorizonsSidebarOption>
      </HorizonsSidebarList>
    </div>
  );
}
