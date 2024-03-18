'use client';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { JournalNetworkSidebar } from './sidebar/main';
import { RecordCollection } from '../../(artists-epic)/main';
import { RecordAlbum } from '../../(artists-epic)/shelf/album/main';
import { RecordShelf } from '../../(artists-epic)/shelf/main';

export function ArtistsNetworkView() {
  return (
    <GlassContainer
      displayName={ArtistsNetworkView.name}
      className={`${containerStyles.row}`}
      glassStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <GlassContainer
        className={`${containerStyles.row}`}
        sizeStyle='flex-grow h-full'
      >
        <RecordCollection>
          <RecordShelf>
            <RecordAlbum />
            <RecordAlbum />
            <RecordAlbum />
          </RecordShelf>
          <RecordShelf>
            <RecordAlbum />
            <RecordAlbum />
            <RecordAlbum />
          </RecordShelf>
        </RecordCollection>
      </GlassContainer>
      <JournalNetworkSidebar />
    </GlassContainer>
  );
}
