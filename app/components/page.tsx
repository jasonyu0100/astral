'use client';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { exampleHorizon } from '@/server/model/horizon/main';
import { exampleSpace } from '@/server/model/space/main';
import { exampleUser } from '@/server/model/user/main';
import { HorizonsThumbnailElement } from './cover/horizon/main';
import { SpaceThumbnailElement } from './cover/space/main';
import { UserDisplayPictureElement } from './cover/user/main';
import { FormTextArea } from './form/area/main';
import { FormBody } from './form/body/main';
import { FormButton } from './form/button/main';
import { FormDescription } from './form/description/main';
import { FormSearchImage } from './form/file/search/search-image/main';
import { FormUploadFile } from './form/file/upload/upload-file/main';
import { ImagePreview } from './form/image-preview/main';
import { FormInput } from './form/input/main';
import { FormSelect } from './form/select/main';
import { FormTitle } from './form/title/main';
import { BarDividerIndicator } from './indicator/bar/main';
import { HorizontalDivider } from './indicator/divider/horizontal/main';
import { VerticalDivider } from './indicator/divider/vertical/main';
import { HorizontalSeperator } from './indicator/seperator/main';
import { FeltModal } from './modal/felt/main';
import { PolaroidModal } from './modal/polaroid/main';
import { ColorfulText } from './text/colorful/main';
import { TimerComponent } from './timer/main';

export default function Page() {
  const polaroidModalController = useControllerForOpenable();
  const feltModalController = useControllerForOpenable();

  return (
    <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
      <p className='text-3xl font-bold text-white'>Timer</p>
      <TimerComponent hours={1} />
      <p className='text-3xl font-bold text-white'>Element</p>
      <HorizonsThumbnailElement fileElem={exampleHorizon.thumbnail} />
      <UserDisplayPictureElement fileElem={exampleUser.dp} />
      <SpaceThumbnailElement fileElem={exampleSpace.thumbnail} />
      <p className='text-3xl font-bold text-white'>Text</p>
      <ColorfulText>Hello world</ColorfulText>
      <p className='font-md text-white'>Hello World</p>
      <p className='font-permanentMarker text-white'>Hello World</p>
      <p className='font-bold text-white'>Hello World</p>
      <p className='font-light text-white'>Hello World</p>
      <p className='font-ectraBold text-white'>Hello World</p>
      <p className='text-3xl font-bold text-white'>Modals</p>
      <ContextForOpenable.Provider value={feltModalController}>
        <div className='flex flex-col'>
          <button
            className='w-[200px] rounded-md bg-blue-500 p-[1rem] text-white'
            onClick={() => feltModalController.open()}
          >
            Open Felt Modal
          </button>
          <FeltModal></FeltModal>
        </div>
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={polaroidModalController}>
        <div className='flex flex-col'>
          <button
            className='w-[200px] rounded-md bg-blue-500 p-[1rem] text-white'
            onClick={() => polaroidModalController.open()}
          >
            Open Polaroid Modal
          </button>
          <PolaroidModal></PolaroidModal>
        </div>
      </ContextForOpenable.Provider>
      <p className='text-3xl font-bold text-white'>Dividers</p>
      <HorizontalDivider />
      <VerticalDivider />
      <BarDividerIndicator />
      <HorizontalSeperator />
      <p className='text-3xl font-bold text-white'>Form</p>
      <FormBody>
        <div className='w-[800px] bg-white p-[2rem]'>
          <FormTitle>title</FormTitle>
          <FormTextArea title='test' />
          <FormButton>Button</FormButton>
          <FormDescription>Form Description</FormDescription>
          <FormSearchImage
            fileElem={exampleFileElement}
            label='search image'
            onChange={() => {}}
          />
          <FormUploadFile
            defaultFileElem={exampleFileElement}
            onChange={() => {}}
            label={'test'}
          />
          <ImagePreview fileElem={exampleFileElement} />
          <FormInput title='test' />
          <FormSelect title='test'>
            <option>test</option>
            <option>test</option>
            <option>test</option>
          </FormSelect>
        </div>
      </FormBody>
    </div>
  );
}
