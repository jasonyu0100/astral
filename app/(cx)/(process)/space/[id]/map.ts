export const spaceMap = {
  space: {
    id: {
      storm: {
        link: (id: string) => `/space/${id}/storm`,
      },
      draft: {
        link: (id: string) => `/space/${id}/draft`,
      },
      flow: {
        link: (id: string) => `/space/${id}/flow`,
      },
      share: {
        link: (id: string) => `/space/${id}/share`,
      },
      link: (id: string) => `/space/${id}`,
    },
    link: '/space',
  },
};
