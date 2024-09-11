const baseUrl = '/horizons';

export const horizonMap = {
  horizon: {
    id: {
      forum: {
        link: (id: string) => `${baseUrl}/${id}/forum`,
      },
      board: {
        link: (id: string) => `${baseUrl}/${id}/board`,
      },
      arc: {
        link: (id: string) => `${baseUrl}/${id}/arc`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
