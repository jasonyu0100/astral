import { MapMain } from './main/main';
import { MapSidebar } from './sidebar/main';
import { MapContainer } from './container/main';

export function MapView() {
  return (
    <MapContainer>
      <MapMain/>
      <MapSidebar />
    </MapContainer>
  );
}
