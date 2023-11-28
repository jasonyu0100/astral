export async function createElement(token: string) {
  const url = `${process.env.API_URL}/element`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getElement(token: string, elementId: string) {
  const url = `${process.env.API_URL}/element/${elementId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteElement(token: string, elementId: string) {
  const url = `${process.env.API_URL}/element/${elementId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateElement(token: string, elementId: string) {
  const url = `${process.env.API_URL}/element/${elementId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceElement(token: string, elementId: string) {
  const url = `${process.env.API_URL}/element/${elementId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getElements(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/elements`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
