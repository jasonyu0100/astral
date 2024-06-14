import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { UserObj } from '@/(server)/(model)/user/main';

interface UserStore {
  user: UserObj;
  login: (user: UserObj) => void;
  register: (user: UserObj) => void;
  update(user: UserObj): void;
  logout: () => void;
}

const getUserCookie = () => {
  const cookie = Cookies.get('user');
  if (cookie === 'undefined') return {} as UserObj;
  else {
    return JSON.parse(cookie || '{}') as UserObj;
  }
};

const useUserStore = create<UserStore>()(
  devtools((set) => ({
    user: getUserCookie(),
    login: (user: any) => {
      // Update local storage
      Cookies.set('user', JSON.stringify(user), {
        sameSite: 'strict',
        expires: 7,
      });
      // Mutate state synchronously
      set((state: { user: any }) => ({
        user: {
          ...state.user,
          ...user,
        },
      }));
    },
    register: (user: any) => {
      // Update local storage
      Cookies.set('user', JSON.stringify(user), {
        sameSite: 'strict',
        expires: 7,
      });
      // Mutate state synchronously
      set((state: { user: any }) => ({
        user: {
          ...state.user,
          ...user,
        },
      }));
    },
    update: (user: any) => {
      // Update local storage
      Cookies.set('user', JSON.stringify(user), {
        sameSite: 'strict',
        expires: 7,
      });
      set((state: { user: any }) => ({
        user: {
          ...state.user,
          ...user,
        },
      }));
    },
    logout: () => {
      // Clear local storage
      Cookies.remove('user');
      // Mutate state synchronously to clear user data
      set({
        user: {} as UserObj,
      });
    },
  })),
);

export const useGlobalUser = useUserStore;
