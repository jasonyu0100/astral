import { useContext } from 'react';
import { NetworkSidebarLabel } from '../(common)/label/main';
import { NetworkSidebarList } from '../(common)/list/main';
import { NetworkSidebarOption } from '../(common)/list/option/main';
import {
  ContextForNetworkCreative,
  NetworkCreativeState,
} from '../../../controller/main';

export function NetworkSidebarState() {
  const {
    state: { guild },
    actions: { updateGuild },
  } = useContext(ContextForNetworkCreative);

  return (
    <div className='flex flex-col'>
      <NetworkSidebarLabel>State</NetworkSidebarLabel>
      <NetworkSidebarList>
        <NetworkSidebarOption
          active={NetworkCreativeState.Full === guild}
          onClick={() => updateGuild(NetworkCreativeState.Full)}
        >
          {NetworkCreativeState.Full} - Full
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={NetworkCreativeState.Waxing === guild}
          onClick={() => updateGuild(NetworkCreativeState.Waxing)}
        >
          {NetworkCreativeState.Waxing} - Waxing
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={NetworkCreativeState.Half === guild}
          onClick={() => updateGuild(NetworkCreativeState.Half)}
        >
          {NetworkCreativeState.Half} - Half
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={NetworkCreativeState.Waning === guild}
          onClick={() => updateGuild(NetworkCreativeState.Waning)}
        >
          {NetworkCreativeState.Waning} - Waning
        </NetworkSidebarOption>
        <NetworkSidebarOption
          active={NetworkCreativeState.New === guild}
          onClick={() => updateGuild(NetworkCreativeState.New)}
        >
          {NetworkCreativeState.New} - New
        </NetworkSidebarOption>
      </NetworkSidebarList>
    </div>
  );
}
