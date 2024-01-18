import { createStore, createHook } from 'react-sweet-state';
import Cookies from 'js-cookie';
import { UserObj } from '@/tables/user/main';

const Store = createStore({
  initialState: {
    user: JSON.parse(Cookies.get('user') || '{}'),
  },
  actions: {
    login:
      (user: UserObj) =>
      ({ setState, getState }) => {
        // Update local storage
        Cookies.set('user', JSON.stringify(user));
        // Mutate state synchronously
        setState({
          user: {
            ...getState().user,
            ...user,
          },
        });
      },
    register:
      (user: UserObj) =>
      ({ setState, getState }) => {
        // Update local storage
        Cookies.set('user', JSON.stringify(user));
        // Mutate state synchronously
        setState({
          user: {
            ...getState().user,
            ...user,
          },
        });
      },
    logout:
      () =>
      ({ setState }) => {
        // Clear local storage
        Cookies.remove('user');

        // Mutate state synchronously to clear user data
        setState({
          user: {} as UserObj,
        });
      },
  },
  name: 'user',
});

export const useUser = createHook(Store);
