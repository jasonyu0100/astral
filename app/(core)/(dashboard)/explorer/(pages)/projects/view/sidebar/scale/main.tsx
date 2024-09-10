import { useContext } from 'react';
import { ExplorerProjectsSidebarLabel } from '../(common)/label/main';
import { ExplorerProjectsSidebarList } from '../(common)/list/main';
import { ExplorerProjectsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonProjects,
  HorizonsProjectScale,
} from '../../../controller/main';

export function ExplorerProjectsSidebarScale() {
  const {
    state: { scale },
    actions: { updateScale },
  } = useContext(ContextForHorizonProjects);

  return (
    <div className='flex flex-col'>
      <ExplorerProjectsSidebarLabel>Scale</ExplorerProjectsSidebarLabel>
      <ExplorerProjectsSidebarList>
        <ExplorerProjectsSidebarOption
          active={scale === HorizonsProjectScale.Local}
          onClick={() => updateScale(HorizonsProjectScale.Local)}
        >
          {HorizonsProjectScale.Local} - Local
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={scale === HorizonsProjectScale.Group}
          onClick={() => updateScale(HorizonsProjectScale.Group)}
        >
          {HorizonsProjectScale.Group} - Group
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={scale === HorizonsProjectScale.Cluster}
          onClick={() => updateScale(HorizonsProjectScale.Cluster)}
        >
          {HorizonsProjectScale.Cluster} - Cluster
        </ExplorerProjectsSidebarOption>
      </ExplorerProjectsSidebarList>
    </div>
  );
}
