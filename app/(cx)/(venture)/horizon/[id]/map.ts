const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      forum: {
        link: (id: string) => `${baseUrl}/${id}/forum`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      board: {
        link: (id: string) => `${baseUrl}/${id}/board`,
      },
      origin: {
        link: (id: string) => `${baseUrl}/${id}/origin`,
      },
    },
    link: baseUrl,
  },
};
