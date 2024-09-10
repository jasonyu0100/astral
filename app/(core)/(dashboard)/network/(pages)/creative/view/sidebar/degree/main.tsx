import { useContext } from 'react';
import { NetworkSidebarLabel } from '../(common)/label/main';
import { NetworkSidebarList } from '../(common)/list/main';
import { NetworkSidebarOption } from '../(common)/list/option/main';
import {
  ContextForNetworkCreative,
  NetworkCreativeInfluence,
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
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Any}
          onClick={() => updateDegree(NetworkCreativeInfluence.Any)}
        >
          Any
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.First}
          onClick={() => updateDegree(NetworkCreativeInfluence.First)}
        >
          1st
        </NetworkSidebarOption>

        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Second}
          onClick={() => updateDegree(NetworkCreativeInfluence.Second)}
        >
          2nd
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Third}
          onClick={() => updateDegree(NetworkCreativeInfluence.Third)}
        >
          3rd
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Fourth}
          onClick={() => updateDegree(NetworkCreativeInfluence.Fourth)}
        >
          4th
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Fifth}
          onClick={() => updateDegree(NetworkCreativeInfluence.Fifth)}
        >
          5th
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Sixth}
          onClick={() => updateDegree(NetworkCreativeInfluence.Sixth)}
        >
          6th
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Seventh}
          onClick={() => updateDegree(NetworkCreativeInfluence.Seventh)}
        >
          7th
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Eighth}
          onClick={() => updateDegree(NetworkCreativeInfluence.Eighth)}
        >
          8th
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={degree === NetworkCreativeInfluence.Ninth}
          onClick={() => updateDegree(NetworkCreativeInfluence.Ninth)}
        >
          9th
        </NetworkSidebarOption>
      </NetworkSidebarList>
    </div>
  );
}
