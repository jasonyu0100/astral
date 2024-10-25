import {
  ContextForUserConnectionListFromSource,
  useControllerForUserConnectionListFromSource,
} from '@/(server)/controller/user/connection/list-from-source';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/logic/contexts/togglable/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../(controller)/create-space/main';
import { CreateSpaceAddCollaborator } from './add/main';
import { CreateSpaceCollaboratorList } from './list/main';
import { CreateSpaceCollaborator } from './member/main';

export function CreateSpaceMembers() {
  const { pageThree } = useContext(ContextForCreateSpace);
  const { memberIds, updateMemberIds } = pageThree;
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
        <CreateSpaceAddCollaborator onClick={togglableController.toggle} />
        {memberIds.map((connectedId) => (
          <CreateSpaceCollaborator
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
            <CreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
