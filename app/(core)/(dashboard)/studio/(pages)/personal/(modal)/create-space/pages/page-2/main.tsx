import { SpaceTemplate } from '@/(server)/templates/space/main';
import { FormBody } from '@/ui/(form)/body/main';
import { FormSelect } from '@/ui/(form)/select/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { CreateSpaceEditStructure } from './edit/main';
import { CreateSpaceTemplateStructure } from './template/main';

export function CreateSpaceModalPageTwo() {
  const { pageTwo } = useContext(ContextForCreateSpace);
  const { variant, updateTemplateProject: updateVariant } = pageTwo;

  return (
    <FormBody>
      <FormSelect
        title='Structure'
        value={variant}
        onChange={(e) => {
          updateVariant(e.target.value);
        }}
      >
        <option value={SpaceTemplate.Project}>{SpaceTemplate.Project}</option>
        <option value={SpaceTemplate.Song}>{SpaceTemplate.Song}</option>
        <option value={SpaceTemplate.Mix}>{SpaceTemplate.Mix}</option>
        <option value={SpaceTemplate.Melody}>{SpaceTemplate.Melody}</option>
      </FormSelect>
      <br />
      {variant === SpaceTemplate.Project ? (
        <CreateSpaceEditStructure />
      ) : (
        <CreateSpaceTemplateStructure />
      )}
    </FormBody>
  );
}
