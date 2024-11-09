import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, roundedFx } from '@/style/data';
import { UserProfilePages } from './main/main';
import { UserProfileSidebar } from './sidebar/main';

export function UserProfileView() {
  return (
    <GlassAreaContainer
      name={UserProfileView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <UserProfileSidebar />
      <div className='h-full flex-grow'>
        <UserProfilePages />
      </div>
    </GlassAreaContainer>
  );
}
