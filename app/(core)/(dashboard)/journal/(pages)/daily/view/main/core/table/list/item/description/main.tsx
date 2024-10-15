import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';

export function JournalDailyTableListItemDescription() {
  const resource = useContext(ContextForCollectionResourceObj);

  return <div>{resource.description?.trim() || 'Untitled'}</div>;
}
