import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';

export function CreateSpaceModalPageThree() {
  const { pageThree } = useContext(ContextForCreateSpace);
  const {
    hours,
    updateHours,
    description,
    updateDescription,
    target,
    updateTarget,
  } = pageThree;

  return (
    <FormBody>
      {/* <DatePicker date={target} onChange={updateTarget} /> */}
      <FormTextArea
        title='Description'
        placeholder='a brief description of the space...'
        rows={5}
        value={description}
        onChange={(e) => updateDescription(e.target.value)}
        style={{ resize: 'none' }}
      />
      <div className='flex w-full flex-col'>
        <label className='mb-1 text-xs font-bold text-slate-400'>
          Estimate
        </label>
        <div className='relative flex h-[4rem] w-full flex-col items-center border-b-[1px] border-slate-500'>
          <input
            type='number'
            className='h-full w-full appearance-none border-none px-[0.5rem] text-xl font-bold leading-9 text-slate-500   outline-none'
            title={'Hours'}
            value={hours}
            min={10}
            max={1000}
            onChange={(e) => {
              updateHours(parseInt(e.target.value.toString()) as number);
            }}
          />
        </div>
      </div>
    </FormBody>
  );
}
