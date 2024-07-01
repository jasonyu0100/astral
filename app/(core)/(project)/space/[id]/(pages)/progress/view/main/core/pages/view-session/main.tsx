import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { useContext } from 'react';

export function SpaceProgressViewSession() {
  const sessionListController = useContext(ContextForChapterSessionList);
  const session = sessionListController.state.currentObj;
  const updateListController = useContext(ContextForSessionUpdateList);

  return (
    <div className='flex flex-col'>
      <p className='text-slate-300'>Session</p>
      <p className='text-slate-300'>{session?.title}</p>
      <p className='text-slate-300'>{session?.description}</p>
      <p className='text-slate-300'>{session?.created}</p>
      {updateListController.state.objs.map((update) => (
        <div className='text-slate-300'>
          {update.title} {update.variant}
        </div>
      ))}
    </div>
  );
}
