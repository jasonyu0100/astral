import { DriveFinderHomeGallerysGrid } from './grid/main';

export function DriveFinderHomeGallerysResults() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <DriveFinderHomeGallerysGrid />
    </div>
  );
}
