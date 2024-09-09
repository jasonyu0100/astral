import { ContextForUserBackerList } from '@/(server)/controller/user/backer/list';
import { ContextForUserBackerObj } from '@/(server)/model/user/backer/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileBackersTableHeader } from './header/main';
import { UserProfileBackersTableRow } from './row/main';
import { UserProfileBackersRowWrapper } from './wrapper/main';

export function UserProfileBackersTable() {
  const userBackerList = useContext(ContextForUserBackerList);

  return (
    <div className='w-full px-[2rem]' style={{ height: '100%' }}>
      <UserProfileBackersTableHeader />
      <HorizontalDivider />
      <div className='w-full overflow-auto'>
        <div className='flex h-full w-full flex-col'>
          {userBackerList.state.objs.map((obj) => (
            <ContextForUserBackerObj.Provider value={obj}>
              <UserProfileBackersRowWrapper>
                <UserProfileBackersTableRow />
              </UserProfileBackersRowWrapper>
            </ContextForUserBackerObj.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}
