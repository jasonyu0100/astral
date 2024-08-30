import { useControllerForChapterSpotlightMain } from '@/(server)/controller/space/chapter/spotlight/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/model/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceSessionUpdatePreviewReview() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const spotlightController = useControllerForChapterSpotlightMain(
    sessionUpdate?.spotlightId || '',
  );

  return (
    <>
      <p className='text-xl font-bold text-slate-300'>
        {spotlightController.state.obj.title}
        {spotlightController.state.obj.description}
      </p>
    </>
  );
}
