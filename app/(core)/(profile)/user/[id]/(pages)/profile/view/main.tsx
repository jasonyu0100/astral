import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../page';
import { ProfileAbout } from './about/main';
import { UserProfileAdmin } from './admin/main';
import { UserProfileBackersMain } from './backers/main';
import { UserProfileConnectsMain } from './connections/main';
import { UserProfileGeneralMain } from './general/main';

export function UserProfileView() {
  const { page, admin } = useContext(ContextForProfilePage);

  return (
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
            {page === ProfilePage.Backers && <UserProfileBackersMain />}
            {page === ProfilePage.Connections && <UserProfileConnectsMain />}
            {page === ProfilePage.General && <UserProfileGeneralMain />}
            {admin && <UserProfileAdmin />}
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
    </GlassAreaContainer>
  );
}
