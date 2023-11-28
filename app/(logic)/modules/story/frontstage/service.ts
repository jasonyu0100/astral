export async function createFrontstage(token: string) {
  const url = `${process.env.API_URL}/frontstage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getFrontstage(token: string, frontstageId: string) {
  const url = `${process.env.API_URL}/frontstage/${frontstageId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteFrontstage(token: string, frontstageId: string) {
  const url = `${process.env.API_URL}/frontstage/${frontstageId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateFrontstage(token: string, frontstageId: string) {
  const url = `${process.env.API_URL}/frontstage/${frontstageId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceFrontstage(token: string, frontstageId: string) {
  const url = `${process.env.API_URL}/frontstage/${frontstageId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getFrontstages(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/frontstages`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
