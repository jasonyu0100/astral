'use client';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { ArtistsCollection } from '../../(artists-epic)/main';
import { ArtistsAlbum } from '../../(artists-epic)/shelf/album/main';
import { ArtistsShelf } from '../../(artists-epic)/shelf/main';
import { ArtistsNetworkSidebar } from './sidebar/main';

export function ArtistssNetworkView() {
  return (
    <GlassContainer
      displayName={ArtistssNetworkView.name}
      className={`${containerStyles.row}`}
      glassStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <GlassContainer
        displayName={ArtistssNetworkView.name}
        className={`${containerStyles.row}`}
        sizeStyle='flex-grow h-full'
      >
        <ArtistsCollection>
          <ArtistsShelf>
            <ArtistsAlbum />
            <ArtistsAlbum />
            <ArtistsAlbum />
          </ArtistsShelf>
          <ArtistsShelf>
            <ArtistsAlbum />
            <ArtistsAlbum />
            <ArtistsAlbum />
          </ArtistsShelf>
        </ArtistsCollection>
      </GlassContainer>
      <ArtistsNetworkSidebar />
    </GlassContainer>
  );
}
