import {
  FileElem,
} from '@/(server)/(model)/elements/file/main';
import React, { createContext } from 'react';
import SearchModalView from '@/(components)/(form)/file/search/search-image/search-modal/view';
import { ContextForFileChangable } from '@/(logic)/contexts/fileChange/main';
import { SearchImageLabel } from './label/main';
import { SearchButton } from './search-button/main';
import { DisplayImagePreview } from './display-image-preview/main';
import { SearchModalContext, useSearchModal } from './search-modal/main';

export const SearchImageContext = createContext({});

export function FormSearchImage({
  fileElem: fileElem,
  onChange,
  label,
}: {
  fileElem: FileElem;
  onChange: (fileElem: FileElem) => void;
  label: string;
}) {
  const modalContext = useSearchModal();

  return (
    <ContextForFileChangable.Provider value={{ fileElem: fileElem, onChange }}>
      <SearchModalContext.Provider value={modalContext}>
        <SearchModalView />
        <div className='flex flex-col bg-white'>
          <SearchImageLabel>{label}</SearchImageLabel>
          {fileElem.id === undefined && <SearchButton />}
          {fileElem.id !== undefined && (
            <DisplayImagePreview/>
          )}
        </div>
      </SearchModalContext.Provider>
    </ContextForFileChangable.Provider>
  );
}
