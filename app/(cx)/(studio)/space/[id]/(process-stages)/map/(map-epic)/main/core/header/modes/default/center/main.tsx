import { useContext } from 'react';
import MapHeaderTitle from '../../../common/title/main';
import { ConstellationsHandlerContext } from '@/(lgx)/internal/handler/constellations/main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';

export function DefaultCenter() {
  const constellationsHandler = useContext(ConstellationsHandlerContext);
  const constellation = constellationsHandler.constellation;
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapter = chaptersHandler.chapter;
  const headerTitle =
    constellation && chapter
      ? `${chapter?.title} - ${constellation?.title}`
      : `${chapter?.title} - None`;

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{headerTitle}</MapHeaderTitle>
    </div>
  );
}
