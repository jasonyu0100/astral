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
  const verses = sessionUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterSessionUpdateVariant.VERSE,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-700'>
        {chapters.length} / {chats.length} / {scenes.length} / {verses.length}
      </p>
    </div>
  );
}
