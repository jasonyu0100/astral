import { createStore, createHook } from 'react-sweet-state';
import { SpaceObj } from '@/tables/space/main';
import Cookies from 'js-cookie';

const getSpaceCookie = () => {
  const cookie = Cookies.get('space')
  if (cookie === "undefined") return {} as SpaceObj
  else {
    return JSON.parse(cookie || '{}') as SpaceObj
  }
}

const Store = createStore({
  initialState: {
    space: getSpaceCookie(),
  },
  actions: {
    setSpace:
      (space: SpaceObj) =>
      ({ setState, getState }) => {
        Cookies.set('space', JSON.stringify(space));
        // Mutate state synchronously
        setState({
          space: {
            ...getState().space,
            ...space,
          },
        });
      },
  },
  name: 'space',
});

export const useGlobalSpace = createHook(Store);
