import { NetworkCreativeContainer } from './container/main';
import { NetworkCreativeMain } from './main/main';
import { NetworkCreativeSidebar } from './sidebar/main';

export function NetworkCreativeView() {
  return (
    <NetworkCreativeContainer>
      <NetworkCreativeMain />
      <NetworkCreativeSidebar />
    </NetworkCreativeContainer>
  );
}
