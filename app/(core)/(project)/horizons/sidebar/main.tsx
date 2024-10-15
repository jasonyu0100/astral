import { HorizonSidebarBack } from './back/main';
import { HorizonSidebarContainer } from './container/main';
import { HorizonSidebarCore } from './core/main';

export function HorizonSidebar() {
  return (
    <HorizonSidebarContainer>
      <HorizonSidebarBack />
      <HorizonSidebarCore />
    </HorizonSidebarContainer>
  );
}
