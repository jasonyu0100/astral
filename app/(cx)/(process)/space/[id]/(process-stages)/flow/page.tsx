'use client';
import { createContext } from 'react';
import { FlowView } from './view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(logic)/internal/handler/chapters/main';
import {
  MomentsHandlerContext,
  useMomentsHandler,
} from '@/(logic)/internal/handler/moments/main';
import insideVerses from '@/(logic)/utils/isAuth';
import {
  FlowModalContext,
  useFlowModal,
} from '../../../../../../(modals)/(process)/flow-modal/main';
import { FlowModalView } from '@/(modals)/(process)/flow-modal/view';

interface FlowContextObj {}

export const FlowContext = createContext<FlowContextObj>({} as FlowContextObj);

function Page({ params }: { params: { id: string } }) {
  const chaptersHandler = useChaptersHandler(params.id);
  const momentsHandler = useMomentsHandler(
    chaptersHandler.chapterId,
    params.id,
  );

  const context: FlowContextObj = {};

  const modalContext = useFlowModal();

  return (
    <FlowContext.Provider value={context}>
      <ChaptersHandlerContext.Provider value={chaptersHandler}>
        <MomentsHandlerContext.Provider value={momentsHandler}>
          <FlowModalContext.Provider value={modalContext}>
            <FlowModalView />
            <FlowView />
          </FlowModalContext.Provider>
        </MomentsHandlerContext.Provider>
      </ChaptersHandlerContext.Provider>
    </FlowContext.Provider>
  );
}

export default insideVerses(Page);
