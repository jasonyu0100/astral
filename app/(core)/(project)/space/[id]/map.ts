const baseUrl = `/space`;

export const spaceMap = {
  space: {
    id: {
      storm: {
        link: (id: string) => `${baseUrl}/${id}/storm`,
      },
      draft: {
        link: (id: string) => `${baseUrl}/${id}/draft`,
      },
      flow: {
        link: (id: string) => `${baseUrl}/${id}/flow`,
      },
      sea: {
        link: (id: string) => `${baseUrl}/${id}/sea`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
