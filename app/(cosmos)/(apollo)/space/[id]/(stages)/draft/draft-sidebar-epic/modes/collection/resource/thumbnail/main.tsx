import { useContext } from 'react';
import { DraftContext } from '../../../../../page';
import { ResourceObj } from '@/tables/resource/main';
import { FileObj } from '@/tables/file/main';

export function CollectionResourceThumbnail({
  resource,
}: {
  resource: ResourceObj;
}) {
  const { starHandler } = useContext(DraftContext);
  return (
    <img
      className='h-[120px] w-[120px] cursor-pointer rounded-full'
      src={resource?.file?.src}
      onClick={() =>
        starHandler.queryCreateFileStar(
          resource.name,
          Math.random() * 500,
          Math.random() * 500,
          resource?.file || ({} as FileObj),
        )
      }
    />
  );
}
