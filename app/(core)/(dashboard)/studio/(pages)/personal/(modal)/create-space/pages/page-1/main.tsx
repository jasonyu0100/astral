import { FormBody } from '@/(components)/(form)/body/main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { FormInput } from '@/(components)/(form)/input/main';
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
  } = pageOne;

  return (
    <FormBody>
      <FormSearchImage
        fileElem={thumbnail}
        onChange={(file) => updateThumbnail(file)}
        label='thumbnail'
      />
      <FormInput
        title='title'
        value={title}
        placeholder='e.g My Space'
        onChange={(e) => updateTitle(e.target.value)}
      />
      <FormInput
        title='category'
        value={category}
        placeholder='e.g Music, Art, Design'
        onChange={(e) => updateCategory(e.target.value)}
      />
      <CreateSpaceMembers />
    </FormBody>
  );
}
