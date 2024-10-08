import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { HorizonsPointHemisphere } from './hemisphere/main';
import { HorizonsPointQuadrant } from './quadrant/main';

export function HorizonsPointMainCore() {
  return (
    <div className='absolute h-full w-full divide-y-[1px] divide-slate-300 divide-opacity-30'>
      <HorizonsPointHemisphere>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: A</p>
          <div className='flex h-full w-full items-center space-x-[1rem] overflow-auto'>
            <div className='aspect-square bg-yellow-500 p-[1rem]'>
              <p className='font-bold'>There's a demand</p>
            </div>
            <div className='aspect-square bg-yellow-500 p-[1rem]'>
              <p className='font-bold'>There's a demand</p>
            </div>
            <div className='aspect-square bg-yellow-500 p-[1rem]'>
              <p className='font-bold'>There's a demand</p>
            </div>
          </div>
          <div className='mt-auto flex flex-row space-x-[1rem]'>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </div>
        </HorizonsPointQuadrant>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: P1</p>
          <div className='mt-auto flex flex-row'>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </div>
        </HorizonsPointQuadrant>
      </HorizonsPointHemisphere>
      <HorizonsPointHemisphere>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: P2</p>
          <div className='mt-auto flex flex-row'>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </div>
        </HorizonsPointQuadrant>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: B</p>
          <div className='mt-auto flex flex-row'>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </div>
        </HorizonsPointQuadrant>
      </HorizonsPointHemisphere>
    </div>
  );
}
