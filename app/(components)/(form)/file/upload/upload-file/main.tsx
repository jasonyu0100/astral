import {
  FileObj,
  FileObjContext,
  FileVariant,
  getFileAccepts,
} from '@/(types)/model/resource/file/main';
import React, { useEffect } from 'react';
import { UploadedFileEntry } from '../common/entry/main';
import { UploadedFileEntryBody } from '../common/entry/body/main';
import { UploadedEntryRemove } from './uploaded/remove/main';
import { UploadFileAreaPlaceholder } from './area/placeholder/main';
import { UploadFileLabel } from '../common/label/main';
import {
  UploadHandlerContext,
  useUploadHandler,
} from '@/(logic)/internal/handler/upload/single/main';
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
  defaultFile?: FileObj;
  onChange: (file: FileObj) => void;
  label: string;
  variant?: FileVariant;
}) {
  const uploadHandler = useUploadHandler(defaultFile, variant);
  const file = uploadHandler.file;

  useEffect(() => {
    onChange(file);
  }, [file]);

  return (
    <UploadHandlerContext.Provider value={uploadHandler}>
      <FileObjContext.Provider value={file} key={file.id}>
        <UploadWrapper>
          <UploadFileLabel>{label}</UploadFileLabel>
          {file.id === undefined ? <UploadFileArea /> : <UploadedFile />}
        </UploadWrapper>
      </FileObjContext.Provider>
    </UploadHandlerContext.Provider>
  );
}
