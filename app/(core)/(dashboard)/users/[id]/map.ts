const baseUrl = `/users`;

export const userProfileMap = {
  profile: {
    link: (id: string) => `${baseUrl}/${id}/profile`,
  },
  link: baseUrl,
};
