import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { CreativeNetworkProfile } from './grid/profile/main';

export function CreativeNetworkResults() {
  return (
    <div className='h-full w-full overflow-auto p-[1rem]'>
      <div className={`flex w-full flex-row flex-wrap gap-[2rem] p-[2rem]`}>
        {exampleFileElems.map((result, index) => (
          <CreativeNetworkProfile
            result={result}
            index={index}
            key={result.id}
          />
        ))}
        {exampleFileElems.map((result, index) => (
          <CreativeNetworkProfile
            result={result}
            index={index}
            key={result.id}
          />
        ))}
        {exampleFileElems.map((result, index) => (
          <CreativeNetworkProfile
            result={result}
            index={index}
            key={result.id}
          />
        ))}
      </div>
    </div>
  );
}
