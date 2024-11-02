import { ContextForUserPublicList } from '@/architecture/controller/user/list-from-allowed-public';
import {
  ContextForLoggedInUserObj,
  ContextForUserObj,
} from '@/architecture/model/user/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { NetworkCreativeTableRow } from './row/main';
import { NetworkCreativeRowWrapper } from './wrapper/main';

export function NetworkCreativeTableResults() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userListController = useContext(ContextForUserPublicList);

  return (
    <div className={`flex w-full flex-col py-[2rem]`}>
      {userListController.state.more.queryResults
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
