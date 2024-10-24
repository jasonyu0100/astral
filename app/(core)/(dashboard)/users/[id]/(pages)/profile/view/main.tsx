import { GlassAreaContainer } from '@/components/glass/area/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { UserProfilePages } from './main/main';
import { UserProfileSidebar } from './sidebar/main';

export function UserProfileView() {
  return (
    <GlassAreaContainer
      name={UserProfileView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-10']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <UserProfileSidebar />
      <div className='h-full flex-grow'>
        <GlassWindowFrame className='flex h-full w-full flex-col'>
          <GlassWindowContents className='flex h-full w-full flex-col'>
            <UserProfilePages />
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
    </GlassAreaContainer>
  );
}
