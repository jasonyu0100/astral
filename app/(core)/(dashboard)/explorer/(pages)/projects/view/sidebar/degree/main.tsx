import { useContext } from 'react';
import { ExplorerProjectsSidebarLabel } from '../(common)/label/main';
import { ExplorerProjectsSidebarList } from '../(common)/list/main';
import { ExplorerProjectsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForExplorerProjects,
  ExplorerProjectDegree,
} from '../../../controller/main';

export function ExplorerProjectsSidebarDegree() {
  const {
    state: { degree },
    actions: { updateDegree },
  } = useContext(ContextForExplorerProjects);

  return (
    <div className='flex flex-col'>
      <ExplorerProjectsSidebarLabel>Degree</ExplorerProjectsSidebarLabel>
      <ExplorerProjectsSidebarList>
        {Object.values(ExplorerProjectDegree).map((obj) => (
          <ExplorerProjectsSidebarOption
            active={degree === obj}
            onClick={() => updateDegree(obj as ExplorerProjectDegree)}
          >
            {obj}
          </ExplorerProjectsSidebarOption>
        ))}
      </ExplorerProjectsSidebarList>
    </div>
  );
}
