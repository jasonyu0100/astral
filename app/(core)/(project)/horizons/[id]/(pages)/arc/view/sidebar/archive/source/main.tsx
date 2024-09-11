import { useContext } from 'react';
import { HorizonsArcSidebarLabel } from '../(common)/label/main';
import { HorizonsArcSidebarList } from '../(common)/list/main';
import { HorizonsArcSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonsArc,
  HorizonsArcSource,
} from '../../../../controller/main';

export function HorizonsArcSidebarSource() {
  const {
    state: { source },
    actions: { updateSource },
  } = useContext(ContextForHorizonsArc);

  return (
    <div className='flex flex-col'>
      <HorizonsArcSidebarLabel>Source</HorizonsArcSidebarLabel>
      <HorizonsArcSidebarList>
        {Object.values(HorizonsArcSource).map((obj) => (
          <HorizonsArcSidebarOption
            active={source === obj}
            onClick={() => updateSource(obj)}
          >
            {obj}
          </HorizonsArcSidebarOption>
        ))}
      </HorizonsArcSidebarList>
    </div>
  );
}
