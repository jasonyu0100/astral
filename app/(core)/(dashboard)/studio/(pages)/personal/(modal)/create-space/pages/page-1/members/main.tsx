import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import {
  ContextForUserConnectionList,
  useControllerForUserConnectionList,
} from '@/(server)/(controller)/user/connection/list';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../(controller)/create-space/main';
import { CreateSpaceAddCollaborator } from './add/main';
import { CreateSpaceCollaboratorList } from './list/main';
import { CreateSpaceCollaborator } from './member/main';

export function CreateSpaceMembers() {
  const { pageOne } = useContext(ContextForCreateSpace);
  const { memberIds, updateMemberIds } = pageOne;
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const connectListController = useControllerForUserConnectionList(
    loggedInUser.id,
  );

  const togglableController = useControllerForTogglable();

  return (
    <>
      <label className='mb-1 text-xs font-bold text-slate-400'>Members</label>
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
        <ContextForUserConnectionList.Provider value={connectListController}>
          <ContextForTogglable.Provider value={togglableController}>
            <CreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionList.Provider>
      )}
    </>
  );
}
