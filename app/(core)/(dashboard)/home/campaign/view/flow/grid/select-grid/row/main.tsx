import {
  ContextForUserActivityListFromSpace,
  useControllerForUserActivityListFromSpace,
} from '@/architecture/controller/activity/list-from-space';
import {
  ContextForTaskListFromSpace,
  useControllerForTaskListFromSpace,
} from '@/architecture/controller/task/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';
import { HomeCampaignRowVisibility } from '../../common/activity/main';
import { HomeCampaignRowCategory } from '../../common/category/main';
import { HomeCampaignRowCheckbox } from '../../common/checkbox/main';
import { HomeCampaignRowDate } from '../../common/date/main';
import { HomeCampaignRowInfo } from '../../common/info/main';
import { HomeCampaignRowProgress } from '../../common/progress/main';

export function HomeCampaignInactiveSelectRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const activityListController = useControllerForUserActivityListFromSpace(
    spaceObj.id,
  );
  const allTaskListFromController = useControllerForTaskListFromSpace(
    spaceObj.id,
  );

  return (
    <ContextForTaskListFromSpace.Provider value={allTaskListFromController}>
      <ContextForUserActivityListFromSpace.Provider
        value={activityListController}
      >
        <div className='grid w-full grid-cols-9 py-[1rem]'>
          <HomeCampaignRowCheckbox />
          <HomeCampaignRowInfo />
          <HomeCampaignRowCategory />
          <HomeCampaignRowVisibility />
          <HomeCampaignRowProgress />
          <HomeCampaignRowDate />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
