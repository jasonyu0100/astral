import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { getFormattedNumberDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function HomeCampaignRowDate() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const space = useContext(ContextForSpaceObj);

  return (
    <div className='flex flex-col justify-center'>
      <p className='text-sm font-light text-slate-300'>
        {getFormattedNumberDate(new Date(space.created))}
      </p>
    </div>
  );
}
