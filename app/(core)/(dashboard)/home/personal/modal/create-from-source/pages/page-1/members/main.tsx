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
import { ContextForHomePersonalCreateFromSource } from '../../../controller/main';
import { HomePersonalSpaceAddCollaborator } from './add/main';
import { HomePersonalCreateFromSourceCollaboratorList } from './list/main';
import { HomePersonalCreateFromSourceCollaborator } from './member/main';

export function HomePersonalCreateFromSourceMembers() {
  const { pageOne } = useContext(ContextForHomePersonalCreateFromSource);
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
          <HomePersonalCreateFromSourceCollaborator
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
            <HomePersonalCreateFromSourceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
