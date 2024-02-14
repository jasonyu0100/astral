import { useContext } from 'react';
import { StarContext } from '@/(ouros)/(model)/draft/constellation/star/main';
import { ScoreMelodyStar } from './melody/main';
import { ScoreRhythmStar } from './rhythm/main';
import { ScoreBeatStar } from './beat/main';
import { ScoreVariant } from '@/(ouros)/(model)/resource/score/main';

export function ScoreStar() {
  const star = useContext(StarContext);

  return (
    <>
      {star.score?.variant === ScoreVariant.MELODY && <ScoreMelodyStar />}
      {star.score?.variant === ScoreVariant.RHYTHM && <ScoreRhythmStar />}
      {star.score?.variant === ScoreVariant.BEAT && <ScoreBeatStar />}
    </>
  );
}


