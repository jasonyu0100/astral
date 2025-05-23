import { FileElement } from '@/architecture/model/elements/file/main';
import { ContextForFileChangable } from '@/logic/contexts/fileChangable/main';
import { createContext } from 'react';
import { SearchImageLabel } from './label/main';
import { SearchImagePreview } from './preview/main';
import { SearchButton } from './search-button/main';

export const SearchImageContext = createContext({});

export function AstralSearchImage({
  fileElem: fileElem,
  onChange,
  label,
}: {
  fileElem: FileElement;
  onChange: (fileElem: FileElement) => void;
  label?: string;
}) {
  return (
    <ContextForFileChangable.Provider
      value={{ fileElem, updateFileElem: onChange }}
    >
      <div className='flex min-w-[500px] flex-col'>
        <SearchImageLabel>{label}</SearchImageLabel>
        {fileElem?.id === undefined ? <SearchButton /> : <SearchImagePreview />}
      </div>
    </ContextForFileChangable.Provider>
  );
}
