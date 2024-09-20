import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext } from 'react';
import { GenerateTab } from './common/tabs/tab/main';
import { GenerateTabBlueShard } from './common/tabs/tab/shard/blue/main';
import { GenerateTabGreenShard } from './common/tabs/tab/shard/green/main';
import { GenerateTabOrangeShard } from './common/tabs/tab/shard/orange/main';
import { GenerateTabPurpleShard } from './common/tabs/tab/shard/purple/main';
import { GenerateTabText } from './common/tabs/tab/text/main';
import {
  ContextForGenerateSceneController,
  useGenerateSceneController,
} from './controller/main';
import { SpacesSpaceGenerateRowAdd } from './row/add/main';

export function SpacesSpaceSetConstellationModal() {
  const openableController = useContext(ContextForOpenable);
  const generateSceneController = useGenerateSceneController();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForGenerateSceneController.Provider
        value={generateSceneController}
      >
        <CustomisableModal>
          <div className='flex h-full w-full flex-col justify-center'>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className='flex w-full flex-row items-center justify-center space-x-[4rem]  p-[2rem]'
            >
              <div className='grid w-full grid-cols-5 gap-[2rem]'>
                {generateSceneController.state.stickies.map((sticky, index) => (
                  <div className='aspect-square bg-yellow-500 p-[1rem]'>
                    <textarea
                      className='h-full w-full resize-none bg-transparent font-bold outline-none'
                      value={sticky}
                      onChange={(e) =>
                        generateSceneController.actions.editSticky(
                          index,
                          e.target.value,
                        )
                      }
                    />
                  </div>
                ))}
              </div>
              <SpacesSpaceGenerateRowAdd />
            </div>
            <div className='flex flex-row p-[2rem]'>
              <div className='grid w-full grid-cols-4'>
                <GenerateTab>
                  <GenerateTabText active>Notes</GenerateTabText>
                  <GenerateTabBlueShard active />
                </GenerateTab>
                <GenerateTab>
                  <GenerateTabText active={false}>Videos</GenerateTabText>
                  <GenerateTabOrangeShard active={false} />
                </GenerateTab>
                <GenerateTab>
                  <GenerateTabText active={false}>Images</GenerateTabText>
                  <GenerateTabPurpleShard active={false} />
                </GenerateTab>
                <GenerateTab>
                  <GenerateTabText active={false}>Vault</GenerateTabText>
                  <GenerateTabGreenShard active={false} />
                </GenerateTab>
              </div>
            </div>
          </div>
          {/* <GlassWindowFrame
          className='aspect-video w-full overflow-auto p-[2rem]'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex h-full w-full flex-col space-y-[2rem] overflow-auto'>

            <HorizontalDivider />
            <div className='flex w-full flex-col space-y-[2rem]'>
              {searchResults.map((result) => (
                <GlassWindowFrame roundedFx={roundedFx.rounded}>
                  <GlassWindowContents>
                    <div className='flex flex-row items-center space-x-[3rem] font-bold text-slate-300'>
                      <img
                        src={result.pagemap.cse_image?.at(0).src}
                        className='aspect-video w-[300px] rounded-[2rem]'
                      />
                      <div>{result.title}</div>
                      <div>{result.snippet}</div>
                    </div>
                  </GlassWindowContents>
                </GlassWindowFrame>
              ))}
              {/* <div className='grid w-full grid-cols-3 gap-[1rem]'>
                  {stickies.map((sticky, index) => (
                    <div className='aspect-square bg-yellow-500 p-[1rem]'>
                      <textarea
                        className='h-full w-full resize-none bg-transparent font-bold outline-none'
                        value={sticky}
                        onChange={(e) => editSticky(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div> */}
          {/* <button onClick={createMap}>Next</button>
            </div>
          </GlassWindowContents>
        </GlassWindowFrame> */}
        </CustomisableModal>
      </ContextForGenerateSceneController.Provider>
    </ContextForOpenable.Provider>
  );
}
