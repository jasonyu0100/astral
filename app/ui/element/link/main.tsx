import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForWayLinkObj } from '@/(server)/model/way/link/main';
import { useContext } from 'react';

export function ElementLinkPreview() {
  const link = useContext(ContextForWayLinkObj);

  return (
    <>
      {link.variant === ElementVariant.FILE && (
        <>
          <img src={link.fileElem?.src} />
        </>
      )}
      {link.variant === ElementVariant.TEXT && (
        <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
          {link.textElem?.text}
        </div>
      )}
      {link.variant === ElementVariant.URL && (
        <iframe
          onDrag={(e) => e.stopPropagation()}
          src={link.urlElem?.url}
          title='YouTube video player'
        />
      )}
    </>
  );
}
