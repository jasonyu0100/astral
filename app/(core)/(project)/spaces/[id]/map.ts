const baseUrl = `/spaces`;

export const spaceMap = {
  space: {
    id: {
      space: {
        link: (id: string) => `${baseUrl}/${id}/space`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      journey: {
        link: (id: string) => `${baseUrl}/${id}/journey`,
      },
      flight: {
        link: (id: string) => `${baseUrl}/${id}/flight`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
