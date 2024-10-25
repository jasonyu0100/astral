import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPublicList } from '@/server/controller/user/list-from-allowed-public';
import {
  ContextForLoggedInUserObj,
  ContextForUserObj,
} from '@/server/model/user/main';
import { useContext } from 'react';
import { NetworkCreativeTableRow } from './row/main';
import { NetworkCreativeRowWrapper } from './wrapper/main';

export function NetworkCreativeTableResults() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userListController = useContext(ContextForUserPublicList);

  return (
    <div className={`flex w-full flex-col pt-[2rem]`}>
      {userListController.state.objs
        .filter((obj) => obj.id !== loggedInUser?.id)
        .map((obj, index) => (
          <ContextForIndexable.Provider value={index} key={obj.id}>
            <ContextForUserObj.Provider value={obj}>
              <NetworkCreativeRowWrapper>
                <NetworkCreativeTableRow />
              </NetworkCreativeRowWrapper>
            </ContextForUserObj.Provider>
          </ContextForIndexable.Provider>
        ))}
    </div>
  );
}
