import { BoardScene } from './scene/main';
import { BoardPanel } from './panel/main';
import { BoardSidebar } from '../../../sidebar/main';

export function BoardBody() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      <BoardScene />
      <BoardPanel />
    </div>
  );
}
