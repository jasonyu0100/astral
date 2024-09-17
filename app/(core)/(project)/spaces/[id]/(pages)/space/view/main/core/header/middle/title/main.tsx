import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useContext } from 'react';

export default function SpacesSpaceHeaderMiddleTitle() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <p className='text-center text-lg font-light text-slate-300'>
      {chapterListController.state.currentObj?.title || 'untitled'}
    </p>
  );
}
