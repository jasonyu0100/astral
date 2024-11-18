import { BrandManageHomeGallerysGrid } from './grid/main';

export function BrandManageHomeGallerysResults() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <BrandManageHomeGallerysGrid />
    </div>
  );
}
