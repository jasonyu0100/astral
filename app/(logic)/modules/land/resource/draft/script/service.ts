export async function createScript(token: string) {
  const url = `${process.env.API_URL}/script`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getScript(token: string, scriptId: string) {
  const url = `${process.env.API_URL}/script/${scriptId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteScript(token: string, scriptId: string) {
  const url = `${process.env.API_URL}/script/${scriptId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateScript(token: string, scriptId: string) {
  const url = `${process.env.API_URL}/script/${scriptId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceScript(token: string, scriptId: string) {
  const url = `${process.env.API_URL}/script/${scriptId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getScripts(
  token: string,
  page: number,
  limit: number
) {
  const url = `${process.env.API_URL}/scripts`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

