import { GlassAreaContainer } from '@/components/glass/area/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ProfilePages } from './main/main';
import { ProfileSidebar } from './sidebar/main';

export function ProfileView() {
  return (
    <GlassAreaContainer
      name={ProfileView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-10']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <ProfileSidebar />
      <div className='h-full flex-grow'>
        <GlassWindowFrame className='flex h-full w-full flex-col'>
          <GlassWindowContents className='flex h-full w-full flex-col'>
            <ProfilePages />
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
    </GlassAreaContainer>
  );
}
