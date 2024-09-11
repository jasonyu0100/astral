import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { ContextForLogLinkObj } from '@/(server)/model/space/chapter/log/link/main';
import { useContext } from 'react';

export function SpacesJourneySidebarLinksListItem() {
  const linkObj = useContext(ContextForLogLinkObj);
  const linkListController = useContext(ContextForLogLinkList);

  return (
    <>
      {linkObj.variant === ElementVariant.FILE && (
        <>
          <img src={linkObj.fileElem?.src} />
        </>
      )}
      {linkObj.variant === ElementVariant.TEXT && (
        <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
          <textarea
            className='h-full w-full resize-none bg-transparent p-[1rem] text-black outline-none'
            // defaultValue={linkObj.textElem?.text}
            onBlur={(e) => {
              linkListController.actions.stateActions.updateObj(linkObj.id, {
                ...linkObj,
                textElem: {
                  ...(linkObj.textElem || ({} as TextElem)),
                  text: e.target.value,
                },
              });
            }}
          >
            {linkObj.textElem?.text}
          </textarea>
        </div>
      )}
      {linkObj.variant === ElementVariant.URL && (
        <iframe
          onDrag={(e) => e.stopPropagation()}
          src={linkObj.urlElem?.url}
          title='YouTube video player'
        />
      )}
    </>
  );
}
