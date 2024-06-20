import { ProfileCover } from '@/(components)/(element)/profile/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { DatePicker } from './datepicker/main';

export function CreateSpaceModalPageThree() {
  const { pageThree } = useContext(ContextForCreateSpace);
  const {
    hours,
    updateHours,
    collaborators,
    updateCollaborators,
    target,
    updateTarget,
  } = pageThree;

  return (
    <FormBody>
      <div className='flex w-full flex-col'>
        <label className='mb-1 text-xs font-bold text-slate-400'>Hours</label>
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
      <DatePicker date={target} onChange={updateTarget} />
      <FormSelect title={'Collaborators'}>
        <option>Collaborator A</option>
        <option>Collaborator B</option>
        <option>Collaborator C</option>
      </FormSelect>
      <GlassWindowFrame className='p-[1rem]'>
        <GlassWindowContents className='flex flex-col space-y-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            {exampleFileElems.map((fileElem) => (
              <div className='flex flex-row items-center space-x-[1rem] font-bold'>
                <ProfileCover fileElem={fileElem} />
                <p>First name</p>
                <p>Last name</p>
              </div>
            ))}
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </FormBody>
  );
}
