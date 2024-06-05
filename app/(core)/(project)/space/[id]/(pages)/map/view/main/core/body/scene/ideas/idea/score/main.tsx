import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { ScoreMelodyIdea } from './melody/main';
import { ScoreRhythmIdea } from './rhythm/main';
import { ScoreBeatIdea } from './beat/main';
import { ScoreVariant } from '@/(model)/concept/score/main';

export function ScoreIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.score?.variant === ScoreVariant.MELODY && <ScoreMelodyIdea />}
      {star.score?.variant === ScoreVariant.RHYTHM && <ScoreRhythmIdea />}
      {star.score?.variant === ScoreVariant.BEAT && <ScoreBeatIdea />}
    </>
  );
}


