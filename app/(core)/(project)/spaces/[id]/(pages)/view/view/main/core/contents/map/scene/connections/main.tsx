import {
  ContextForSpacesView,
  SpacesViewLinkMode,
} from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaRelationshipListFromScene } from '@/(server)/controller/idea/relationship/list-from-scene';
import { useContext } from 'react';

export function SpacesViewContentsSceneConnections() {
  const {
    state: { linkMode: connectionMode },
  } = useContext(ContextForSpacesView);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const ideaRelationshipListController = useContext(
    ContextForIdeaRelationshipListFromScene,
  );

  const maxWeight = ideaRelationshipListController.state.objs.reduce(
    (max, relationship) =>
      relationship.weight > max ? relationship.weight : max,
    0,
  );
  const minWeight = ideaRelationshipListController.state.objs.reduce(
    (min, relationship) =>
      relationship.weight < min ? relationship.weight : min,
    maxWeight,
  );

  return (
    <svg className='h-full w-full'>
      {connectionMode == SpacesViewLinkMode.ON && (
        <>
          {ideaRelationshipListController.state.objs.map((relationship) => {
            const fromIdea = ideaListController.actions.stateActions.find(
              relationship.fromIdeaId,
            );
            const toIdea = ideaListController.actions.stateActions.find(
              relationship.toIdeaId,
            );
            if (fromIdea.visible && toIdea.visible) {
              const prevX = fromIdea.x + fromIdea.width / 2;
              const prevY = fromIdea.y + fromIdea.height / 2;
              const currX = toIdea.x + toIdea.width / 2;
              const currY = toIdea.y + toIdea.height / 2;

              const normaliseWeight = (weight: number) => {
                if (maxWeight === minWeight) {
                  // Prevent division by zero if all weights are equal
                  return 1;
                }
                const numerator = weight - minWeight;
                const denominator = maxWeight - minWeight;
                return numerator / denominator; // Normalized weight between 0 and 1
              };

              const normalisedWeight = normaliseWeight(relationship.weight);

              // Sigmoid-like function for smooth scaling
              const sigmoid = (x: number, k: number = 10) =>
                1 / (1 + Math.exp(-k * (x - 0.5)));

              // Calculate the normalized sigmoid weight
              const sigmoidWeight = sigmoid(normalisedWeight);

              // Scale stroke width using the sigmoid weight
              const maxStrokeWidth = 10;
              const minStrokeWidth = 1;
              const strokeWidth =
                sigmoidWeight * (maxStrokeWidth - minStrokeWidth) +
                minStrokeWidth;

              // Scale opacity using the sigmoid weight
              const minOpacity = 0.3;
              const maxOpacity = 0.8;
              const opacity =
                sigmoidWeight * (maxOpacity - minOpacity) + minOpacity;

              return (
                <line
                  x1={prevX}
                  x2={currX}
                  y1={prevY}
                  y2={currY}
                  className='animate-pulse stroke-slate-300'
                  style={{ opacity: opacity }}
                  strokeWidth={strokeWidth}
                ></line>
              );
            } else {
              return null;
            }
          })}
        </>
      )}
    </svg>
  );
}
