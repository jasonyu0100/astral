import { exampleFileElements } from '@/architecture/model/elements/file/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { HorizonQuadrantBacking } from './backing/main';
import { HorizonsPointHemisphere } from './hemisphere/main';
import { HorizonsPointQuadrant } from './quadrant/main';

export function HorizonsPointMainCore() {
  return (
    <div className='absolute h-full w-full divide-y-[1px] divide-slate-300 divide-opacity-30'>
      <HorizonsPointHemisphere>
        <HorizonsPointQuadrant>
          <p className='text-sm font-bold text-slate-400'>Point: A</p>
          <p className='text-sm font-bold text-slate-400'>
            What should we do about this?
          </p>
          <HorizonQuadrantBacking>
            {exampleFileElements.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
        </HorizonsPointQuadrant>
        <HorizonsPointQuadrant>
          <p className='text-sm font-bold text-slate-400'>Point: P1</p>
          <p className='text-sm font-bold text-slate-400'>
            What should we do about this?
          </p>
          <HorizonQuadrantBacking>
            {exampleFileElements.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
        </HorizonsPointQuadrant>
      </HorizonsPointHemisphere>
      <HorizonsPointHemisphere>
        <HorizonsPointQuadrant>
          <p className='text-sm font-bold text-slate-400'>Point: P2</p>
          <p className='text-sm font-bold text-slate-400'>
            What should we do about this?
          </p>
          <HorizonQuadrantBacking>
            {exampleFileElements.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
        </HorizonsPointQuadrant>
        <HorizonsPointQuadrant>
          <p className='text-sm font-bold text-slate-400'>Point: B</p>
          <p className='text-sm font-bold text-slate-400'>
            What should we do about this?
          </p>
          <HorizonQuadrantBacking>
            {exampleFileElements.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
        </HorizonsPointQuadrant>
      </HorizonsPointHemisphere>
    </div>
  );
}
