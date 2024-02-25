import { FormBody } from '../../body/main';
import { FormContainer } from '../../main';
import { Modal } from '../../../modal/main';
import { useUnsplash } from '@/(logic)/internal/handler/external/unsplash/main';
import { useEffect, useState } from 'react';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ImageInputProps } from '../../../../(types)/main';
import { SearchBar } from '@/(components)/search-bar/main';
import { cn } from '@/(logic)/utils/cn';

export default function SearchModal({
  isOpen,
  onClose,
  onChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  onChange: (file: FileObj) => void;
}) {
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
    <Modal isOpen={isOpen} onClose={onClose}>
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
                active={selected.id == image.id}
                image={image}
                onClick={() => {
                  changeSelected(image);
                }}
              />
            ))}
          </div>
          <button
            className='h-[100px] w-full bg-black text-xl font-bold text-white'
            onClick={() => {
              onChange(selected);
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
