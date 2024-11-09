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
import { ContextForHomePersonalCreateSpace } from '../../../controller/main';
import { HomePersonalSpaceAddCollaborator } from './add/main';
import { HomePersonalCreateSpaceCollaboratorList } from './list/main';
import { HomePersonalCreateSpaceCollaborator } from './member/main';

export function HomePersonalCreateSpaceMembers() {
  const { pageOne } = useContext(ContextForHomePersonalCreateSpace);
  const { memberIds, updateMemberIds } = pageOne;
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
        <HomePersonalSpaceAddCollaborator
          onClick={togglableController.toggle}
        />
        {memberIds.map((connectedId) => (
          <HomePersonalCreateSpaceCollaborator
            connectedId={connectedId}
            onClick={() => {
              updateMemberIds(memberIds.filter((id) => id !== connectedId));
            }}
          />
        ))}
      </div>
      {togglableController.toggled && (
        <ContextForUserConnectionListFromSource.Provider
          value={connectListController}
        >
          <ContextForTogglable.Provider value={togglableController}>
            <HomePersonalCreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
