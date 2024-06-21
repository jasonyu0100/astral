import { VentureHorizonsSidebarLabel } from '../(common)/label/main';
import { VentureHorizonsSidebarList } from '../(common)/list/main';
import { VentureHorizonsSidebarOption } from '../(common)/list/option/main';

export function VentureHorizonsSidebarGuild() {
  return (
    <div className='flex flex-col'>
      <VentureHorizonsSidebarLabel>Guild</VentureHorizonsSidebarLabel>
      <VentureHorizonsSidebarList>
        <VentureHorizonsSidebarOption>Music</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>Art</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>Film</VentureHorizonsSidebarOption>
      </VentureHorizonsSidebarList>
    </div>
  );
}
