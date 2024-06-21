import { VentureHorizonsSidebarLabel } from '../(common)/label/main';
import { VentureHorizonsSidebarList } from '../(common)/list/main';
import { VentureHorizonsSidebarOption } from '../(common)/list/option/main';

export function VentureHorizonsSidebarDegree() {
  return (
    <div className='flex flex-col'>
      <VentureHorizonsSidebarLabel>Degree</VentureHorizonsSidebarLabel>
      <VentureHorizonsSidebarList>
        <VentureHorizonsSidebarOption>1st</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>2nd</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>3rd</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>4th</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>5th</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>6th</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>7th</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>8th</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>9th</VentureHorizonsSidebarOption>
      </VentureHorizonsSidebarList>
    </div>
  );
}
