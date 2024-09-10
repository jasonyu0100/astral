import { useContext } from 'react';
import { ExplorerProjectsSidebarLabel } from '../(common)/label/main';
import { ExplorerProjectsSidebarList } from '../(common)/list/main';
import { ExplorerProjectsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonProjects,
  HorizonsProjectGuild,
} from '../../../controller/main';

export function ExplorerProjectsSidebarGuild() {
  const {
    state: { guild },
    actions: { updateGuild },
  } = useContext(ContextForHorizonProjects);

  return (
    <div className='flex flex-col'>
      <ExplorerProjectsSidebarLabel>Guild</ExplorerProjectsSidebarLabel>
      <ExplorerProjectsSidebarList>
        <ExplorerProjectsSidebarOption
          active={HorizonsProjectGuild.Writing === guild}
          onClick={() => updateGuild(HorizonsProjectGuild.Writing)}
        >
          {HorizonsProjectGuild.Writing} - Writing
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={HorizonsProjectGuild.Engineering === guild}
          onClick={() => updateGuild(HorizonsProjectGuild.Engineering)}
        >
          {HorizonsProjectGuild.Engineering} - Engineering
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={HorizonsProjectGuild.Art === guild}
          onClick={() => updateGuild(HorizonsProjectGuild.Art)}
        >
          {HorizonsProjectGuild.Art} - Art
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={HorizonsProjectGuild.Design === guild}
          onClick={() => updateGuild(HorizonsProjectGuild.Design)}
        >
          {HorizonsProjectGuild.Design} - Design
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={HorizonsProjectGuild.Research === guild}
          onClick={() => updateGuild(HorizonsProjectGuild.Research)}
        >
          {HorizonsProjectGuild.Research} - Research
        </ExplorerProjectsSidebarOption>
      </ExplorerProjectsSidebarList>
    </div>
  );
}
