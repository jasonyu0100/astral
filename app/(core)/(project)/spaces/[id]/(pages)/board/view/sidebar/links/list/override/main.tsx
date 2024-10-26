import { ContextForTaskLinkList } from '@/server/controller/way/link/list';
import { TextElem, TextElemVariant } from '@/server/model/elements/text/main';
import { ContextForTaskLinkObj } from '@/server/model/task/link/main';
import { useContext, useState } from 'react';

export function SpacesLinkTextIdea() {
  const linkListController = useContext(ContextForTaskLinkList);
  const taskLinkObj = useContext(ContextForTaskLinkObj);

  // State for STICKY variant
  const [stickyText, setStickyText] = useState(
    taskLinkObj.textElem?.text || '',
  );

  // State for PAGE variant
  const [pageText, setPageText] = useState(taskLinkObj.textElem?.text || '');

  const handleStickyBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    // Update the local state for sticky
    setStickyText(newText);

    // Optimistically update the backend for sticky
    linkListController.actions.stateActions.updateObj(taskLinkObj.id, {
      ...taskLinkObj,
      textElem: {
        ...(taskLinkObj.textElem || ({} as TextElem)),
        text: newText,
      },
    });
  };

  const handlePageBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    // Update the local state for page
    setPageText(newText);

    // Optimistically update the backend for page
    linkListController.actions.stateActions.updateObj(taskLinkObj.id, {
      ...taskLinkObj,
      textElem: {
        ...(taskLinkObj.textElem || ({} as TextElem)),
        text: newText,
      },
    });
  };

  // Render nothing if taskLinkObj or textElem is not defined
  if (!taskLinkObj || !taskLinkObj.textElem) return null;

  return (
    <>
      {taskLinkObj.textElem.variant === TextElemVariant.STICKY && (
        <div className='aspect-square w-full rounded-lg bg-yellow-500 p-[1rem] text-black shadow-md'>
          <label
            htmlFor={`sticky-textarea-${taskLinkObj.id}`}
            className='sr-only'
          >
            Sticky Link Text
          </label>
          <textarea
            id={`sticky-textarea-${taskLinkObj.id}`}
            className='h-full w-full resize-none bg-transparent p-[1rem] text-black outline-none'
            value={stickyText}
            onChange={(e) => setStickyText(e.target.value)}
            onBlur={handleStickyBlur}
          />
        </div>
      )}
      {taskLinkObj.textElem.variant === TextElemVariant.PAGE && (
        <div className='aspect-[7/5] w-full flex-shrink-0 rounded-[1rem] bg-slate-300 bg-opacity-30 p-[1rem] text-black shadow-md'>
          <label
            htmlFor={`page-textarea-${taskLinkObj.id}`}
            className='sr-only'
          >
            Page Link Text
          </label>
          <textarea
            id={`page-textarea-${taskLinkObj.id}`}
            className='h-full w-full resize-none bg-transparent p-[1rem] font-bold text-slate-300 outline-none'
            value={pageText}
            onChange={(e) => setPageText(e.target.value)}
            onBlur={handlePageBlur}
          />
        </div>
      )}
    </>
  );
}
