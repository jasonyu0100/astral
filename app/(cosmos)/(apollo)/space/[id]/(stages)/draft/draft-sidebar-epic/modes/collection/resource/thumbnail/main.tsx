import { useContext } from 'react';
import { DraftContext } from '../../../../../page';
import { ResourceObj } from '@/tables/resource/main';

export function CollectionResourceThumbnail({
  resource,
}: {
  resource: ResourceObj;
}) {
  const { starHandler } = useContext(DraftContext);
  return (
    <img
      className='h-[120px] w-[120px] rounded-full cursor-pointer'
      src={resource.file.src}
      onClick={() => starHandler.queryCreateStar(resource.name, Math.random() * 500, Math.random() * 500, resource.file)}
    />
  );
}
