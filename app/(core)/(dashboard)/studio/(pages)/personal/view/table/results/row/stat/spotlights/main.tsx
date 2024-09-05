import { useControllerForSessionUpdateListFromSpace } from '@/(server)/controller/space/chapter/session/update/list-from-space';
import { ChapterSessionUpdateVariant } from '@/(server)/model/space/chapter/session/update/main';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function StudioSpacesRowSpotlights() {
  const spaceObj = useContext(ContextForSpaceObj);
  const sessionUpdateListController =
    useControllerForSessionUpdateListFromSpace(spaceObj.id);
  const spotlights = sessionUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterSessionUpdateVariant.SPOTLIGHT,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>{spotlights.length}</p>
    </div>
  );
}
