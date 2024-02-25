import { PostBody } from './body/main';
import { PostDivider } from './divider/main';
import { MomentResource } from './resource/main';
import { PostInfo } from './info/main';
import { PostDescription } from './description/main';
import { MomentObj } from '@/(logic)/internal/data/infra/model/flow/moment/main';
import { spaceMap } from '@/(cx)/(process)/space/[id]/map';
import Link from 'next/link';

export function FeedMoment({ moment }: { moment: MomentObj }) {
  return (
    <div className='flex w-full flex-col items-center space-y-[3rem] py-[2rem]'>
      <div className='flex w-full flex-row items-center justify-center space-x-[100px]'>
        <MomentResource moment={moment} />
        <PostDescription>
          <PostInfo />
          <PostBody>{moment.description}</PostBody>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <Link
              className='font-extraBold text-blue-500'
              href={spaceMap.space.id.storm.link(moment.spaceId)}
            >
              Go to Space
            </Link>
          </div>
        </PostDescription>
      </div>
      <PostDivider />
    </div>
  );
}
