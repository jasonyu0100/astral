import { UploadedFileEntryBody } from '../../common/entry/body/main';
import { UploadedFileEntry } from '../../common/entry/main';
import { UploadedEntryRemove } from './remove/main';

export function UploadedFile() {
  return (
    <UploadedFileEntry>
      <UploadedFileEntryBody />
      <UploadedEntryRemove />
    </UploadedFileEntry>
  );
}
