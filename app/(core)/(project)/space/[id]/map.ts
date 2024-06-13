export const spaceMap = {
  space: {
    id: {
      storm: {
        link: (id: string) => `/space/${id}/storm`,
      },
      board: {
        link: (id: string) => `/space/${id}/board`,
      },
      verse: {
        link: (id: string) => `/space/${id}/verse`,
      },
      sea: {
        link: (id: string) => `/space/${id}/sea`,
      },
      link: (id: string) => `/space/${id}`,
    },
    link: '/space',
  },
};
