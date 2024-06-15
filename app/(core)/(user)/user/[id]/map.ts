const baseUrl = `/user`;

export const userProfileMap = {
  profile: {
    link: (id: string) => `${baseUrl}/${id}/profile`,
  },
  gallerys: {
    link: (id: string) => `${baseUrl}/${id}/gallerys`,
  },
  spaces: {
    link: (id: string) => `${baseUrl}/${id}/spaces`,
  },
  horizons: {
    link: (id: string) => `${baseUrl}/${id}/horizons`,
  },
  link: baseUrl,
};
