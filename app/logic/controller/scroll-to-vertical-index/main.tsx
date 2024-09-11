import { createContext, RefObject } from 'react';

interface Controller {
  scrollToVerticalIndex: (index: number) => void;
}

export const ContextForScrollToVerticalIndex = createContext({} as Controller);

export function useControllerForScrollToVerticalIndex(
  ref: RefObject<HTMLDivElement>,
): Controller {
  const scrollToVerticalIndex = (index: number) => {
    if (ref.current) {
      console.log(ref.current);

      const childNodes = ref.current.childNodes;
      let summedHeight = 0;

      // Loop through each child node up to the specified index
      childNodes.forEach((childNode, idx) => {
        if (idx < index && childNode instanceof HTMLElement) {
          // Get the height of the child node and add it to the summedHeight
          const childHeight = childNode.offsetHeight; // or use clientHeight depending on your need
          summedHeight += childHeight;
          console.log(`Child node ${idx} height: ${childHeight}px`);
        }
      });

      // Optionally log the summed height and the parent container height
      const parentHeight = ref.current.clientHeight;

      // Set scrollTop to the summedHeight of nodes up to the specified index
      ref.current.scrollTop = summedHeight - parentHeight / 8;

      console.log(`Summed height up to index ${index}: ${summedHeight}px`);
      console.log(`Parent node height: ${parentHeight}px`);
    }
  };

  return {
    scrollToVerticalIndex: scrollToVerticalIndex,
  };
}
