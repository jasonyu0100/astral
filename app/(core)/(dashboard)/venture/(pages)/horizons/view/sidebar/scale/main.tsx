import { VentureHorizonsSidebarLabel } from '../(common)/label/main';
import { VentureHorizonsSidebarList } from '../(common)/list/main';
import { VentureHorizonsSidebarOption } from '../(common)/list/option/main';

export function VentureHorizonsSidebarScale() {
  return (
    <div className='flex flex-col'>
      <VentureHorizonsSidebarLabel>Scale</VentureHorizonsSidebarLabel>
      <VentureHorizonsSidebarList>
        <VentureHorizonsSidebarOption>Local</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>Group</VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption>Cluster</VentureHorizonsSidebarOption>
      </VentureHorizonsSidebarList>
    </div>
  );
}
