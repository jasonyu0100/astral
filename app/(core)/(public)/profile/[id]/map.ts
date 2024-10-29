const baseUrl = `/profile`;

export const userProfileMap = {
  account: {
    link: (id: string) => `${baseUrl}/${id}/account`,
  },
  link: baseUrl,
};
