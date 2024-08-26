import { useControllerForChapterVerseMain } from '@/(server)/(controller)/space/chapter/verse/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceSessionUpdatePreviewVerse() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const verseController = useControllerForChapterVerseMain(
    sessionUpdate?.verseId || '',
  );

  return (
    <>
      <p className='text-xl font-bold text-slate-300'>
        {verseController.state.obj.variant === ElementVariant.FILE && (
          <img
            className='max-h-[200px] w-full object-contain shadow-lg'
            src={verseController.state.obj.fileElem?.src}
          />
        )}
        <br />
        {verseController.state.obj.title}
        {verseController.state.obj.description}
      </p>
    </>
  );
}
