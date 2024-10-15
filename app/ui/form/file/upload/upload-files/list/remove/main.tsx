import { ContextForUploadsController } from '@/api/controller/s3/multiple/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { useContext } from 'react';

export function UploadedEntryRemove({ i }: { i: number }) {
  const uploadsHandler = useContext(ContextForUploadsController);

  return (
    <AstralCloseIcon onClick={() => uploadsHandler.actions.clearFile(i)} />
  );
}
