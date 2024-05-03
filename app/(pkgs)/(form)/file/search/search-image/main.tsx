import {
  FileObj,
  FileObjContext,
} from '@/(lgx)/internal/model/resource/file/main';
import React, { createContext, useState } from 'react';
import SearchModalView from '@/(cx)/(modals)/(components)/search-modal/view';
import { SearchImageListPreview } from './list-image-preview/main';
import {
  SearchModalContext,
  useSearchModal,
} from '@/(cx)/(modals)/(components)/search-modal/main';
import { FileOnChangeContext } from '@/(lgx)/internal/contexts/fileOnChange/main';
import { SearchImageLabel } from './label/main';
import { SearchButton } from './search-button/main';
import { DisplayImagePreview } from './display-image-preview/main';

export const SearchImageContext = createContext({});

export function FormSearchImage({
  file,
  onChange,
  label,
}: {
  file: FileObj;
  onChange: (file: FileObj) => void;
  label: string;
}) {
  const modalContext = useSearchModal();

  return (
    <FileOnChangeContext.Provider value={{ file, onChange }}>
      <SearchModalContext.Provider value={modalContext}>
        <SearchModalView />
        <div className='flex flex-col bg-white'>
          <SearchImageLabel>{label}</SearchImageLabel>
          {file.id === undefined && <SearchButton />}
          {file.id !== undefined && (
            <DisplayImagePreview/>
          )}
        </div>
      </SearchModalContext.Provider>
    </FileOnChangeContext.Provider>
  );
}
