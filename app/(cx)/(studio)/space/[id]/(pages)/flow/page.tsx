'use client';
import { createContext } from 'react';
import { FlowView } from './(flow-epic)/view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(lgx)/internal/handler/chapters/main';
import {
  MomentsHandlerContext,
  useMomentsHandler,
} from '@/(lgx)/internal/handler/moments/main';
import insideVerse from '@/(lgx)/utils/isAuth';
import {
  FlowModalContext,
  useFlowModal,
} from '../../../../(modals)/flow-modal/main';
import { FlowModalView } from '@/(cx)/(studio)/(modals)/flow-modal/view';

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

export default insideVerse(Page);
