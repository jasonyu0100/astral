import { SearchBar } from '@/(cosmos)/(voyager)/spaces/spaces-epic/modal/create-space/main';
import { FormBody } from '../../body/main';
import { FormContainer } from '../../main';
import { Modal } from '../../../modal/main';
import { useUnsplash } from '@/(cosmos)/handler/unsplash/main';
import { useEffect, useState } from 'react';
import { FileObj } from '@/tables/file/main';
import clsx from 'clsx';
import { ImageInputProps } from '../../../types/main';

export default function SearchModal({
  isOpen,
  onClose,
  onChange
}: {
  isOpen: boolean;
  onClose: () => void;
  onChange: (file: FileObj) => void;
}) {
  const [images, changeImages] = useState([]);
  const [query, changeQuery] = useState('');
  const [selected, changeSelected] = useState({} as FileObj);
  const { searchImage } = useUnsplash();

  useEffect(() => {
    searchImage("stars").then((res) => {
      changeImages(res);
    });
  }, []);


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FormContainer>
        <SearchBar
          value={query}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchImage(query).then((res) => {
                changeImages(res);
              });
            }
          }}
          onChange={(e) => {
            changeQuery(e.target.value)
          }}
        />
        <FormBody>
          <div
            className='flex flex-row flex-wrap overflow-auto'
            style={{ height: '100%' }}
          >
            {images.map((image) => (
              <SearchImage
                active={selected.id == image.id}
                image={image}
                onClick={() => {
                  changeSelected(image)
                }}
              />
            ))}
          </div>
          <button className='w-full h-[100px] bg-black text-white text-xl font-bold'
            onClick={() => {
              console.log(selected)
              onChange(selected)
              onClose();
            }}
          >
            SELECT
          </button>
        </FormBody>
      </FormContainer>
    </Modal>
  );
}

interface SearchImageProps extends ImageInputProps {
  image: FileObj;
  active: boolean;
}

function SearchImage({ image, active, ...props }: SearchImageProps) {
  return (
    <div className={`p-[3px] ${active ? "bg-blue-500" : "bg-white"}`} style={{width: '33.33%'}}>

    <img
      src={image?.src}
      alt={image.name}
      className={clsx(
        `aspect-square  shadow-slate-300/30 w-full`,
      )}
      {...props}
    />
    </div>
  );
}
