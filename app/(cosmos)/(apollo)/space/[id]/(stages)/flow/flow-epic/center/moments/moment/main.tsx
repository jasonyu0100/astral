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
    <div className='flex w-full flex-col items-center space-y-[3rem] py-[2rem]'>
      <div className='flex w-full flex-row items-center justify-center space-x-[100px]'>
        <MomentMedia moment={moment} />
        <MomentDescription>
          <MomentInfo />
          <MomentBody>{moment.description}</MomentBody>
        </MomentDescription>
      </div>
      <MomentDivider />
    </div>
  );
}
