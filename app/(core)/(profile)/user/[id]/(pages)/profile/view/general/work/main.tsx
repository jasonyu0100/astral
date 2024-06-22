import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ProfileUserWorkItem } from './item/main';
import { ProfileUserRowWrapper } from './item/wrapper/main';

export function ProfileUserGeneralWork() {
  return (
    <div className='flex w-full flex-col'>
      <p className='mb-[1rem] text-2xl font-bold text-slate-300'>their work</p>
      <GlassWindowFrame className='w-full'>
        <GlassWindowContents className='flex flex-col items-center divide-y-[1px] divide-slate-500 divide-opacity-30'>
          <ProfileUserRowWrapper>
            <ProfileUserWorkItem />
          </ProfileUserRowWrapper>
          <ProfileUserRowWrapper>
            <ProfileUserWorkItem />
          </ProfileUserRowWrapper>
          <ProfileUserRowWrapper>
            <ProfileUserWorkItem />
          </ProfileUserRowWrapper>
          <ProfileUserRowWrapper>
            <ProfileUserWorkItem />
          </ProfileUserRowWrapper>
          <ProfileUserRowWrapper>
            <ProfileUserWorkItem />
          </ProfileUserRowWrapper>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
