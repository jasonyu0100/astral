import { motion } from 'framer-motion';
import { createContext, useContext, useRef } from 'react';
import { DraftStar } from './star/main';
import { DraftContext } from '../../../../page';
import { StarContext, StarObj } from '@/(ouros)/(model)/draft/constellation/star/main';

export function DraftConstellationStars() {
  const { stars, starHandler } = useContext(DraftContext);
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className='absolute left-0 top-0 h-full w-full'
      ref={constraintsRef}
    >
      {stars.map((star) => (
        // eslint-disable-next-line react/jsx-key
        <StarContext.Provider value={star}>
          <DraftStar
            constraintsRef={constraintsRef}
            activateStar={() => starHandler.activateStar(star.id)}
            updateStar={(data) => starHandler.updateStar(star.id, data)}
          />
        </StarContext.Provider>
      ))}
    </motion.div>
  );
}
