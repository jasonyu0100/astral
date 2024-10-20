import { ContextForTaskLinkList } from '@/(server)/controller/way/link/list';
import { TextElem } from '@/(server)/model/elements/text/main';
import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { useContext } from 'react';

export function SpacesLinkTextStickyIdea() {
  const taskLinkObj = useContext(ContextForTaskLinkObj);
  const linkListController = useContext(ContextForTaskLinkList);

  return (
    <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
      <textarea
        className='h-full w-full resize-none bg-transparent p-[1rem] text-black outline-none'
        // defaultValue={linkObj.textElem?.text}
        onBlur={(e) => {
          linkListController.actions.stateActions.updateObj(taskLinkObj.id, {
            ...taskLinkObj,
            textElem: {
              ...(taskLinkObj.textElem || ({} as TextElem)),
              text: e.target.value,
            },
          });
        }}
      >
        {taskLinkObj.textElem?.text}
      </textarea>
    </div>
  );
}
