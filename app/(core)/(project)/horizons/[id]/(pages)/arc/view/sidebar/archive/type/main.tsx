import { useContext } from 'react';
import { HorizonsArcSidebarLabel } from '../(common)/label/main';
import { HorizonsArcSidebarList } from '../(common)/list/main';
import { HorizonsArcSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonsArc,
  HorizonsArcType,
} from '../../../../controller/main';

export function HorizonsArcSidebarType() {
  const {
    state: { type },
    actions: { updateType },
  } = useContext(ContextForHorizonsArc);

  return (
    <div className='flex flex-col'>
      <HorizonsArcSidebarLabel>Type</HorizonsArcSidebarLabel>
      <HorizonsArcSidebarList>
        {Object.values(HorizonsArcType).map((obj) => (
          <HorizonsArcSidebarOption
            active={type === obj}
            onClick={() => updateType(obj)}
          >
            {obj}
          </HorizonsArcSidebarOption>
        ))}
      </HorizonsArcSidebarList>
    </div>
  );
}
