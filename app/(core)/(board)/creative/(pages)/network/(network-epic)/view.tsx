import { NetworkMain } from './main/main';
import { NetworkSidebar } from './sidebar/main';
import { NetworkContainer } from './container/main';

export function NetworkView() {
  return (
    <NetworkContainer>
      <NetworkMain />
      <NetworkSidebar />
    </NetworkContainer>
  );
}
