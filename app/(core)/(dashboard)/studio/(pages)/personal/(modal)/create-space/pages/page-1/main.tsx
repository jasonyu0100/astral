import { FormBody } from '@/ui/form/body/main';
import { FormSearchImage } from '@/ui/form/file/search/search-image/main';
import { FormInput } from '@/ui/form/input/main';
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
        label='Thumbnail'
      />
      <FormInput
        title='Title'
        value={title}
        placeholder='e.g My Space'
        onChange={(e) => updateTitle(e.target.value)}
      />
      <FormInput
        title='Category'
        value={category}
        placeholder='e.g Music, Art, Design'
        onChange={(e) => updateCategory(e.target.value)}
      />
      <CreateSpaceMembers />
    </FormBody>
  );
}
