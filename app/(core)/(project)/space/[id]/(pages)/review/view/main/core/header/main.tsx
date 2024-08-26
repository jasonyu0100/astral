import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { SpaceReviewHeaderLeft } from './left/main';
import { SpaceReviewHeaderMiddle } from './middle/main';
import { SpaceReviewHeaderRight } from './right/main';

export function SpaceReviewHeader() {
  return (
    <GlassAreaContainer
      name={SpaceReviewHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceReviewHeaderLeft />
      <SpaceReviewHeaderMiddle />
      <SpaceReviewHeaderRight />
    </GlassAreaContainer>
  );
}
