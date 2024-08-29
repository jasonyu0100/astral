import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapConnectionMode,
} from '../../../../../../controller/map/main';

export function SpaceMapContentsSceneConnections() {
  const mapController = useContext(ContextForSpaceMap);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const visibleIdeas = ideaListController.state.objs.filter(
    (idea) => idea.visible,
  );

  return (
    <svg className='h-full w-full'>
      {mapController.connectionMode == SpaceMapConnectionMode.DEFAULT && (
        <>
          {visibleIdeas.map((idea, index) => {
            const previous = visibleIdeas[index - 1] || visibleIdeas.at(-1);

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
        </>
      )}
    </svg>
  );
}
