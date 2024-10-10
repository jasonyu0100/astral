import { useControllerForUserActivityListFromSpace } from '@/(server)/controller/activity/list-from-space';
import { UserActivityVariant } from '@/(server)/model/activity/main';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function StudioSpacesRowStat() {
  const spaceObj = useContext(ContextForSpaceObj);
  const reviewactivityListController =
    useControllerForUserActivityListFromSpace(spaceObj.id);
  const chapters = reviewactivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.CHAPTER,
  );
  const scenes = reviewactivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.SCENE,
  );
  const spotlighs = reviewactivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.POST,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>
        {chapters.length} / {scenes.length} / {spotlighs.length}
      </p>
    </div>
  );
}
