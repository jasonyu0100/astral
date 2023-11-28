export async function createQuest(token: string) {
  const url = `${process.env.API_URL}/quest`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getQuest(token: string, questId: string) {
  const url = `${process.env.API_URL}/quest/${questId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteQuest(token: string, questId: string) {
  const url = `${process.env.API_URL}/quest/${questId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateQuest(token: string, questId: string) {
  const url = `${process.env.API_URL}/quest/${questId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceQuest(token: string, questId: string) {
  const url = `${process.env.API_URL}/quest/${questId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getQuests(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/quest`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
