import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { ScoreMelodyIdea } from './melody/main';
import { ScoreRhythmIdea } from './rhythm/main';
import { ScoreBeatIdea } from './beat/main';
import { ScoreElemVariant } from '@/(model)/elements/score/main';

export function ScoreIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.score?.variant === ScoreElemVariant.MELODY && <ScoreMelodyIdea />}
      {star.score?.variant === ScoreElemVariant.RHYTHM && <ScoreRhythmIdea />}
      {star.score?.variant === ScoreElemVariant.BEAT && <ScoreBeatIdea />}
    </>
  );
}


