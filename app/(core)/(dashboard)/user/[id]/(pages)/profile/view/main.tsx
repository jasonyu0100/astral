import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { UserProfilePages } from './main/main';
import { UserProfileSidebar } from './sidebar/main';

export function UserProfileView() {
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
            <UserProfilePages />
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
    </GlassAreaContainer>
  );
}
