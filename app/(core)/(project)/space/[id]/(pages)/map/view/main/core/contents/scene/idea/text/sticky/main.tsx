import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { TextElem } from '@/(server)/(model)/elements/text/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapTextStickyIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div
      className='aspect-square h-full bg-yellow-500 shadow-lg'
      style={{ padding: '15%' }}
    >
      <textarea
        className='z-50 h-full w-full resize-none bg-transparent text-xs font-bold text-black outline-none'
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
