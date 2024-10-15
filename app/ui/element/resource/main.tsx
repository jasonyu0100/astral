import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';

export function ElementResourceEntry() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <>
      {resource.variant === ElementVariant.FILE && (
        <img src={resource.fileElem?.src} />
      )}
      {resource.variant === ElementVariant.TEXT && (
        <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
          {resource.textElem?.text}
        </div>
      )}
      {resource.variant === ElementVariant.URL && (
        <iframe
          onDrag={(e) => e.stopPropagation()}
          src={resource.urlElem?.url}
          title='YouTube video player'
        />
      )}
    </>
  );
}
