import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import {
  TextElement,
  TextElementVariant,
} from '@/architecture/model/elements/text/main';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { useContext, useRef, useState } from 'react';

export function SpacesIdeasTextIdea() {
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
          className='aspect-square h-full w-full rounded-lg bg-yellow-500 p-[1rem] shadow-md'
        >
          <textarea
            id={`sticky-textarea-${ideaObj.id}`}
            className='h-full w-full resize-none bg-transparent text-lg text-black outline-none'
            value={stickyText}
            onChange={(e) => setStickyText(e.target.value)}
            onBlur={handleStickyBlur}
          />
        </div>
      )}
      {ideaObj.textElem.variant === TextElementVariant.ARTICLE && (
        <div className='aspect-[10/14] w-full flex-shrink-0 bg-slate-200 p-[2rem] text-black shadow-md'>
          <textarea
            id={`page-textarea-${ideaObj.id}`}
            className='text-md h-full w-full resize-none bg-transparent font-light text-black outline-none'
            value={pageText}
            onChange={(e) => setPageText(e.target.value)}
            onBlur={handlePageBlur}
          />
        </div>
      )}
    </>
  );
}
