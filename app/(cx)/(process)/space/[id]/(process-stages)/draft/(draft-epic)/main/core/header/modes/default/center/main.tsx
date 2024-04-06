import { useContext } from 'react';
import DraftHeaderTitle from '../../../common/title/main';
import { ConstellationsHandlerContext } from '@/(logic)/internal/handler/constellations/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';

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
      <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
    </div>
  );
}
