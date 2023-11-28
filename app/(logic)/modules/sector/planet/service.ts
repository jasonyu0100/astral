export async function createPlanet(token: string) {
  const url = `${process.env.API_URL}/planet`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getPlanet(token: string, planetId: string) {
  const url = `${process.env.API_URL}/planet/${planetId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deletePlanet(token: string, planetId: string) {
  const url = `${process.env.API_URL}/planet/${planetId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updatePlanet(token: string, planetId: string) {
  const url = `${process.env.API_URL}/planet/${planetId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replacePlanet(token: string, planetId: string) {
  const url = `${process.env.API_URL}/planet/${planetId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getPlanets(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/planets`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
