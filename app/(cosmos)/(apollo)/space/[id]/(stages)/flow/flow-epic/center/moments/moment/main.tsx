import { MomentBody } from './description/body/main';
import { MomentDivider } from './divider/main';
import { MomentMedia } from './media/main';
import { MomentInfo } from './description/info/main';
import { MomentDescription } from './description/main';
import { MomentObj } from '@/tables/flow/moment/main';
import { useState } from 'react';
import { userTable } from '@/tables/user/table';

interface FlowMomentProps {
  moment: MomentObj;
  index: number;
}

export function FlowMoment({ moment, index }: FlowMomentProps) {
  return (
    <div className='flex flex-col w-full space-y-[3rem] items-center py-[2rem]'>
      <div className='w-full flex flex-row space-x-[100px] items-center justify-center'>
        <MomentMedia moment={moment} />
        <MomentDescription>
          <MomentInfo />
          <MomentBody>{moment.log}</MomentBody>
        </MomentDescription>
      </div>
      <MomentDivider />
    </div>
  );
}
