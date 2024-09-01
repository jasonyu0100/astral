import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneySidebarListMode,
} from '../../../../../controller/main';

export function SpaceJourneySidebarIdeasListBack() {
  const journeyController = useContext(ContextForSpaceJourney);

  return (
    <p className='cursor-pointer text-sm font-bold text-slate-500'>
      <span
        onClick={() => {
          journeyController.updateListSceneMode(
            SpaceJourneySidebarListMode.SCENES,
          );
        }}
      >
        Back
      </span>
    </p>
  );
}
