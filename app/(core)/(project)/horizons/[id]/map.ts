const baseUrl = '/horizons';

export const horizonMap = {
  horizon: {
    id: {
      horizon: {
        link: (id: string) => `${baseUrl}/${id}/horizon`,
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
