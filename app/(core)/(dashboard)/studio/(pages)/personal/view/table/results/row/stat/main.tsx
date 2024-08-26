import { useControllerForSessionUpdateOfSpaceList } from '@/(server)/(controller)/space/chapter/session/update/space-list';
import { ChapterSessionUpdateVariant } from '@/(server)/(model)/space/chapter/session/update/main';
import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { useContext } from 'react';

export function StudioSpacesRowStat() {
  const spaceObj = useContext(ContextForSpaceObj);
  const sessionUpdateListController = useControllerForSessionUpdateOfSpaceList(
    spaceObj.id,
  );
  const chapters = sessionUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterSessionUpdateVariant.CHAPTER,
  );
  const chats = sessionUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterSessionUpdateVariant.CHAT,
  );
  const scenes = sessionUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterSessionUpdateVariant.SCENE,
  );
  const reviews = sessionUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterSessionUpdateVariant.REVIEW,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>
        {chapters.length} / {chats.length} / {scenes.length} / {reviews.length}
      </p>
    </div>
  );
}
