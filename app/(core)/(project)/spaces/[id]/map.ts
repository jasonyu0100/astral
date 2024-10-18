const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      space: {
        link: (id: string) => `${baseUrl}/${id}/space`,
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
