import { useContext } from 'react';
import { ExplorerProjectsSidebarLabel } from '../(common)/label/main';
import { ExplorerProjectsSidebarList } from '../(common)/list/main';
import { ExplorerProjectsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForExplorerProjects,
  ExplorerProjectGuild,
} from '../../../controller/main';

export function ExplorerProjectsSidebarGuild() {
  const {
    state: { guild },
    actions: { updateGuild },
  } = useContext(ContextForExplorerProjects);

  return (
    <div className='flex flex-col'>
      <ExplorerProjectsSidebarLabel>Guild</ExplorerProjectsSidebarLabel>
      <ExplorerProjectsSidebarList>
        {Object.values(ExplorerProjectGuild).map((obj) => (
          <ExplorerProjectsSidebarOption
            active={obj === guild}
            onClick={() => updateGuild(obj)}
          >
            {obj}
          </ExplorerProjectsSidebarOption>
        ))}
      </ExplorerProjectsSidebarList>
    </div>
  );
}
