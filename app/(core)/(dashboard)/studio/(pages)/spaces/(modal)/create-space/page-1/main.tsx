import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { DisplayImagePreview } from '@/(components)/(form)/file/search/search-image/display-image-preview/main';
import { useContext } from 'react';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForPageOne } from '../main';

export function PageOne() {
  const {
    title,
    updateTitle,
    description,
    updateDescription,
    thumbnail,
    updateThumbnail,
  } = useContext(ContextForPageOne);

  

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
