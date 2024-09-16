import { useContext } from 'react';
import { NetworkSidebarLabel } from '../(common)/label/main';
import { NetworkSidebarList } from '../(common)/list/main';
import { NetworkSidebarOption } from '../(common)/list/option/main';
import {
  ContextForNetworkCreative,
  NetworkCreativeMeaning,
} from '../../../controller/main';

export function NetworkSidebarMeaning() {
  const {
    state: { meaning: scale },
    actions: { updateMeaning: updateScale },
  } = useContext(ContextForNetworkCreative);

  return (
    <div className='flex flex-col'>
      <NetworkSidebarLabel>Meaning</NetworkSidebarLabel>
      <NetworkSidebarList>
        {Object.values(NetworkCreativeMeaning).map((obj) => (
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
