export function ElementSpotify({ url }: { url: string }) {
  return (
    <iframe
      src={url}
      style={{ objectFit: 'contain', width: '100%' }}
      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      loading='lazy'
    />
  );
}
