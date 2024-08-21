'use client';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapMovableIdea } from './idea/main';
import { SpaceMapMovable } from './moveable/main';

export function SpaceMapContentsScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='relative h-full w-full'>
      {ideaListController.state.objs.map((idea) => (
        <ContextForSceneIdeaObj.Provider value={idea}>
          <SpaceMapMovable key={idea.id}>
            <SpaceMapMovableIdea />
          </SpaceMapMovable>
        </ContextForSceneIdeaObj.Provider>
      ))}
      <svg className='h-full w-full'>
        {ideaListController.state.objs.slice(0, -1).map((idea, index) => {
          const previous =
            ideaListController.state.objs[index - 1] ||
            ideaListController.state.objs.at(-1);

          const prevX = previous.x + previous.width / 2;
          const prevY = previous.y + previous.height / 2;
          const currX = idea.x + idea.width / 2;
          const currY = idea.y + idea.height / 2;

          return (
            <line
              x1={prevX}
              x2={currX}
              y1={prevY}
              y2={currY}
              className='stroke-slate-300 opacity-30'
              strokeWidth={4}
            ></line>
          );
        })}
      </svg>
    </div>
  );
}
