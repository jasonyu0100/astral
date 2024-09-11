import { useContext } from 'react';
import { ExplorerProjectsSidebarLabel } from '../(common)/label/main';
import { ExplorerProjectsSidebarList } from '../(common)/list/main';
import { ExplorerProjectsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForExplorerProjects,
  ExplorerProjectScope,
} from '../../../controller/main';

export function ExplorerProjectsSidebarScope() {
  const {
    state: { scope: scope },
    actions: { updateScope: updateScope },
  } = useContext(ContextForExplorerProjects);

  return (
    <div className='flex flex-col'>
      <ExplorerProjectsSidebarLabel>Scope</ExplorerProjectsSidebarLabel>
      <ExplorerProjectsSidebarList>
        {Object.values(ExplorerProjectScope).map((obj) => (
          <ExplorerProjectsSidebarOption
            active={obj === scope}
            onClick={() => updateScope(obj)}
          >
            {obj}
          </ExplorerProjectsSidebarOption>
        ))}
      </ExplorerProjectsSidebarList>
    </div>
  );
}
