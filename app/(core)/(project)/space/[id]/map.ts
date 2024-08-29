const baseUrl = `/space`;

export const spaceMap = {
  space: {
    id: {
      idea: {
        link: (id: string) => `${baseUrl}/${id}/idea`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      progress: {
        link: (id: string) => `${baseUrl}/${id}/progress`,
      },
      spotlight: {
        link: (id: string) => `${baseUrl}/${id}/spotlight`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
