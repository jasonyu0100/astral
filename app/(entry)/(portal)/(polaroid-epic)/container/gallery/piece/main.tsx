import { motion } from 'framer-motion';

interface PortalGalleryPieceProps
  extends React.ComponentPropsWithoutRef<'img'> {
  imageState: string;
}

export function PortalGalleryPiece({
  imageState,
  ...props
}: PortalGalleryPieceProps) {
  return (
    <motion.div
      variants={{
        flash: { opacity: 0.75 },
        show: { opacity: 1 },
      }}
      className='aspect-square w-full'
      initial='flash'
      animate={imageState}
    >
      <img {...props} className='h-full w-full' />
    </motion.div>
  );
}
