import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardScene() {
  const scene = useContext(ContextForChapterSceneObj);

  return (
    <SpaceSeaUnaddedCard>
      <p>Scene - {scene.title}</p>
      <br />
      <ul className='list-disc text-sm font-medium'>
        <li>Idea A</li>
        <li>Idea B</li>
        <li>Idea C</li>
      </ul>
    </SpaceSeaUnaddedCard>
  );
}
