import { useContext } from 'react';
import { IdeaContext } from '@/(types)/model/map/part/idea/main';
import { ScoreMelodyStar } from './melody/main';
import { ScoreRhythmStar } from './rhythm/main';
import { ScoreBeatStar } from './beat/main';
import { ScoreVariant } from '@/(types)/model/resource/score/main';

export function ScoreStar() {
  const star = useContext(IdeaContext);

  return (
    <>
      {star.score?.variant === ScoreVariant.MELODY && <ScoreMelodyStar />}
      {star.score?.variant === ScoreVariant.RHYTHM && <ScoreRhythmStar />}
      {star.score?.variant === ScoreVariant.BEAT && <ScoreBeatStar />}
    </>
  );
}


