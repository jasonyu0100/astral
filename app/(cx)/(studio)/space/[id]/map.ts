export const spaceMap = {
  space: {
    id: {
      storm: {
        link: (id: string) => `/space/${id}/storm`,
      },
      map: {
        link: (id: string) => `/space/${id}/map`,
      },
      draft: {
        link: (id: string) => `/space/${id}/draft`,
      },
      sea: {
        link: (id: string) => `/space/${id}/sea`,
      },
      link: (id: string) => `/space/${id}`,
    },
    link: '/space',
  },
};
