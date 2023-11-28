export async function createScene(token: string) {
  const url = `${process.env.API_URL}/scene`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getScene(token: string, sceneId: string) {
  const url = `${process.env.API_URL}/scene/${sceneId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteScene(token: string, sceneId: string) {
  const url = `${process.env.API_URL}/scene/${sceneId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateScene(token: string, sceneId: string) {
  const url = `${process.env.API_URL}/scene/${sceneId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceScene(token: string, sceneId: string) {
  const url = `${process.env.API_URL}/scene/${sceneId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getScenes(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/scenes`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
