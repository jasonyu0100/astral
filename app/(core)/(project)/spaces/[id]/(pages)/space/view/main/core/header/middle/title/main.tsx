import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { useContext } from 'react';

export default function SpacesSpaceHeaderMiddleTitle() {
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <p className='text-center text-lg font-light text-slate-300'>
      {spaceMainController.state.obj.title || 'untitled'}
    </p>
  );
}
