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
        <NetworkSidebarOption
          active={scale === NetworkCreativeRelevance.Entry}
          onClick={() => updateScale(NetworkCreativeRelevance.Entry)}
        >
          {NetworkCreativeRelevance.Entry} - Entry
        </NetworkSidebarOption>

        <NetworkSidebarOption
          active={scale === NetworkCreativeRelevance.Central}
          onClick={() => updateScale(NetworkCreativeRelevance.Central)}
        >
          {NetworkCreativeRelevance.Central} - Central
        </NetworkSidebarOption>

        <NetworkSidebarOption
          active={scale === NetworkCreativeRelevance.Peak}
          onClick={() => updateScale(NetworkCreativeRelevance.Peak)}
        >
          {NetworkCreativeRelevance.Peak} - Peak
        </NetworkSidebarOption>

        <NetworkSidebarOption
          active={scale === NetworkCreativeRelevance.Peripheral}
          onClick={() => updateScale(NetworkCreativeRelevance.Peripheral)}
        >
          {NetworkCreativeRelevance.Peripheral} - Peripheral
        </NetworkSidebarOption>

        <NetworkSidebarOption
          active={scale === NetworkCreativeRelevance.Bridge}
          onClick={() => updateScale(NetworkCreativeRelevance.Bridge)}
        >
          {NetworkCreativeRelevance.Bridge} - Bridge
        </NetworkSidebarOption>
      </NetworkSidebarList>
    </div>
  );
}
