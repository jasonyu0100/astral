import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ProfileAbout } from './about/main';
import { UserProfileFollowersMain } from './backers/main';
import { UserProfileConnectsMain } from './connections/main';
import { UserProfileGeneralMain } from './general/main';

export enum ProfilePage {
  Backers = 'Backers',
  Connections = 'Connections',
  General = 'General',
}

interface Controller {
  page: ProfilePage;
  setPage: Dispatch<SetStateAction<ProfilePage>>;
}

export const ContextForProfilePage = createContext({} as Controller);

export function UserProfileView() {
  const [page, setPage] = useState(ProfilePage.General);

  const context = {
    page,
    setPage,
  };

  return (
    <ContextForProfilePage.Provider value={context}>
      <GlassAreaContainer
        name={UserProfileView.name}
        sizeFx='flex-grow h-full'
        className={`flex`}
        glassFx={glassFx['glass-5']}
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded-container']}
      >
        <ProfileAbout />
        <div className='h-full flex-grow'>
          <GlassWindowFrame className='flex h-full w-full flex-col'>
            <GlassWindowContents className='flex h-full w-full flex-col'>
              {page === ProfilePage.Backers && <UserProfileFollowersMain />}
              {page === ProfilePage.Connections && <UserProfileConnectsMain />}
              {page === ProfilePage.General && <UserProfileGeneralMain />}
            </GlassWindowContents>
          </GlassWindowFrame>
        </div>
      </GlassAreaContainer>
    </ContextForProfilePage.Provider>
  );
}
