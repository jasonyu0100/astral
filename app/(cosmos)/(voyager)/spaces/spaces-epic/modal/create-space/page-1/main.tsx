import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormSearchImage } from '@/(common)/form/search-image/main';
import { SelectedImage } from '@/(common)/form/selected-image/main';
import { useContext } from 'react';
import { CreateSpaceModalContext } from '../main';

export function PageOne() {
  const {
    pageOne
  } = useContext(CreateSpaceModalContext);
  const {
    title, updateTitle,
    description, updateDescription,
    thumbnail, updateThumbnail,
  } = pageOne

  return (
    <FormBody>
      <SelectedImage selected={thumbnail} />
      <FormSearchImage
        value={thumbnail}
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
