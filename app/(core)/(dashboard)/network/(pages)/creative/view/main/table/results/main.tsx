import { ContextForUserPrivateList } from '@/(server)/controller/user/private-list';
import {
  ContextForLoggedInUserObj,
  ContextForUserObj,
} from '@/(server)/model/user/main';
import { useContext } from 'react';
import { NetworkCreativeTableRow } from './row/main';
import { NetworkCreativeRowWrapper } from './wrapper/main';

export function NetworkCreativeTableResults() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userListController = useContext(ContextForUserPrivateList);

  return (
    <div className={`flex w-full flex-col`}>
      {userListController.state.objs
        .filter((obj) => obj.id !== loggedInUser.id)
        .map((obj) => (
          <ContextForUserObj.Provider value={obj}>
            <NetworkCreativeRowWrapper>
              <NetworkCreativeTableRow />
            </NetworkCreativeRowWrapper>
          </ContextForUserObj.Provider>
        ))}
    </div>
  );
}
