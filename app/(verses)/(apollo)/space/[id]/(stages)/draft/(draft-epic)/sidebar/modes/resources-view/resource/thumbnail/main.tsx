import { useContext } from 'react';
import { DraftContext } from '../../../../../../page';
import { FileObj } from '@/(ouros)/(model)/resource/file/main';
import { ResourceContext } from '@/(ouros)/(model)/resource/main';

export function CollectionResourceThumbnail() {
  const { starHandler } = useContext(DraftContext);
  const resource = useContext(ResourceContext);

  return (
    <img
      className='h-[120px] w-[120px] cursor-pointer rounded-full'
      src={resource?.file?.src}
      onClick={() =>
        starHandler.queryCreateFileStar(
          resource.title,
          Math.random() * 500,
          Math.random() * 500,
          resource?.file || ({} as FileObj),
        )
      }
    />
  );
}
