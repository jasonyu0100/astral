import { SpaceObj } from '@/(server)/(model)/space/main';
import Cookies from 'js-cookie';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SpaceStore {
  space: SpaceObj;
  setSpace: (space: SpaceObj) => void;
}

const getSpaceCookie = () => {
  const cookie = Cookies.get('space');
  if (cookie === 'undefined') return {} as SpaceObj;
  else {
    return JSON.parse(cookie || '{}') as SpaceObj;
  }
};

const useSpaceStore = create<SpaceStore>()(
  devtools((set) => ({
    space: getSpaceCookie(),
    setSpace: (space: SpaceObj) => {
      // Update local storage
      Cookies.set('space', JSON.stringify(space), {
        sameSite: 'strict',
        expires: 7,
      });
      // Mutate state synchronously
      set((state: { space: SpaceObj }) => ({
        space: {
          ...state.space,
          ...space,
        },
      }));
    },
  })),
);

export const useGlobalSpace = useSpaceStore;
