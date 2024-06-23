import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import {
  ChapterSessionUpdateObj,
  ChapterSessionUpdateVariant,
} from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionItemFormUpdate } from './action/update/main';
import { SpaceSessionItemFormCollaborators } from './collabs/main';
import { SpaceSessionItemFormDetails } from './details/main';
import { SpaceSessionItemFormHeader } from './header/main';

export function SpaceSessionItemForm() {
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  function getSummary() {
    switch (current.variant) {
      case ChapterSessionUpdateVariant.VERSE:
        return 'This is a verse update';
      case ChapterSessionUpdateVariant.CHAPTER:
        return 'This is a chapter update';
      case ChapterSessionUpdateVariant.CONVERSATION:
        return 'This is a conversation update';
      case ChapterSessionUpdateVariant.IDEA:
        return 'This is an idea update';
      case ChapterSessionUpdateVariant.CHAT:
        return 'This is a chat update';
      case ChapterSessionUpdateVariant.SCENE:
        return 'This is a scene update';
    }
  }

  return (
    <div className='h-full w-full max-w-[800px] overflow-auto border-l-[1px] border-r-[1px] border-slate-500 border-opacity-30'>
      <div className='h-full w-full px-[4rem]'>
        <div className='flex h-full flex-grow flex-col justify-around space-y-[1rem]'>
          <SpaceSessionItemFormHeader />
          <div className='flex flex-col space-y-[0.5rem]'>
            <p className='text-sm font-bold text-slate-300'>Summary</p>
            <p className='text-sm text-slate-500'>{getSummary()}</p>
          </div>
          <HorizontalDivider />
          <SpaceSessionItemFormDetails />
          <SpaceSessionItemFormCollaborators />
          <SpaceSessionItemFormUpdate />
        </div>
      </div>
    </div>
  );
}
