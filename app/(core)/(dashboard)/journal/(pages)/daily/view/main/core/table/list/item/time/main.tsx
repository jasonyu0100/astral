import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { getFormattedAMPM } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalDailyTableListItemTime() {
  const resource = useContext(ContextForCollectionResourceObj);
  return <div>{getFormattedAMPM(new Date(resource.created))}</div>;
}
