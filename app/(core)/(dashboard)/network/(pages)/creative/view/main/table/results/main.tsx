import { ContextForUserPrivateList } from '@/(server)/controller/user/private-list';
import {
  ContextForLoggedInUserObj,
  ContextForUserObj,
} from '@/(server)/model/user/main';
import { useContext } from 'react';
import { CreativeNetworkTableRow } from './row/main';
import { CreativeNetworkRowWrapper } from './wrapper/main';

export function CreativeNetworkTableResults() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userListController = useContext(ContextForUserPrivateList);

  return (
    <div className={`flex w-full flex-col`}>
      {userListController.state.objs
        .filter((obj) => obj.id !== loggedInUser.id)
        .map((obj) => (
          <ContextForUserObj.Provider value={obj}>
            <CreativeNetworkRowWrapper>
              <CreativeNetworkTableRow />
            </CreativeNetworkRowWrapper>
          </ContextForUserObj.Provider>
        ))}
    </div>
  );
}
