import { FormBody } from '@/(components)/(form)/body/main';
import { useContext } from 'react';
import { ContextForPageThree } from '../(controller)/create-space/main';

export function CreateSpaceModalPageThree() {
  const {} = useContext(ContextForPageThree);

  return (
    <FormBody>
      <p className='font-bold text-black'>Collaborators</p>
      <p className='font-bold text-black'>Collaborators</p>
      <p className='font-bold text-black'>Collaborators</p>
      <p className='font-bold text-black'>Collaborators</p>
      <p className='font-bold text-black'>Collaborators</p>
      <p className='font-bold text-black'>Collaborators</p>
    </FormBody>
  );
}
