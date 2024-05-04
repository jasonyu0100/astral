import { useContext } from 'react';
import { MomentsHandlerContext } from '@/(lgx)/internal/handler/moments/main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';

export default function DraftHeaderTitle() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const momentsHandler = useContext(MomentsHandlerContext);
  const chapter = chaptersHandler.chapter;
  const moment = momentsHandler.moment;
  const headerTitle =
    chapter && moment ? `${chapter.title} - ${moment.title}` : 'None';

  return <div className='text-lg font-extraBold text-slate-300'>{headerTitle}</div>;
}
