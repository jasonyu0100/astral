import { DraftConstellation } from './constellation/main';
import { DraftPanel } from './panel/main';

export function DraftBody() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      <DraftPanel />
      <DraftConstellation/>
    </div>
  );
}
