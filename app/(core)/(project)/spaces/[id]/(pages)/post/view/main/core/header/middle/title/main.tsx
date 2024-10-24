import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useContext } from 'react';

export default function SpacesPostMiddleTitle() {
  const chaptersHandler = useContext(ContextForSpaceChapterList);
  const title = chaptersHandler.state.currentObj?.title || '';

  return (
    <div className='text-center text-lg font-bold text-slate-300'>{title}</div>
  );
}
