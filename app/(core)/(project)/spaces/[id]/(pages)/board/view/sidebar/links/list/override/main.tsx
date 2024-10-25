import { ContextForTaskLinkList } from '@/server/controller/way/link/list';
import { TextElem, TextElemVariant } from '@/server/model/elements/text/main';
import { ContextForTaskLinkObj } from '@/server/model/task/link/main';
import { useContext } from 'react';

export function SpacesLinkTextIdea() {
  const linkListController = useContext(ContextForTaskLinkList);
  const taskLinkObj = useContext(ContextForTaskLinkObj);

  return (
    <>
      {taskLinkObj.textElem?.variant === TextElemVariant.STICKY && (
        <div className='aspect-square w-full rounded-lg bg-yellow-500 p-[1rem] text-black'>
          <textarea
            className='h-full w-full resize-none bg-transparent p-[1rem] text-black outline-none'
            // defaultValue={linkObj.textElem?.text}
            onBlur={(e) => {
              linkListController.actions.stateActions.updateObj(
                taskLinkObj.id,
                {
                  ...taskLinkObj,
                  textElem: {
                    ...(taskLinkObj.textElem || ({} as TextElem)),
                    text: e.target.value,
                  },
                },
              );
            }}
          >
            {taskLinkObj.textElem?.text}
          </textarea>
        </div>
      )}
    </>
  );
}
