import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { EditContext } from '../../../../edit/main';
import { ContextForUpdateEdit } from '../../../main';

export function SpaceSessionUpdateFormSave() {
  const { updateComplete } = useContext(EditContext);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const updateEditController = useContext(ContextForUpdateEdit);

  return (
    <div className='flex w-full flex-row justify-end'>
      <GlassWindowFrame
        className='h-[3rem] w-[200px]'
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center bg-blue-500'
          onClick={() => {
            updateEditController.saveUpdate().then(() => {
              chapterListController.actions.stateActions.goNext();
              updateComplete(false);
            });
          }}
        >
          <p className='font-bold text-white'>Save</p>
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
