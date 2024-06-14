import { MomentBody } from './description/body/main';
import { MomentDivider } from './divider/main';
import { MomentResource } from './resource/main';
import { MomentInfo } from './description/info/main';
import { MomentDescription } from './description/main';
import { useContext } from 'react';

export function VerseMoment() {
  return (
    <div className='flex w-full flex-col items-center space-y-[3rem] py-[2rem]'>
      <div className='flex w-full flex-row items-center justify-center space-x-[100px]'>
        <MomentResource />
        <MomentDescription>
          <MomentInfo />
          <MomentBody></MomentBody>
        </MomentDescription>
      </div>
      <MomentDivider />
    </div>
  );
}
