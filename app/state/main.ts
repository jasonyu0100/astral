import { createStore, createHook } from "react-sweet-state";
import Cookies from 'js-cookie';

const Store = createStore({
  initialState: {
    user: {
      googleId: "",
    },
  },
  actions: {
    login:
      (googleId: string) =>
      ({ setState, getState }) => {
        // Update local storage
        Cookies.set('user', JSON.stringify({ googleId: googleId }));
        // Mutate state synchronously
        setState({
          user: {
            ...getState().user,
            googleId: googleId,
          },
        });
      },
    register:
      (googleId: string) =>
      ({ setState, getState }) => {
        // Update local storage
        Cookies.set('user', JSON.stringify({ googleId: googleId }));

        // Mutate state synchronously
        setState({
          user: {
            ...getState().user,
            googleId: googleId,
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
          user: {
            googleId: "",
          },
        });
      },
  },
  name: "user",
});

export const useUser = createHook(Store);
