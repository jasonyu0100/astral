import { useControllerForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceProgressUpdatePreviewIdea() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const ideaController = useControllerForSceneIdeaMain(
    sessionUpdate?.ideaId || '',
  );

  return (
    <div className='flex flex-col space-y-[1rem]'>
      {ideaController.state.obj.variant === ElementVariant.FILE && (
        <img
          className='max-h-[200px] w-full object-contain shadow-lg'
          src={ideaController.state.obj.fileElem?.src}
        />
      )}
      <p className='text-xl font-bold text-slate-700'>
        Title: {ideaController.state.obj.title}
      </p>
    </div>
  );
}
