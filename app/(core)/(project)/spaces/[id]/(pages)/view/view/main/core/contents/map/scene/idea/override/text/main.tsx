import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { TextElem, TextElemVariant } from '@/server/model/elements/text/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useRef, useState } from 'react';

export function SpacesViewTextIdea() {
  const ideaObj = useContext(ContextForIdeaObj);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const divRef = useRef<HTMLDivElement>(null);

  // State for STICKY variant
  const [stickyText, setStickyText] = useState(ideaObj.textElem?.text || '');

  // State for PAGE variant
  const [pageText, setPageText] = useState(ideaObj.textElem?.text || '');

  const handleStickyBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    // Update the local state for sticky
    setStickyText(newText);

    // Optimistically update the backend for sticky
    ideaListController.actions.stateActions.updateObj(ideaObj.id, {
      ...ideaObj,
      textElem: {
        ...(ideaObj.textElem || ({} as TextElem)),
        text: newText,
      },
    });
  };

  const handlePageBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    // Update the local state for page
    setPageText(newText);

    // Optimistically update the backend for page
    ideaListController.actions.stateActions.updateObj(ideaObj.id, {
      ...ideaObj,
      textElem: {
        ...(ideaObj.textElem || ({} as TextElem)),
        text: newText,
      },
    });
  };

  // Render nothing if ideaObj or textElem is not defined
  if (!ideaObj || !ideaObj.textElem) return null;

  return (
    <>
      {ideaObj.textElem.variant === TextElemVariant.STICKY && (
        <div
          ref={divRef}
          className='aspect-square h-full w-full rounded-lg bg-yellow-500 p-[1rem] shadow-md'
        >
          <label htmlFor={`sticky-textarea-${ideaObj.id}`} className='sr-only'>
            Sticky Idea Text
          </label>
          <textarea
            id={`sticky-textarea-${ideaObj.id}`}
            className='h-full w-full resize-none bg-transparent text-lg font-bold text-black outline-none'
            value={stickyText}
            onChange={(e) => setStickyText(e.target.value)}
            onBlur={handleStickyBlur}
          />
        </div>
      )}
      {ideaObj.textElem.variant === TextElemVariant.PAGE && (
        <div className='aspect-[7/5] w-full flex-shrink-0 rounded-[1rem] bg-slate-300 bg-opacity-30 p-[1rem] text-black shadow-md'>
          <label htmlFor={`page-textarea-${ideaObj.id}`} className='sr-only'>
            Page Idea Text
          </label>
          <textarea
            id={`page-textarea-${ideaObj.id}`}
            className='h-full w-full resize-none bg-transparent font-bold text-slate-300 outline-none'
            value={pageText}
            onChange={(e) => setPageText(e.target.value)}
            onBlur={handlePageBlur}
          />
        </div>
      )}
    </>
  );
}
