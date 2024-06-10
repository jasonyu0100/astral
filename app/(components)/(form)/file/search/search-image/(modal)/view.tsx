import { useUnsplashController } from '@/(api)/(controller)/unsplash/main';
import { useContext, useEffect, useState } from 'react';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { SearchBar } from '@/(components)/(media)/search-bar/main';
import { cn } from '@/(utils)/cn';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormContainer } from '@/(components)/(form)/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ImageInputProps } from '@/(types)/props/main';
import { ContextForFileChangable } from '@/(logic)/contexts/fileChangable/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export default function SearchModalView() {
  const fileChangable = useContext(ContextForFileChangable);
  const openableController = useContext(ContextForOpenable);
  const [images, changeImages] = useState<FileElem[]>([]);
  const [query, changeQuery] = useState('');
  const [selected, changeSelected] = useState({} as FileElem);
  const { searchImage } = useUnsplashController();

  useEffect(() => {
    searchImage('stars').then((res) => {
      changeImages(res);
    });
  }, []);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
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
                fileChangable.updateFileElem(selected);
                openableController.close();
              }}
            >
              SELECT
            </button>
          </FormBody>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}

interface SearchImageProps extends ImageInputProps {
  image: FileElem;
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
