const baseUrl = `/profile`;

export const profileMap = {
  account: {
    link: (id: string) => `${baseUrl}/${id}/account`,
  },
  link: baseUrl,
};
