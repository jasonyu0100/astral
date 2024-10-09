import { useControllerForUserActivityListFromSpace } from '@/(server)/controller/activity/list-from-space';
import { UserActivityVariant } from '@/(server)/model/activity/main';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function UserProfileSpacesRowSpotlights() {
  const spaceObj = useContext(ContextForSpaceObj);
  const reviewactivityListController =
    useControllerForUserActivityListFromSpace(spaceObj.id);
  const spotlights = reviewactivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.SPOTLIGHT,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>{spotlights.length}</p>
    </div>
  );
}
