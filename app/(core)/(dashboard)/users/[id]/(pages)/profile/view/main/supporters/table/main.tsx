import { ContextForUserBackerList } from '@/(server)/controller/user/backer/list';
import { ContextForUserBackerObj } from '@/(server)/model/user/backer/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileSupportersTableHeader } from './header/main';
import { UserProfileSupportersTableRow } from './row/main';
import { UserProfileSupportersRowWrapper } from './wrapper/main';

export function UserProfileSupportersTable() {
  const userBackerList = useContext(ContextForUserBackerList);

  return (
    <div className='w-full px-[2rem]' style={{ height: '100%' }}>
      <UserProfileSupportersTableHeader />
      <HorizontalDivider />
      <div className='w-full overflow-auto'>
        <div className='flex h-full w-full flex-col'>
          {userBackerList.state.objs.map((obj) => (
            <ContextForUserBackerObj.Provider value={obj}>
              <UserProfileSupportersRowWrapper>
                <UserProfileSupportersTableRow />
              </UserProfileSupportersRowWrapper>
            </ContextForUserBackerObj.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}
