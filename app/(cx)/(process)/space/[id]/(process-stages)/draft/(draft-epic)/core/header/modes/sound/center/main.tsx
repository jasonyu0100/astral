import { useContext } from 'react';
import DraftHeaderTitle from '../../../common/title/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';
import { ConstellationsHandlerContext } from '@/(logic)/internal/handler/draft/constellations/main';

export function SoundCenter() {
  const constellationsHandler = useContext(ConstellationsHandlerContext);
  const constellation = constellationsHandler.constellation;
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapter = chaptersHandler.chapter;
  const headerTitle =
    constellation && chapter
      ? `${constellation?.title} - ${chapter?.title}`
      : 'None';

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
    </div>
  );
}
