import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';

export default function VerseHeaderTitle() {
  const chaptersHandler = useContext(ContextForSpaceChapterList);
  const title = chaptersHandler.state.currentObj?.title || '';

  return <div className='text-lg font-extraBold text-slate-300'>{title}</div>;
}
