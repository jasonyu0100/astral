import { FormBody } from '@/ui/form/body/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { CreateSpaceMembers } from '../page-1/members/main';
import { DatePicker } from './datepicker/main';

export function CreateSpaceModalPageThree() {
  const {
    pageThree: { target, updateTarget, commitmentLevel, updateCommitmentLevel },
  } = useContext(ContextForCreateSpace);

  return (
    <FormBody>
      <DatePicker date={target} onChange={updateTarget} />
      {/* Commitment Level Radio Picker */}
      {/* <div className='p-[2rem]'>
        <p className='mb-4 text-lg'>Select your commitment level:</p>
        <div className='space-y-2'>
          {[1, 2, 3, 4, 5].map((level) => (
            <label key={level} className='flex items-center space-x-3'>
              <input
                type='radio'
                value={level}
                checked={commitmentLevel === level}
                onChange={(e) => updateCommitmentLevel(e.target.value)}
                className='form-radio h-4 w-4 text-indigo-600'
              />
              <span className='text-md'>
                {level === 1 && '🧘‍♂️ Totally Casual'}
                {level === 2 && '🎨 Mostly Chill'}
                {level === 3 && '🛠️ Balanced Approach'}
                {level === 4 && '💪 Focused but Relaxed'}
                {level === 5 && '🚀 All-Out Dedication'}
              </span>
            </label>
          ))}
        </div>
      </div> */}
      <CreateSpaceMembers />
    </FormBody>
  );
}
