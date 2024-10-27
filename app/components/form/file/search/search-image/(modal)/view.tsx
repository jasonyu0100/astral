import { useControllerForUnsplash } from '@/api/controller/unsplash/main';
import { FormBody } from '@/components/form/body/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormContainer } from '@/components/form/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { SearchBar } from '@/components/search-bar/main';
import { ContextForFileChangable } from '@/logic/contexts/fileChangable/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ImageInputProps } from '@/props/main';
import { FileElement } from '@/server/model/elements/file/main';
import { useContext, useEffect, useState } from 'react';

export default function SearchModalView() {
  const fileChangable = useContext(ContextForFileChangable);
  const openableController = useContext(ContextForOpenable);
  const [images, changeImages] = useState<FileElement[]>([]);
  const [query, changeQuery] = useState('');
  const [selected, changeSelected] = useState({} as FileElement);
  const { searchImage } = useControllerForUnsplash();

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
          <br />
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
          </FormBody>
          <FormFooter>
            <button
              className='h-[100px] w-full bg-black text-xl font-bold text-slate-300'
              onClick={() => {
                fileChangable.updateFileElem(selected);
                openableController.close();
              }}
            >
              SELECT
            </button>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}

interface SearchImageProps extends ImageInputProps {
  image: FileElement;
  active: boolean;
}

function SearchImage({ image, active, ...props }: SearchImageProps) {
  return (
    <div
      className={`cursor-pointer p-[5px] ${active ? 'bg-purple-500' : 'bg-white'}`}
      style={{ width: '33.33%' }}
    >
      <img
        src={image?.src}
        alt={image.title}
        className={'aspect-square  w-full bg-black object-cover'}
        {...props}
      />
    </div>
  );
}
