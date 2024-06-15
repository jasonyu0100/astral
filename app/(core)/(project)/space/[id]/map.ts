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
      sea: {
        link: (id: string) => `/space/${id}/sea`,
      },
      link: (id: string) => `/space/${id}`,
    },
    link: '/space',
  },
};
