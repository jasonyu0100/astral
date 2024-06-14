import { CreativeNetworkContainer } from './container/main';
import { CreativeNetworkMain } from './main/main';
import { CreativeNetworkSidebar } from './sidebar/main';

export function CreativeNetworkView() {
  return (
    <CreativeNetworkContainer>
      <CreativeNetworkSidebar />
      <CreativeNetworkMain />
    </CreativeNetworkContainer>
  );
}
