'use client';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { ArtistCollection } from '../../(creative-epic)/main';
import { ArtistAlbum } from '../../(creative-epic)/shelf/album/main';
import { ArtistShelf } from '../../(creative-epic)/shelf/main';
import { ArtistNetworkSidebar } from './sidebar/main';

export function ArtistsNetworkView() {
  return (
    <GlassContainer
      displayName={ArtistsNetworkView.name}
      className={`flex flex-row`}
      glassStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <GlassContainer
        displayName={ArtistsNetworkView.name}
        className={`flex flex-row`}
        sizeStyle='flex-grow h-full'
      >
        <ArtistCollection>
          <ArtistShelf>
            <ArtistAlbum />
            <ArtistAlbum />
            <ArtistAlbum />
          </ArtistShelf>
          <ArtistShelf>
            <ArtistAlbum />
            <ArtistAlbum />
            <ArtistAlbum />
          </ArtistShelf>
        </ArtistCollection>
      </GlassContainer>
      <ArtistNetworkSidebar />
    </GlassContainer>
  );
}
