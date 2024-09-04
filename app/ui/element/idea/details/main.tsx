import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function ElementIdeaDetailsPreview() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {idea.variant === ElementVariant.URL && (
        <>
          <p className='w-full text-sm font-light text-slate-300'>
            {idea.urlElem?.url}
          </p>
        </>
      )}
      {idea.variant === ElementVariant.TEXT && (
        <>
          <p className='w-full text-sm font-light text-slate-300'>
            {idea.textElem?.text}
          </p>
        </>
      )}
      {idea.variant === ElementVariant.FILE && (
        <>
          <p className='w-full text-sm font-light text-slate-300'>
            {idea.fileElem?.src}
          </p>
          <p className='w-full text-sm font-light text-slate-300'>
            {idea.fileElem?.variant}
          </p>
        </>
      )}
    </>
  );
}
