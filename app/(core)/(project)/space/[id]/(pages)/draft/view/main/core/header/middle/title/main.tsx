import { useContext } from 'react';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';

export default function DraftHeaderTitle() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapter = chaptersHandler.chapter;

  return <div className='text-lg font-extraBold text-slate-300'>TODO</div>;
}
