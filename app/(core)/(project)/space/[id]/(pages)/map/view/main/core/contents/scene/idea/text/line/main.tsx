import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { TextElem } from '@/(server)/(model)/elements/text/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapTextLineIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex aspect-square h-full w-full flex-col items-center justify-center'>
      <input
        className='resize-none bg-transparent text-center text-xs font-bold text-slate-300 outline-none'
        defaultValue={ideaObj.textElem?.text}
        onBlur={(e) => {
          ideaListController.actions.stateActions.updateObj(ideaObj.id, {
            ...ideaObj,
            textElem: {
              ...(ideaObj.textElem || ({} as TextElem)),
              text: e.target.value,
            },
          });
        }}
      />
    </div>
  );
}
