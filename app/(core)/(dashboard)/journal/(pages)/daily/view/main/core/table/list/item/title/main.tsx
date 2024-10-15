import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';

export function JournalDailyTableListItemTitle() {
  const resource = useContext(ContextForCollectionResourceObj);
  return <div>{resource.title?.trim() || 'Untitled'}</div>;
}
