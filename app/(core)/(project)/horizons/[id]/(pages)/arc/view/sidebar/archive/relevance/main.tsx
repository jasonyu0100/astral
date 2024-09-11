import { useContext } from 'react';
import { HorizonsArcSidebarLabel } from '../(common)/label/main';
import { HorizonsArcSidebarList } from '../(common)/list/main';
import { HorizonsArcSidebarOption } from '../(common)/list/option/main';
import {
  ContextForHorizonsArc,
  HorizonsArcRelevance,
} from '../../../../controller/main';

export function HorizonsArcSidebarRelevance() {
  const {
    state: { relevance },
    actions: { updateRelevance },
  } = useContext(ContextForHorizonsArc);

  return (
    <div className='flex flex-col'>
      <HorizonsArcSidebarLabel>Relevance</HorizonsArcSidebarLabel>
      <HorizonsArcSidebarList>
        {Object.values(HorizonsArcRelevance).map((obj) => (
          <HorizonsArcSidebarOption
            active={relevance === obj}
            onClick={() => updateRelevance(obj)}
          >
            {obj}
          </HorizonsArcSidebarOption>
        ))}
      </HorizonsArcSidebarList>
    </div>
  );
}
