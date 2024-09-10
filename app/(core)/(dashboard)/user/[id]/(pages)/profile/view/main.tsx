import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForUserProfile, UserProfilePage } from '../controller/main';
import { UserProfileSidebar } from './(sidebar)/main';
import { UserProfileAdminIndicator } from './common/admin-indicator/main';
import { UserProfileConnectsMain } from './pages/connections/main';
import { UserProfileGeneralMain } from './pages/general/main';
import { UserProfileBackersMain } from './pages/supporters/main';

export function UserProfileView() {
  const {
    state: { adminMode },
  } = useContext(ContextForUserProfile);

  return (
    <GlassAreaContainer
      name={UserProfileView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <UserProfileSidebar />
      <div className='h-full flex-grow'>
        <GlassWindowFrame className='flex h-full w-full flex-col'>
          <GlassWindowContents className='flex h-full w-full flex-col'>
            <ProfilePages />
            {adminMode && <UserProfileAdminIndicator />}
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
    </GlassAreaContainer>
  );
}

function ProfilePages() {
  const {
    state: { page },
  } = useContext(ContextForUserProfile);
  return (
    <>
      {page === UserProfilePage.Supporters && <UserProfileBackersMain />}
      {page === UserProfilePage.Collaborators && <UserProfileConnectsMain />}
      {page === UserProfilePage.General && <UserProfileGeneralMain />}
    </>
  );
}
