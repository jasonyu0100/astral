import {
  FileElem,
  FileElemContext,
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
  useUploadHandler,
} from '@/(model)/(controller)/elements/file/(upload)/single/main';
import { UploadFileArea } from './area/main';
import { UploadFileAreaInterface } from './area/upload/main';
import { UploadWrapper } from '../common/wrapper/main';
import { UploadedFile } from './uploaded/main';

export function FormUploadFile({
  defaultFile,
  onChange,
  label,
  variant,
}: {
  defaultFile?: FileElem;
  onChange: (file: FileElem) => void;
  label: string;
  variant?: FileElemVariant;
}) {
  const uploadHandler = useUploadHandler(defaultFile, variant);
  const file = uploadHandler.file;

  useEffect(() => {
    onChange(file);
  }, [file]);

  return (
    <UploadHandlerContext.Provider value={uploadHandler}>
      <FileElemContext.Provider value={file} key={file.id}>
        <UploadWrapper>
          <UploadFileLabel>{label}</UploadFileLabel>
          {file.id === undefined ? <UploadFileArea /> : <UploadedFile />}
        </UploadWrapper>
      </FileElemContext.Provider>
    </UploadHandlerContext.Provider>
  );
}
