import { useContext } from 'react';
import { NetworkSidebarLabel } from '../(common)/label/main';
import { NetworkSidebarList } from '../(common)/list/main';
import { NetworkSidebarOption } from '../(common)/list/option/main';
import {
  ContextForNetworkCreative,
  NetworkCreativeDegree,
} from '../../../controller/main';

export function NetworkSidebarDegree() {
  const {
    state: { degree },
    actions: { updateDegree },
  } = useContext(ContextForNetworkCreative);

  return (
    <div className='flex flex-col'>
      <NetworkSidebarLabel>Degree</NetworkSidebarLabel>
      <NetworkSidebarList>
        {Object.values(NetworkCreativeDegree).map((obj) => (
          <NetworkSidebarOption
            active={degree === obj}
            onClick={() => updateDegree(obj as NetworkCreativeDegree)}
          >
            {obj}
          </NetworkSidebarOption>
        ))}
      </NetworkSidebarList>
    </div>
  );
}
