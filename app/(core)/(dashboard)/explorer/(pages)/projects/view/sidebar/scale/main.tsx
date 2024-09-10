import { useContext } from 'react';
import { VentureHorizonsSidebarLabel } from '../(common)/label/main';
import { VentureHorizonsSidebarList } from '../(common)/list/main';
import { VentureHorizonsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonProjects,
  HorizonProjectScale,
} from '../../../controller/main';

export function VentureHorizonsSidebarScale() {
  const {
    state: { scale },
    actions: { updateScale },
  } = useContext(ContextForHorizonProjects);

  return (
    <div className='flex flex-col'>
      <VentureHorizonsSidebarLabel>Scale</VentureHorizonsSidebarLabel>
      <VentureHorizonsSidebarList>
        <VentureHorizonsSidebarOption
          active={scale === HorizonProjectScale.Local}
          onClick={() => updateScale(HorizonProjectScale.Local)}
        >
          Local
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={scale === HorizonProjectScale.Group}
          onClick={() => updateScale(HorizonProjectScale.Group)}
        >
          Group
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={scale === HorizonProjectScale.Cluster}
          onClick={() => updateScale(HorizonProjectScale.Cluster)}
        >
          Cluster
        </VentureHorizonsSidebarOption>
      </VentureHorizonsSidebarList>
    </div>
  );
}
