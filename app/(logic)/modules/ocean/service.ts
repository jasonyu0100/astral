export async function createOcean(token: string) {
    const url = `${process.env.API_URL}/ocean`;
    const res = await fetch(url, {
      method: "POST",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getOcean(token: string, oceanId: string) {
    const url = `${process.env.API_URL}/ocean/${oceanId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function deleteOcean(token: string, oceanId: string) {
    const url = `${process.env.API_URL}/ocean/${oceanId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function updateOcean(token: string, oceanId: string) {
    const url = `${process.env.API_URL}/ocean/${oceanId}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function replaceOcean(token: string, oceanId: string) {
    const url = `${process.env.API_URL}/ocean/${oceanId}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getOceans(token: string, page: number, limit: number) {
    const url = `${process.env.API_URL}/oceans`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
      body: JSON.stringify({ page, limit }),
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  