import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FileSearchImage } from '@/components/form/file/search-image/main';
import { FormInput } from '@/components/form/input/main';
import { FormSelect } from '@/components/form/select/main';
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
      <FileSearchImage
        fileElem={thumbnail}
        onChange={(file) => updateThumbnail(file)}
        label='Theme'
      />
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
      <FormInput
        title='Title'
        placeholder='A title for the space'
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <FormTextArea
        title='Description'
        placeholder='A description for the space'
        rows={3}
        value={description}
        onChange={(e) => updateDescription(e.target.value)}
        style={{ resize: 'none' }}
      />
      <CreateSpaceMembers />
    </FormBody>
  );
}
