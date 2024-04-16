import { MapConstellation } from './constellation/main';
import { MapPanel } from './panel/main';

export function MapBody() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      <MapPanel />
      <MapConstellation/>
    </div>
  );
}
