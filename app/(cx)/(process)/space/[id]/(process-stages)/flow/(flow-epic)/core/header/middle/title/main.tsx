import { useContext } from 'react';
import { MomentsHandlerContext } from '@/(logic)/internal/handler/moments/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';

export default function FlowHeaderTitle() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const momentsHandler = useContext(MomentsHandlerContext);
  const chapter = chaptersHandler.chapter;
  const moment = momentsHandler.moment;
  const headerTitle =
    chapter && moment ? `${chapter.title} - ${moment.title}` : 'None';

  return <div className='text-md font-bold text-slate-300'>{headerTitle}</div>;
}
