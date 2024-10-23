const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      conversation: {
        link: (id: string) => `${baseUrl}/${id}/conversation`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      board: {
        link: (id: string) => `${baseUrl}/${id}/board`,
      },
      flight: {
        link: (id: string) => `${baseUrl}/${id}/flight`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
