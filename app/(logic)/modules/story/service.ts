export async function createStory(token: string) {
  const url = `${process.env.API_URL}/story`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getStory(token: string, storyId: string) {
  const url = `${process.env.API_URL}/story/${storyId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteStory(token: string, storyId: string) {
  const url = `${process.env.API_URL}/story/${storyId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateStory(token: string, storyId: string) {
  const url = `${process.env.API_URL}/story/${storyId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceStory(token: string, storyId: string) {
  const url = `${process.env.API_URL}/story/${storyId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getStorys(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/storys`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
