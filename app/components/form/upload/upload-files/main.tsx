import {
  ContextForUploadsController,
  useS3UploadsController,
} from '@/api/controller/s3/multiple/main';
import {
  FileElement,
  FileElementVariant,
} from '@/architecture/model/elements/file/main';
import { useEffect } from 'react';
import { UploadFileLabel } from '../common/label/main';
import { UploadFilesArea } from './area/main';
import { UploadFilesList } from './list/main';

export function AstralUploadFiles({
  onChange,
  label,
  variant,
}: {
  onChange: (files: FileElement[]) => void;
  label: string;
  variant?: FileElementVariant;
}) {
  const uploadsHandler = useS3UploadsController(variant);

  useEffect(() => {
    onChange(uploadsHandler.files);
  }, [uploadsHandler.files]);

  return (
    <ContextForUploadsController.Provider value={uploadsHandler}>
      <div className='flex flex-col space-y-[1rem]'>
        <UploadFileLabel>{label}</UploadFileLabel>
        <UploadFilesArea />
        {uploadsHandler.files.length > 0 && <UploadFilesList />}
      </div>
    </ContextForUploadsController.Provider>
  );
}
