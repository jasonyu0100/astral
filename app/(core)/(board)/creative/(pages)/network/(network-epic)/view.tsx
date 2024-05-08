import { CreativeNetworkMain } from './main/main';
import { CreativeNetworkSidebar } from './sidebar/main';
import { CreativeNetworkContainer } from './container/main';

export function CreativeNetworkView() {
  return (
    <CreativeNetworkContainer>
      <CreativeNetworkMain />
      <CreativeNetworkSidebar />
    </CreativeNetworkContainer>
  );
}
