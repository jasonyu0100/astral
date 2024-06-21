import { CreativeNetworkContainer } from './container/main';
import { CreativeNetworkMain } from './main/main';

export function CreativeNetworkView() {
  return (
    <CreativeNetworkContainer>
      <CreativeNetworkMain />
      {/* <CreativeNetworkSidebar /> */}
    </CreativeNetworkContainer>
  );
}
