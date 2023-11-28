export async function createSector(token: string) {
  const url = `${process.env.API_URL}/sector`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getSector(token: string, systemId: string) {
  const url = `${process.env.API_URL}/sector/${systemId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteSector(token: string, systemId: string) {
  const url = `${process.env.API_URL}/sector/${systemId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateSector(token: string, systemId: string) {
  const url = `${process.env.API_URL}/sector/${systemId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceSector(token: string, systemId: string) {
  const url = `${process.env.API_URL}/sector/${systemId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getSectors(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/systems`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
