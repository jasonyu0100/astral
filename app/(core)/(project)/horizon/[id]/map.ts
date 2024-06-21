const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      area: {
        link: (id: string) => `${baseUrl}/${id}/area`,
      },
      board: {
        link: (id: string) => `${baseUrl}/${id}/board`,
      },
      chart: {
        link: (id: string) => `${baseUrl}/${id}/chart`,
      },
      lead: {
        link: (id: string) => `${baseUrl}/${id}/lead`,
      },
    },
    link: baseUrl,
  },
};
