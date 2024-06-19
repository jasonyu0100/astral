import { SpaceDraftToolsBottom } from './bottom/main';
import { SpaceDraftToolsTop } from './top/main';

export function SpaceDraftContentsTools() {
  return (
    <div className='flex h-full flex-col justify-between'>
      <SpaceDraftToolsTop />
      <SpaceDraftToolsBottom />
    </div>
  );
}
