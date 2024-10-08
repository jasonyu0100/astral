import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { HorizonQuadrantBacking } from './backing/main';
import { HorizonQuadrantContent } from './content/main';
import { HorizonsPointHemisphere } from './hemisphere/main';
import { HorizonsPointQuadrant } from './quadrant/main';

export function HorizonsPointMainCore() {
  return (
    <div className='absolute h-full w-full divide-y-[1px] divide-slate-300 divide-opacity-30'>
      <HorizonsPointHemisphere>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: A</p>
          <HorizonQuadrantBacking>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
          <HorizonQuadrantContent />
        </HorizonsPointQuadrant>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: P1</p>
          <HorizonQuadrantBacking>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
          <HorizonQuadrantContent />
        </HorizonsPointQuadrant>
      </HorizonsPointHemisphere>
      <HorizonsPointHemisphere>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: P2</p>
          <HorizonQuadrantBacking>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
          <HorizonQuadrantContent />
        </HorizonsPointQuadrant>
        <HorizonsPointQuadrant>
          <p className='font-bold text-slate-300'>Point: B</p>
          <HorizonQuadrantBacking>
            {exampleFileElems.map((elem) => (
              <UserDisplayPictureElement fileElem={elem} />
            ))}
          </HorizonQuadrantBacking>
          <HorizonQuadrantContent />
        </HorizonsPointQuadrant>
      </HorizonsPointHemisphere>
    </div>
  );
}
