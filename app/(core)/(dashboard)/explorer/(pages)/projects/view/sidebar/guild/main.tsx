import { useContext } from 'react';
import { VentureHorizonsSidebarLabel } from '../(common)/label/main';
import { VentureHorizonsSidebarList } from '../(common)/list/main';
import { VentureHorizonsSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonProjects,
  HorizonProjectGuild,
} from '../../../controller/main';

export function VentureHorizonsSidebarGuild() {
  const {
    state: { guild },
    actions: { updateGuild },
  } = useContext(ContextForHorizonProjects);

  return (
    <div className='flex flex-col'>
      <VentureHorizonsSidebarLabel>Guild</VentureHorizonsSidebarLabel>
      <VentureHorizonsSidebarList>
        <VentureHorizonsSidebarOption
          active={HorizonProjectGuild.A === guild}
          onClick={() => updateGuild(HorizonProjectGuild.A)}
        >
          A
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={HorizonProjectGuild.B === guild}
          onClick={() => updateGuild(HorizonProjectGuild.B)}
        >
          B
        </VentureHorizonsSidebarOption>
        <VentureHorizonsSidebarOption
          active={HorizonProjectGuild.C === guild}
          onClick={() => updateGuild(HorizonProjectGuild.C)}
        >
          C
        </VentureHorizonsSidebarOption>
      </VentureHorizonsSidebarList>
    </div>
  );
}
