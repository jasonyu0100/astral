export async function createOrg(token: string) {
  const url = `${process.env.API_URL}/org`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getOrg(token: string, orgId: string) {
  const url = `${process.env.API_URL}/org/${orgId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteOrg(token: string, orgId: string) {
  const url = `${process.env.API_URL}/org/${orgId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateOrg(token: string, orgId: string) {
  const url = `${process.env.API_URL}/org/${orgId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceOrg(token: string, orgId: string) {
  const url = `${process.env.API_URL}/org/${orgId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getOrgs(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/orgs`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
