import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import {
  TextElement,
  TextElementVariant,
} from '@/server/model/elements/text/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useRef, useState } from 'react';

export function SpacesSceneTextIdea() {
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
        ...(ideaObj.textElem || ({} as TextElement)),
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
        ...(ideaObj.textElem || ({} as TextElement)),
        text: newText,
      },
    });
  };

  // Render nothing if ideaObj or textElem is not defined
  if (!ideaObj || !ideaObj.textElem) return null;

  return (
    <>
      {ideaObj.textElem.variant === TextElementVariant.STICKY && (
        <div
          ref={divRef}
          className='aspect-square h-full w-full rounded-lg border-[1px] border-slate-300 bg-yellow-500 p-[1rem] shadow-md'
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
      {ideaObj.textElem.variant === TextElementVariant.ARTICLE && (
        <div className='aspect-[7/5] w-full flex-shrink-0 rounded-[1rem] bg-slate-300 bg-opacity-30 p-[1rem] text-black shadow-md'>
          <label htmlFor={`page-textarea-${ideaObj.id}`} className='sr-only'>
            Page Idea Text
          </label>
          <textarea
            id={`page-textarea-${ideaObj.id}`}
            className='h-full w-full resize-none bg-transparent text-lg font-light text-slate-300 outline-none'
            value={pageText}
            onChange={(e) => setPageText(e.target.value)}
            onBlur={handlePageBlur}
          />
        </div>
      )}
    </>
  );
}
