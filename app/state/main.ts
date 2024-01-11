import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: {
    user: {
      googleId: "",
      accessToken: "",
    },
  },
  actions: {
    login:
      (googleId: string, accessToken: string) =>
      ({ setState, getState }) => {
        // Update local storage
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...getState().user,
            googleId: googleId,
            accessToken: accessToken,
          })
        );

        // Mutate state synchronously
        setState({
          user: {
            ...getState().user,
            googleId: googleId,
            accessToken: accessToken,
          },
        });
      },
    register:
      (googleId: string, accessToken: string) =>
      ({ setState, getState }) => {
        // Update local storage
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...getState().user,
            googleId: googleId,
            accessToken: accessToken,
          })
        );

        // Mutate state synchronously
        setState({
          user: {
            ...getState().user,
            googleId: googleId,
            accessToken: accessToken,
          },
        });
      },
    logout:
      () =>
      ({ setState }) => {
        // Clear local storage
        localStorage.removeItem("user");

        // Mutate state synchronously to clear user data
        setState({
          user: {
            googleId: "",
            accessToken: "",
          },
        });
      },
  },
  name: "user",
});

export const useUser = createHook(Store);
