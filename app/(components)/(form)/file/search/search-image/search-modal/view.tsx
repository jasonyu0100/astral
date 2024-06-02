import { useUnsplash } from '@/(types)/handler/external/unsplash/main';
import { useContext, useEffect, useState } from 'react';
import { FileObj } from '@/(types)/model/resource/file/main';
import { SearchBar } from '@/(components)/(explorer)/search-bar/main';
import { cn } from '@/(utils)/cn';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormContainer } from '@/(components)/(form)/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ImageInputProps } from '@/(types)/props/main';
import { SearchModalContext } from './main';
import { FileOnChangeContext } from '@/(logic)/internal/contexts/fileOnChange/main';

export default function SearchModalView() {
  const { file, onChange } = useContext(FileOnChangeContext);
  const modalContext = useContext(SearchModalContext);
  const [images, changeImages] = useState<FileObj[]>([]);
  const [query, changeQuery] = useState('');
  const [selected, changeSelected] = useState({} as FileObj);
  const { searchImage } = useUnsplash();

  useEffect(() => {
    searchImage('stars').then((res) => {
      changeImages(res);
    });
  }, []);

  return (
    <PolaroidModal
      isOpen={modalContext.searchModal.opened}
      onClose={modalContext.searchModal.close}
    >
      <FormContainer>
        <SearchBar
          value={query}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchImage(query).then((res) => {
                changeImages(res);
              });
            }
          }}
          onChange={(e) => {
            changeQuery(e.target.value);
          }}
        />
        <FormBody>
          <div
            className='flex flex-row flex-wrap overflow-auto'
            style={{ height: '100%' }}
          >
            {images?.map((image) => (
              <SearchImage
                key={image.id}
                active={selected.id == image.id}
                image={image}
                onClick={() => {
                  changeSelected(image);
                }}
              />
            ))}
          </div>
          <button
            className='h-[100px] w-full bg-black text-xl font-bold text-slate-300'
            onClick={() => {
              onChange(selected);
              modalContext.searchModal.close();
            }}
          >
            SELECT
          </button>
        </FormBody>
      </FormContainer>
    </PolaroidModal>
  );
}

interface SearchImageProps extends ImageInputProps {
  image: FileObj;
  active: boolean;
}

function SearchImage({ image, active, ...props }: SearchImageProps) {
  return (
    <div
      className={`p-[3px] ${active ? 'bg-blue-500' : 'bg-white'}`}
      style={{ width: '33.33%' }}
    >
      <img
        src={image?.src}
        alt={image.title}
        className={cn(`aspect-square  w-full shadow-slate-300/30`)}
        {...props}
      />
    </div>
  );
}
