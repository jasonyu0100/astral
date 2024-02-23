import { useContext } from 'react';
import { DraftContext } from '../../../../../../../(process)/space/[id]/(stages)/draft/page';
import { FileObj } from '@/(logic)/model/resource/file/main';
import { ResourceContext } from '@/(logic)/model/resource/main';

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
