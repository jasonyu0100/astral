import {
  ContextForUserConnectionListFromSource,
  useControllerForUserConnectionListFromSource,
} from '@/architecture/controller/user/connection/list-from-source';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/logic/contexts/togglable/main';
import { useContext } from 'react';
import { ContextForHomeCampaignCreateSpace } from '../../../../controller/main';
import { HomeCampaignSpaceAddCollaborator } from './add/main';
import { HomeCampaignCreateSpaceCollaboratorList } from './list/main';
import { HomeCampaignCreateSpaceCollaborator } from './member/main';

export function HomeCampaignCreateSpaceMembers() {
  const createSpaceController = useContext(ContextForHomeCampaignCreateSpace);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const connectListController = useControllerForUserConnectionListFromSource(
    loggedInUser?.id,
  );

  const togglableController = useControllerForTogglable();

  return (
    <>
      <label className='mb-1 text-xs font-bold text-slate-400'>
        Members (optional)
      </label>
      <div className='flex flex-row space-x-[1rem]'>
        <HomeCampaignSpaceAddCollaborator
          onClick={togglableController.toggle}
        />
        {createSpaceController.state.memberIds.map((connectedId) => (
          <HomeCampaignCreateSpaceCollaborator
            connectedId={connectedId}
            onClick={() => {
              createSpaceController.actions.updateMemberIds(
                createSpaceController.state.memberIds.filter(
                  (id) => id !== connectedId,
                ),
              );
            }}
          />
        ))}
      </div>
      {togglableController.toggled && (
        <ContextForUserConnectionListFromSource.Provider
          value={connectListController}
        >
          <ContextForTogglable.Provider value={togglableController}>
            <HomeCampaignCreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
