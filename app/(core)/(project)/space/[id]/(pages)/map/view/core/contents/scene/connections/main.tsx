import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { useContext } from 'react';

export function SpaceMapContentsSceneConnections() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
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
            className='animate-pulse stroke-slate-300 opacity-30'
            strokeWidth={4}
          ></line>
        );
      })}
    </svg>
  );
}
