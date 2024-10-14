import { FormBody } from '@/ui/form/body/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { CreateSpaceEditStructure } from './edit/main';

export function CreateSpaceModalPageTwo() {
  const { pageTwo } = useContext(ContextForCreateSpace);
  const { category } = pageTwo;

  return (
    <FormBody>
      <CreateSpaceEditStructure />
    </FormBody>
  );
}
