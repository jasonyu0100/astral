import { useControllerForUnsplash } from '@/api/controller/unsplash/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { SearchBar } from '@/components/search-bar/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForFileChangable } from '@/logic/contexts/fileChangable/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ImageInputProps } from '@/props/main';
import { FileElement } from '@/server/model/elements/file/main';
import { ctwn } from '@/utils/cn';
import { useContext, useEffect, useState } from 'react';

export default function SearchImageModal() {
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
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
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
              <div
                className='grid w-full grid-cols-4 overflow-auto'
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
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                onClick={() => {
                  fileChangable.updateFileElem(selected);
                  openableController.close();
                }}
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}

interface SearchImageProps extends ImageInputProps {
  image: FileElement;
  active: boolean;
}

function SearchImage({ image, active, ...props }: SearchImageProps) {
  return (
    <img
      src={image?.src}
      alt={image.title}
      className={ctwn(
        'aspect-square  w-full cursor-pointer bg-black object-cover',
        {
          'border-[1px] border-purple-500': active,
        },
      )}
      {...props}
    />
  );
}
