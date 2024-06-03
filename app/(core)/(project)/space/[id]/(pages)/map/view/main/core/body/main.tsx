import { MapPart } from './part/main';
import { MapPanel } from './panel/main';

export function MapBody() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      <MapPanel />
      <MapPart/>
    </div>
  );
}
