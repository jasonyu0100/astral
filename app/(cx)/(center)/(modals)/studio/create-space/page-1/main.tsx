import { FormTextArea } from '@/(lib)/(form)/area/main';
import { FormBody } from '@/(lib)/(form)/body/main';
import { FormInput } from '@/(lib)/(form)/input/main';
import { FormSearchImage } from '@/(lib)/(form)/file/search/search-image/main';
import { DisplayImagePreview } from '@/(lib)/(form)/file/search/search-image/display-image-preview/main';
import { useContext } from 'react';
import { CreateSpaceModalContext } from '../main';
import { Divider } from '@/(lib)/(line)/divider/main';
import { FileObj } from '@/(types)/model/resource/file/main';

export function PageOne() {
  const modalContext = useContext(CreateSpaceModalContext);
  const {
    title,
    updateTitle,
    description,
    updateDescription,
    thumbnail,
    updateThumbnail,
  } = modalContext.pageOne;

  return (
    <FormBody>
      <FormSearchImage
        file={thumbnail}
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
