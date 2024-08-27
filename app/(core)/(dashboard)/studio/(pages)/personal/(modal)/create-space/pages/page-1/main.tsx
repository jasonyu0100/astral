import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormSearchImage } from '@/ui/form/file/search/search-image/main';
import { FormInput } from '@/ui/form/input/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';

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
      <FormSearchImage
        fileElem={thumbnail}
        onChange={(file) => updateThumbnail(file)}
        label='Thumbnail'
      />
      <FormInput
        title='Title'
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <FormTextArea
        title='Objective'
        placeholder='A direction for the space'
        rows={8}
        value={description}
        onChange={(e) => updateDescription(e.target.value)}
        style={{ resize: 'none' }}
      />
      <FormInput
        title='Category'
        value={category}
        onChange={(e) => updateCategory(e.target.value)}
      />
    </FormBody>
  );
}
