export const processMap = {
  process: {
    id: {
      storm: {
        link: (id: string) => `/process/${id}/storm`,
      },
      draft: {
        link: (id: string) => `/process/${id}/draft`,
      },
      flow: {
        link: (id: string) => `/process/${id}/flow`,
      },
      sea: {
        link: (id: string) => `/process/${id}/sea`,
      },
      link: (id: string) => `/process/${id}`,
    },
    link: "/process"
  },
};
