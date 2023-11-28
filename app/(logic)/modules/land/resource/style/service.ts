export async function createStyle(token: string) {
  const url = `${process.env.API_URL}/style`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getStyle(token: string, styleId: string) {
  const url = `${process.env.API_URL}/style/${styleId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteStyle(token: string, styleId: string) {
  const url = `${process.env.API_URL}/style/${styleId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateStyle(token: string, styleId: string) {
  const url = `${process.env.API_URL}/style/${styleId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceStyle(token: string, styleId: string) {
  const url = `${process.env.API_URL}/style/${styleId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getStyles(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/styles`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
