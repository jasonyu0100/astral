import { useContext } from 'react';
import MapHeaderTitle from '../../../common/title/main';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';
import { PartsHandlerContext } from '@/(controller)/parts/main';

export function InfoCenter() {
  const partsHandler = useContext(PartsHandlerContext);
  const part = partsHandler.part;
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapter = chaptersHandler.chapter;
  const headerTitle =
    part && chapter
      ? `${part?.title} - ${chapter?.title}`
      : 'None';

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{headerTitle}</MapHeaderTitle>
    </div>
  );
}
