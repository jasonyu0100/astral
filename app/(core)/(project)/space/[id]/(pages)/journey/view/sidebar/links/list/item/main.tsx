import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForLogLinkObj } from '@/(server)/model/space/chapter/log/link/main';
import { useContext } from 'react';

export function SpaceJourneySidebarLinksListItem() {
  const link = useContext(ContextForLogLinkObj);

  return (
    <>
      {link.variant === ElementVariant.TEXT && (
        <div className='aspect-square w-full bg-yellow-500 p-[1rem]'>
          {link.textElem?.text}
        </div>
      )}
    </>
  );
}
