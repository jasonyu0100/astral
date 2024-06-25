import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForUserBackerList } from '@/(server)/(controller)/user/backer/list';
import { ContextForUserBackerObj } from '@/(server)/(model)/user/backer/main';
import { createContext, useContext, useState } from 'react';
import { UserProfileBackersFooter } from './footer/main';
import { UserProfileBackersHeader } from './header/main';
import { UserProfileBackersTableHeader } from './table/header/main';
import { UserProfileBackersTableRow } from './table/row/main';
import { UserProfileBackersRowWrapper } from './table/wrapper/main';

export enum BackingView {
  Backers = 'Backers',
  Backed = 'Backed',
}

interface Controller {
  view: BackingView;
  setView: (view: BackingView) => void;
}

export const ContextForBacking = createContext({} as Controller);

export function UserProfileBackersMain() {
  const [view, setView] = useState(BackingView.Backers);
  const userBackerList = useContext(ContextForUserBackerList);

  const context = {
    view,
    setView,
  };

  return (
    <ContextForBacking.Provider value={context}>
      <div className='flex h-full w-full flex-col'>
        <UserProfileBackersHeader />
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
        <UserProfileBackersFooter />
      </div>
    </ContextForBacking.Provider>
  );
}
