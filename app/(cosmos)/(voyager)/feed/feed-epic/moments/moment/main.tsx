import { PostBody } from './body/main';
import { PostDivider } from './divider/main';
import { PostMedia } from './media/main';
import { PostInfo } from './info/main';
import { PostDescription } from './description/main';
import { MomentObj } from '@/tables/flow/moment/main';
import { useState } from 'react';
import { userTable } from '@/tables/user/table';
import { spaceMap } from '@/(cosmos)/(apollo)/space/[id]/map';

export function FeedMoment({ moment }: { moment: MomentObj }) {
  return (
    <div className='flex flex-col w-full space-y-[3rem] items-center py-[2rem]'>
      <div className='w-full flex flex-row space-x-[100px] items-center justify-center'>
        <PostMedia moment={moment} />
        <PostDescription>
          <PostInfo />
          <PostBody>
            {moment.log}
          </PostBody>
          <div className="flex flex-row space-x-[1rem] items-center">
            <a className="text-blue-500 font-extraBold" href={spaceMap.space.id.storm.link(moment.spaceId)}>Go to Space</a>
          </div>
        </PostDescription>
      </div>
      <PostDivider />
    </div>
  );
}
