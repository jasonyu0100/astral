import {
  FileObj,
} from '@/(types)/model/resource/file/main';
import React, { createContext } from 'react';
import SearchModalView from '@/(lib)/(form)/file/search/search-image/search-modal/view';
import { FileOnChangeContext } from '@/(lgx)/internal/contexts/fileOnChange/main';
import { SearchImageLabel } from './label/main';
import { SearchButton } from './search-button/main';
import { DisplayImagePreview } from './display-image-preview/main';
import { SearchModalContext, useSearchModal } from './search-modal/main';

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
