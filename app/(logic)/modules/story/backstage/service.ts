export async function createBackstage(token: string) {
  const url = `${process.env.API_URL}/backstage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getBackstage(token: string, backstageId: string) {
  const url = `${process.env.API_URL}/backstage/${backstageId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteBackstage(token: string, backstageId: string) {
  const url = `${process.env.API_URL}/backstage/${backstageId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateBackstage(token: string, backstageId: string) {
  const url = `${process.env.API_URL}/backstage/${backstageId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceBackstage(token: string, backstageId: string) {
  const url = `${process.env.API_URL}/backstage/${backstageId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getBackstages(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/backstages`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
