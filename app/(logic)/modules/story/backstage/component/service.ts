export async function createComponent(token: string) {
  const url = `${process.env.API_URL}/component`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getComponent(token: string, componentId: string) {
  const url = `${process.env.API_URL}/component/${componentId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteComponent(token: string, componentId: string) {
  const url = `${process.env.API_URL}/component/${componentId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateComponent(token: string, componentId: string) {
  const url = `${process.env.API_URL}/component/${componentId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceComponent(token: string, componentId: string) {
  const url = `${process.env.API_URL}/component/${componentId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getComponents(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/components`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
