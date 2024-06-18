import { ContextForFileChangable } from '@/(logic)/contexts/fileChangable/main';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { createContext } from 'react';
import { DisplayImagePreview } from './display-image-preview/main';
import { SearchImageLabel } from './label/main';
import { SearchButton } from './search-button/main';

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
  return (
    <ContextForFileChangable.Provider
      value={{ fileElem, updateFileElem: onChange }}
    >
      <div className='flex flex-col bg-white'>
        <SearchImageLabel>{label}</SearchImageLabel>
        {fileElem.id === undefined && <SearchButton />}
        {fileElem.id !== undefined && <DisplayImagePreview />}
      </div>
    </ContextForFileChangable.Provider>
  );
}
