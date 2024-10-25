import { UserObj } from '@/server/model/user/main';
import Cookies from 'js-cookie';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

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
    login: (user: UserObj) => {
      // Update local storage
      Cookies.set('user', JSON.stringify(user), {
        sameSite: 'strict',
        expires: 42,
      });
      // Mutate state synchronously
      set((state: { user: UserObj }) => ({
        user: {
          ...state.user,
          ...user,
        },
      }));
    },
    register: (user: UserObj) => {
      // Update local storage
      Cookies.set('user', JSON.stringify(user), {
        sameSite: 'strict',
        expires: 42,
      });
      // Mutate state synchronously
      set((state: { user: UserObj }) => ({
        user: {
          ...state.user,
          ...user,
        },
      }));
    },
    update: (user: UserObj) => {
      // Update local storage
      Cookies.set('user', JSON.stringify(user), {
        sameSite: 'strict',
        expires: 42,
      });
      set((state: { user: UserObj }) => ({
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

// TODO ZUSTAND HAS HYRDATION ISSUES

export const useGlobalUser = useUserStore;
