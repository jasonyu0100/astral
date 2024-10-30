import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { ContextForPublicSpace, PublicSpacePage } from '../../../../page';

export function PublicSpaceHeader() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const publicSpaceController = useContext(ContextForPublicSpace);

  return (
    <p className='text-lg font-bold text-slate-300'>
      <span
        className='text cursor-pointer font-bold'
        onClick={() => {
          publicSpaceController.actions.updatePage(PublicSpacePage.SPACE);
        }}
      >
        Home /{' '}
      </span>
      {chapterListController.state.currentObj?.title}
    </p>
  );
}
