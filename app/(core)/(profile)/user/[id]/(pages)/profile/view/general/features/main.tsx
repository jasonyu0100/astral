import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { roundedFx } from '@/(style)/data';
import { ProfileUserFeatureItem } from './item/main';

export function ProfileUserGeneralFeatures() {
  return (
    <div className='flex w-full flex-col'>
      <p className='mb-[1rem] text-xl font-bold lowercase text-slate-300'>
        they feature on
      </p>
      <GlassWindowFrame roundedFx={roundedFx.rounded} className='w-full'>
        <GlassWindowContents className='flex flex-row items-center space-x-[2rem]'>
          <ProfileUserFeatureItem />
          <ProfileUserFeatureItem />
          <ProfileUserFeatureItem />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
