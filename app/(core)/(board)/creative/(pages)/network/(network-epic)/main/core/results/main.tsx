import { CreativeProfile } from './grid/profile/main';
import { CreativeRow } from './grid/main';
import { exampleFiles } from '@/(types)/model/resource/file/main';

export function NetworkResults() {
  return (
    <div className='h-full w-full p-[1rem] overflow-auto'>
      <div className={`flex w-full flex-row flex-wrap gap-[2rem] p-[2rem]`}>
        {exampleFiles.map((result, index) => (
          <CreativeProfile result={result} index={index} key={result.id}/>
        ))}
        {exampleFiles.map((result, index) => (
          <CreativeProfile result={result} index={index} key={result.id}/>
        ))}
        {exampleFiles.map((result, index) => (
          <CreativeProfile result={result} index={index} key={result.id}/>
        ))}
      </div>
    </div>
  );
}
