import { useContext } from 'react';
import { NetworkSidebarLabel } from '../(common)/label/main';
import { NetworkSidebarList } from '../(common)/list/main';
import { NetworkSidebarOption } from '../(common)/list/option/main';
import {
  ContextForNetworkCreative,
  NetworkCreativeRelevance,
} from '../../../controller/main';

export function NetworkSidebarScale() {
  const {
    state: { scale },
    actions: { updateScale },
  } = useContext(ContextForNetworkCreative);

  return (
    <div className='flex flex-col'>
      <NetworkSidebarLabel>Relevance</NetworkSidebarLabel>
      <NetworkSidebarList>
        {Object.values(NetworkCreativeRelevance).map((obj) => (
          <NetworkSidebarOption
            active={scale === obj}
            onClick={() => updateScale(obj)}
          >
            {obj}
          </NetworkSidebarOption>
        ))}
      </NetworkSidebarList>
    </div>
  );
}
