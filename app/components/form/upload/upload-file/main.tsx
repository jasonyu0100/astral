import {
  UploadHandlerContext,
  useS3UploadController,
} from '@/api/controller/s3/single/main';
import {
  ContextForFileElement,
  FileElement,
} from '@/architecture/model/elements/file/main';
import { useEffect } from 'react';
import { UploadFileLabel } from '../common/label/main';
import { UploadWrapper } from '../common/wrapper/main';
import { UploadFileArea } from './area/main';
import { UploadedFile } from './uploaded/main';

export function AstralUploadFile({
  defaultFileElem: defaultFileElem,
  onChange,
  label,
}: {
  defaultFileElem?: FileElement;
  onChange: (fileElem: FileElement) => void;
  label?: string;
}) {
  const uploadHandler = useS3UploadController(defaultFileElem);
  const file = uploadHandler.fileElem;

  useEffect(() => {
    onChange(file);
  }, [file]);

  return (
    <UploadHandlerContext.Provider value={uploadHandler}>
      <ContextForFileElement.Provider value={file} key={file?.id}>
        <UploadWrapper>
          {label && <UploadFileLabel>{label}</UploadFileLabel>}
          {file?.id === undefined ? <UploadFileArea /> : <UploadedFile />}
        </UploadWrapper>
      </ContextForFileElement.Provider>
    </UploadHandlerContext.Provider>
  );
}
