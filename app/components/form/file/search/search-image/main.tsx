import { ContextForFileChangable } from '@/logic/contexts/fileChangable/main';
import { FileElem } from '@/server/model/elements/file/main';
import { createContext } from 'react';
import { SearchImageLabel } from './label/main';
import { SearchImagePreview } from './preview/main';
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
      <div className='flex flex-col'>
        <SearchImageLabel>{label}</SearchImageLabel>
        {fileElem?.id === undefined ? <SearchButton /> : <SearchImagePreview />}
      </div>
    </ContextForFileChangable.Provider>
  );
}
