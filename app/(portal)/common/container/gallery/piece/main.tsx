interface PortalGalleryPieceProps
  extends React.ComponentPropsWithoutRef<'img'> {
  imageState: string;
}

export function PortalGalleryPiece({ ...props }: PortalGalleryPieceProps) {
  return <img {...props} className='h-full w-full' />;
}
