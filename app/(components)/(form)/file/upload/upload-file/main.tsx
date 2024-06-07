import {
  FileElem,
  ContextForFileElem,
  FileElemVariant,
  getFileAccepts,
} from '@/(model)/elements/file/main';
import React, { useEffect } from 'react';
import { UploadedFileEntry } from '../common/entry/main';
import { UploadedFileEntryBody } from '../common/entry/body/main';
import { UploadedEntryRemove } from './uploaded/remove/main';
import { UploadFileAreaPlaceholder } from './area/placeholder/main';
import { UploadFileLabel } from '../common/label/main';
import {
  UploadHandlerContext,
  useS3UploadController,
} from '@/(api)/(controller)/s3/single/main';
import { UploadFileArea } from './area/main';
import { UploadFileAreaInterface } from './area/upload/main';
import { UploadWrapper } from '../common/wrapper/main';
import { UploadedFile } from './uploaded/main';

export function FormUploadFile({
  defaultFileElem: defaultFileElem,
  onChange,
  label,
  variant,
}: {
  defaultFileElem?: FileElem;
  onChange: (fileElem: FileElem) => void;
  label: string;
  variant?: FileElemVariant;
}) {
  const uploadHandler = useS3UploadController(defaultFileElem, variant);
  const file = uploadHandler.fileElem;

  useEffect(() => {
    onChange(file);
  }, [file]);

  return (
    <UploadHandlerContext.Provider value={uploadHandler}>
      <ContextForFileElem.Provider value={file} key={file.id}>
        <UploadWrapper>
          <UploadFileLabel>{label}</UploadFileLabel>
          {file.id === undefined ? <UploadFileArea /> : <UploadedFile />}
        </UploadWrapper>
      </ContextForFileElem.Provider>
    </UploadHandlerContext.Provider>
  );
}
