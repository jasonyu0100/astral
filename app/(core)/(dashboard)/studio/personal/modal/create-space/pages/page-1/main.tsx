import { FormBody } from '@/components/form/body/main';
import { FormSelect } from '@/components/form/select/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { SpaceTemplate } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { CreateSpaceMembers } from './members/main';

export function CreateSpaceModalPageOne() {
  const { pageOne } = useContext(ContextForCreateSpace);
  const {
    title,
    updateTitle,
    thumbnail,
    updateThumbnail,
    category,
    updateCategory,
    description,
    updateDescription,
  } = pageOne;

  return (
    <FormBody>
      {/* <FileSearchImage
        fileElem={thumbnail}
        onChange={(file) => updateThumbnail(file)}
        label='Theme'
      /> */}
      <FormSelect
        title='Project Type'
        value={category}
        onChange={(e) => {
          updateCategory(e.target.value as SpaceTemplate);
        }}
      >
        {Object.values(SpaceTemplate).map((template) => (
          <option key={template} value={template}>
            {template}
          </option>
        ))}
      </FormSelect>
      <AstralTextLineInput
        title='Title'
        placeholder='A title for the space'
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <AstralTextAreaInput
        title='Description'
        placeholder='A description for the space'
        rows={5}
        value={description}
        onChange={(e) => updateDescription(e.target.value)}
        style={{ resize: 'none' }}
      />
      <CreateSpaceMembers />
    </FormBody>
  );
}
