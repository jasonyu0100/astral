'use client';
import { elementsMap } from '@/(server)/map/elements';
import { galleryMap } from '@/(server)/map/gallery';
import { horizonMap } from '@/(server)/map/horizon';
import { spaceMap } from '@/(server)/map/space';
import { userMap } from '@/(server)/map/user';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useState } from 'react';

function Section({ gqlMap }: { gqlMap: string }) {
  return (
    <GlassWindowFrame
      className='aspect-[9/12] w-[20rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='h-full w-full p-[2rem]'>
        <div
          className='flex h-full w-full flex-col overflow-auto font-bold text-white'
          style={{ whiteSpace: 'pre-line' }}
        >
          {gqlMap}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}

export default function Page() {
  const models: { [key: string]: any } = {
    archive: galleryMap,
    elements: elementsMap,
    horizon: horizonMap,
    space: spaceMap,
    user: userMap,
  };
  const [currentId, setCurrentId] = useState<any>('user');
  const [modelObj, setModelObj] = useState<any>(models.user);

  return (
    <div className='h-full w-full flex-col p-[3rem]'>
      <div className='flex flex-col space-y-[1rem]'>
        <div className='flex flex-row items-center space-x-[1rem] p-[1rem]'>
          <p className='font-bold text-white'>Model:</p>
          <select
            className='bg-black font-bold text-white'
            onChange={(e) => {
              const key = e.target.value.toString();
              setModelObj(models[key]);
              setCurrentId(e.target.value);
            }}
          >
            {Object.keys(models).map((model, index) => (
              <option value={model} key={model} className='bg-black text-white'>
                {model}
              </option>
            ))}
          </select>
        </div>
        <HorizontalDivider />
        <div className='flex flex-col p-[1rem]'>
          <p className='font-bold text-white'>Table: {currentId}</p>
          <div className='flex flex-row space-x-[1rem]'>
            {modelObj.model.children.map((cm: any) => (
              <button
                value={cm}
                key={cm}
                className='rounded bg-black p-[1rem] text-white'
                onClick={() => {
                  setCurrentId(cm);
                  setModelObj(modelObj[cm]);
                }}
              >
                {cm}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-row space-x-[3rem]'>
        <Section gqlMap={modelObj.model.gql} />
        <div className='flex h-[5rem] w-[10rem] items-center justify-center bg-slate-300 bg-opacity-30'>
          <a className='text-3xl text-white' href={`/dev/db/${currentId}`}>
            {currentId} dataview
          </a>
        </div>
      </div>
    </div>
  );
}
