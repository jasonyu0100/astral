import { MapSidebarBody } from './modes/main';
import { MapSidebarHeader } from './header/main';
import { MapSidebarContainer } from './container/main';

export function MapSidebarView() {
  return (
    <MapSidebarContainer>
      <MapSidebarBody />
    </MapSidebarContainer>
  );
}
