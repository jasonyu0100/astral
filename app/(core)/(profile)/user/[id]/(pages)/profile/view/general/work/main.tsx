import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { UserProfileWorkItem } from './item/main';
import { UserProfileRowWrapper } from './wrapper/main';

export function UserProfileGeneralWork() {
  return (
    <div className='flex w-full flex-col'>
      <p className='mb-[1rem] text-2xl font-bold text-slate-300'>their work</p>
      <GlassWindowFrame className='w-full'>
        <GlassWindowContents className='flex flex-col items-center divide-y-[1px] divide-slate-500 divide-opacity-30'>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
