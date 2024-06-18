import { ProfileCover } from '@/(components)/(element)/profile/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { useContext } from 'react';
import { ContextForPageThree } from '../(controller)/create-space/main';

export function CreateSpaceModalPageThree() {
  const { hours, updateHours, collaborators, updateCollaborators } =
    useContext(ContextForPageThree);

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
      <FormSelect title={'Collaborators'}>
        <option>Collaborator A</option>
        <option>Collaborator B</option>
        <option>Collaborator C</option>
      </FormSelect>
      <div className='flex flex-row space-x-[1rem]'>
        {exampleFileElems.map((fileElem) => (
          <ProfileCover fileElem={fileElem} />
        ))}
      </div>
    </FormBody>
  );
}
