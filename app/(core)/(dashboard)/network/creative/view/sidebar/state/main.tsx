import { useContext } from 'react';
import { NetworkSidebarLabel } from '../(common)/label/main';
import { NetworkSidebarList } from '../(common)/list/main';
import { NetworkSidebarOption } from '../(common)/list/option/main';
import {
  ContextForNetworkCreative,
  NetworkCreativeAura,
} from '../../../controller/main';

export function NetworkSidebarState() {
  const {
    state: { aura: guild },
    actions: { updateAura: updateGuild },
  } = useContext(ContextForNetworkCreative);

  return (
    <div className='flex flex-col'>
      <NetworkSidebarLabel>State</NetworkSidebarLabel>
      <NetworkSidebarList>
        {Object.values(NetworkCreativeAura).map((obj) => (
          <NetworkSidebarOption
            active={guild === obj}
            onClick={() => updateGuild(obj)}
          >
            {obj}
          </NetworkSidebarOption>
        ))}
      </NetworkSidebarList>
    </div>
  );
}
