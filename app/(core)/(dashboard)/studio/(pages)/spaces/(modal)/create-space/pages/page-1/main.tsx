import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';

export function CreateSpaceModalPageOne() {
  const { pageOne } = useContext(ContextForCreateSpace);
  const {
    title,
    updateTitle,
    description,
    updateDescription,
    thumbnail,
    updateThumbnail,
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
        title='Description'
        rows={5}
        value={description}
        onChange={(e) => updateDescription(e.target.value)}
        style={{ resize: 'none' }}
      />
    </FormBody>
  );
}
