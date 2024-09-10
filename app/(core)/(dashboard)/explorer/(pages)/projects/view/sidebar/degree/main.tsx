import { useContext } from 'react';
import { VentureHorizonsSidebarLabel } from '../(common)/label/main';
import { VentureHorizonsSidebarList } from '../(common)/list/main';
import { VentureHorizonsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonProjects,
  HorizonProjectDegree,
} from '../../../controller/main';

export function VentureHorizonsSidebarDegree() {
  const {
    state: { degree },
    actions: { updateDegree },
  } = useContext(ContextForHorizonProjects);

  return (
    <div className='flex flex-col'>
      <VentureHorizonsSidebarLabel>Degree</VentureHorizonsSidebarLabel>
      <VentureHorizonsSidebarList>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Any}
          onClick={() => updateDegree(HorizonProjectDegree.Any)}
        >
          Any
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.First}
          onClick={() => updateDegree(HorizonProjectDegree.First)}
        >
          1st
        </VentureHorizonsSidebarOption>

        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Second}
          onClick={() => updateDegree(HorizonProjectDegree.Second)}
        >
          2nd
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Third}
          onClick={() => updateDegree(HorizonProjectDegree.Third)}
        >
          3rd
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Fourth}
          onClick={() => updateDegree(HorizonProjectDegree.Fourth)}
        >
          4th
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Fifth}
          onClick={() => updateDegree(HorizonProjectDegree.Fifth)}
        >
          5th
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Sixth}
          onClick={() => updateDegree(HorizonProjectDegree.Sixth)}
        >
          6th
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Seventh}
          onClick={() => updateDegree(HorizonProjectDegree.Seventh)}
        >
          7th
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Eighth}
          onClick={() => updateDegree(HorizonProjectDegree.Eighth)}
        >
          8th
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={degree === HorizonProjectDegree.Ninth}
          onClick={() => updateDegree(HorizonProjectDegree.Ninth)}
        >
          9th
        </VentureHorizonsSidebarOption>
      </VentureHorizonsSidebarList>
    </div>
  );
}
