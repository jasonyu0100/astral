import { NetworkCreativeContainer } from './container/main';
import { NetworkCreativeMain } from './main/main';

export function NetworkCreativeView() {
  return (
    <NetworkCreativeContainer>
      <NetworkCreativeMain />
      {/* <NetworkCreativeSidebar /> */}
    </NetworkCreativeContainer>
  );
}
