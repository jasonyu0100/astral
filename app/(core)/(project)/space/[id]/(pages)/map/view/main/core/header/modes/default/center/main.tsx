import { useContext } from 'react';
import MapHeaderTitle from '../../../common/title/main';
import { ScenesHandlerContext } from '@/(model)/(controller)/(archive)/scenes/main';
import { ChaptersHandlerContext } from '@/(model)/(controller)/(archive)/chapters/main';

export function DefaultCenter() {
  const partsHandler = useContext(ScenesHandlerContext);
  const part = partsHandler.part;
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapter = chaptersHandler.chapter;
  const headerTitle =
    part && chapter
      ? `${chapter?.title} - ${part?.title}`
      : `${chapter?.title} - None`;

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{headerTitle}</MapHeaderTitle>
    </div>
  );
}
