import { useContext } from 'react';
import { ExplorerProjectsSidebarLabel } from '../(common)/label/main';
import { ExplorerProjectsSidebarList } from '../(common)/list/main';
import { ExplorerProjectsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonProjects,
  HorizonsProjectDegree,
} from '../../../controller/main';

export function ExplorerProjectsSidebarDegree() {
  const {
    state: { degree },
    actions: { updateDegree },
  } = useContext(ContextForHorizonProjects);

  return (
    <div className='flex flex-col'>
      <ExplorerProjectsSidebarLabel>Degree</ExplorerProjectsSidebarLabel>
      <ExplorerProjectsSidebarList>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Any}
          onClick={() => updateDegree(HorizonsProjectDegree.Any)}
        >
          Any
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.First}
          onClick={() => updateDegree(HorizonsProjectDegree.First)}
        >
          1st
        </ExplorerProjectsSidebarOption>

        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Second}
          onClick={() => updateDegree(HorizonsProjectDegree.Second)}
        >
          2nd
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Third}
          onClick={() => updateDegree(HorizonsProjectDegree.Third)}
        >
          3rd
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Fourth}
          onClick={() => updateDegree(HorizonsProjectDegree.Fourth)}
        >
          4th
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Fifth}
          onClick={() => updateDegree(HorizonsProjectDegree.Fifth)}
        >
          5th
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Sixth}
          onClick={() => updateDegree(HorizonsProjectDegree.Sixth)}
        >
          6th
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Seventh}
          onClick={() => updateDegree(HorizonsProjectDegree.Seventh)}
        >
          7th
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Eighth}
          onClick={() => updateDegree(HorizonsProjectDegree.Eighth)}
        >
          8th
        </ExplorerProjectsSidebarOption>
        <ExplorerProjectsSidebarOption
          active={degree === HorizonsProjectDegree.Ninth}
          onClick={() => updateDegree(HorizonsProjectDegree.Ninth)}
        >
          9th
        </ExplorerProjectsSidebarOption>
      </ExplorerProjectsSidebarList>
    </div>
  );
}
