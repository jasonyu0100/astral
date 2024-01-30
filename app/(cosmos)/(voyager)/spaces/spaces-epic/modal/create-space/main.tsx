import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useEffect, useState } from 'react';
import { SpacesContext } from '../../../(stages)/now/page';
import { SpacesModalContext } from '../main';
import { useUnsplash } from '@/(cosmos)/handler/unsplash/main';


import { Layer } from '@/(common)/layer/main';
import { borderStyles, containerStyles } from '@/(common)/styles/data';
import { FormInputProps } from '@/(common)/types/main';

export function SearchBar({ ...props }: FormInputProps) {
  return (
    <Layer
      displayName={SearchBar.name}
      sizeStyle='w-full h-[4rem]'
      className={`${containerStyles['row-center']} px-[1rem] space-x-[1rem]`}
      borderStyle={borderStyles['border-b']}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <mask
          id='mask0_2446_4361'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' fill='#CBD5E1' />
        </mask>
        <g mask='url(#mask0_2446_4361)'>
          <path
            d='M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z'
            fill='#CBD5E1'
          />
        </g>
      </svg>
      <input
        className="  text-white text-2xl font-regular font-['Creato Display'] leading-7 h-[3rem] bg-transparent outline-none"
        placeholder='enter search...'
        {...props}
      />
    </Layer>
  );
}


export function CreateSpaceModal() {
  const { spacesHandler } = useContext(SpacesContext);
  const { createSpace: createSpaceModal } = useContext(SpacesModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [testOpen, changeTestOpen] = useState(false)
  const [images, changeImages] = useState([])
  const [query, changeQuery] = useState("")
  const { searchImage } = useUnsplash()


  useEffect(() => {
    searchImage('space').then((res) => {
      console.log(res)
      changeImages(res)
    })
  }, [])

  return (
    <Modal isOpen={createSpaceModal.opened} onClose={() => createSpaceModal.close()}>
      <Modal isOpen={testOpen} onClose={() => changeTestOpen(false)} stacked={true}>
        <FormContainer>
          <FormTitle>Search</FormTitle>
          <SearchBar />
          <button className="bg-slate-800 rounded-full w-[100px] h-[100px]"></button>
          <FormBody>
            <div className="flex flex-row overflow-auto flex-wrap" style={{height: '100%'}}>
              {images.map(image => <img src={image?.src} className="w-1/2 aspect-square"/>)}
            </div>
          </FormBody>
        </FormContainer>
      </Modal>
      <FormContainer>
        <button className="bg-red-500" onClick={() => changeTestOpen(true)}>Open</button>
        <FormTitle>Create Space</FormTitle>
        <FormBody>
          <FormDescription>Create your space here</FormDescription>
          <FormInput
            placeholder='Name'
            title='Name'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormTextArea
            title='Description'
            rows={5}
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
            style={{ resize: 'none' }}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              spacesHandler.queryCreateSpace(title, description);
              createSpaceModal.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
