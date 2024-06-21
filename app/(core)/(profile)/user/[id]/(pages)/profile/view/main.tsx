import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ProfileAbout } from './about/main';
import { ProfileUserFollowersMain } from './backers/main';
import { ProfileUserConnectsMain } from './connections/main';
import { ProfileUserGeneralMain } from './general/main';

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

export function ProfileUserView() {
  const [page, setPage] = useState(ProfilePage.General);

  const context = {
    page,
    setPage,
  };

  return (
    <ContextForProfilePage.Provider value={context}>
      <GlassAreaContainer
        name={ProfileUserView.name}
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
              {page === ProfilePage.Backers && <ProfileUserFollowersMain />}
              {page === ProfilePage.Connections && <ProfileUserConnectsMain />}
              {page === ProfilePage.General && <ProfileUserGeneralMain />}
            </GlassWindowContents>
          </GlassWindowFrame>
        </div>
      </GlassAreaContainer>
    </ContextForProfilePage.Provider>
  );
}
