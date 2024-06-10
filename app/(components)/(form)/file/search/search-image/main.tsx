import { FileElem } from '@/(server)/(model)/elements/file/main';
import React, { createContext } from 'react';
import SearchModalView from '@/(components)/(form)/file/search/search-image/(modal)/view';
import { ContextForFileChangable } from '@/(logic)/contexts/fileChangable/main';
import { SearchImageLabel } from './label/main';
import { SearchButton } from './search-button/main';
import { DisplayImagePreview } from './display-image-preview/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';

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
  const openableController = useControllerForOpenable();

  return (
    <ContextForFileChangable.Provider value={{ fileElem, onChange }}>
      <div className='flex flex-col bg-white'>
        <SearchImageLabel>{label}</SearchImageLabel>
        {fileElem.id === undefined && <SearchButton />}
        {fileElem.id !== undefined && <DisplayImagePreview />}
      </div>
    </ContextForFileChangable.Provider>
  );
}
