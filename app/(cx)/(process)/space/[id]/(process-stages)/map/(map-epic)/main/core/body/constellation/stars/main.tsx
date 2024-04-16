import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import { MapStar } from './star/main';
import { StarContext } from '@/(logic)/internal/model/map/constellation/star/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';

export function MapConstellationStars() {
  const starsHandler = useContext(StarsHandlerContext);
  const stars = starsHandler.stars;
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className='absolute left-0 top-0 h-full w-full'
      ref={constraintsRef}
    >
      {stars.map((star) => (
        <StarContext.Provider value={star} key={star.id}>
          <MapStar key={star.id} constraintsRef={constraintsRef} />
        </StarContext.Provider>
      ))}
    </motion.div>
  );
}
