const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      work: {
        link: (id: string) => `${baseUrl}/${id}/work`,
      },
      channel: {
        link: (id: string) => `${baseUrl}/${id}/channel`,
      },
      space: {
        link: (id: string) => `${baseUrl}/${id}/space`,
      },
      live: {
        link: (id: string) => `${baseUrl}/${id}/live`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
