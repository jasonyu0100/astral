import create from 'zustand';
import { devtools } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { SpaceObj } from '@/tables/space/main';

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
    setSpace: (space: any) => {
      // Update local storage
      Cookies.set('space', JSON.stringify(space), {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      // Mutate state synchronously
      set((state: { space: any }) => ({
        space: {
          ...state.space,
          ...space,
        },
      }));
    },
  })),
);

export const useGlobalSpace = useSpaceStore;
