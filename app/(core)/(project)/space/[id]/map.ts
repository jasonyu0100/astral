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
      verses: {
        link: (id: string) => `${baseUrl}/${id}/verses`,
      },
      progress: {
        link: (id: string) => `${baseUrl}/${id}/progress`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
