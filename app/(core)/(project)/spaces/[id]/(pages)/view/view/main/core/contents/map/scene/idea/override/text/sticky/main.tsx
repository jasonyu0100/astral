import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { TextElem } from '@/(server)/model/elements/text/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

import { useRef } from 'react';

export function SpacesViewTextStickyIdea() {
  const ideaObj = useContext(ContextForIdeaObj);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={divRef}
      className='h-full w-full bg-yellow-500 p-[1rem] shadow-lg'
    >
      <textarea
        className='h-full w-full resize-none bg-transparent text-lg text-black outline-none'
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
