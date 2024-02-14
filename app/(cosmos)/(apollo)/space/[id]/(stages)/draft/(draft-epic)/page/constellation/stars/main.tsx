import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import { DraftStar } from './star/main';
import { DraftContext } from '../../../../page';
import { StarContext } from '@/(ouros)/(model)/draft/constellation/star/main';

export function DraftConstellationStars() {
  const { stars } = useContext(DraftContext);
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
          />
        </StarContext.Provider>
      ))}
    </motion.div>
  );
}
