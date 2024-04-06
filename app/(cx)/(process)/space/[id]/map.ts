export const spaceMap = {
  space: {
    id: {
      storm: {
        link: (id: string) => `/space/${id}/storm`,
      },
      map: {
        link: (id: string) => `/space/${id}/map`,
      },
      flow: {
        link: (id: string) => `/space/${id}/flow`,
      },
      sea: {
        link: (id: string) => `/space/${id}/sea`,
      },
      link: (id: string) => `/space/${id}`,
    },
    link: '/space',
  },
};
