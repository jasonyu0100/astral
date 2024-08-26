import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { UserProfileFeatureItem } from './item/main';

export function UserProfileGeneralFeatures() {
  return (
    <div className='flex w-full flex-col'>
      <p className='mb-[1rem] text-xl font-bold lowercase text-slate-300'>
        they feature on
      </p>
      <GlassWindowFrame roundedFx={roundedFx.rounded} className='w-full'>
        <GlassWindowContents className='flex flex-row items-center space-x-[2rem]'>
          <UserProfileFeatureItem />
          <UserProfileFeatureItem />
          <UserProfileFeatureItem />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
