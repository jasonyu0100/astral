import { FormBody } from '@/ui/form/body/main';
import { FormSearchImage } from '@/ui/form/file/search/search-image/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { CreateSpaceMembers } from '../page-1/members/main';

export function CreateSpaceModalPageThree() {
  const {
    pageThree: { target, updateTarget, background, updateBackground },
  } = useContext(ContextForCreateSpace);

  return (
    <FormBody>
      <FormSearchImage
        fileElem={background}
        label='Background (optional)'
        onChange={(file) => updateBackground(file)}
      />
      {/* <DatePicker date={target} onChange={updateTarget} /> */}
      <CreateSpaceMembers />
    </FormBody>
  );
}
