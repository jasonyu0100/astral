import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

export function ElementIdeaPreview() {
  const idea = useContext(ContextForIdeaObj);

  return (
    <>
      {idea.variant === ElementVariant.FILE && <img src={idea.fileElem?.src} />}
      {idea.variant === ElementVariant.TEXT && (
        <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
          {idea.textElem?.text}
        </div>
      )}
      {idea.variant === ElementVariant.URL && (
        <iframe
          onDrag={(e) => e.stopPropagation()}
          src={idea.urlElem?.url}
          title='YouTube video player'
        />
      )}
    </>
  );
}
