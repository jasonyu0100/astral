export async function createSky(token: string) {
    const url = `${process.env.API_URL}/sky`;
    const res = await fetch(url, {
      method: "POST",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getSky(token: string, skyId: string) {
    const url = `${process.env.API_URL}/sky/${skyId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function deleteSky(token: string, skyId: string) {
    const url = `${process.env.API_URL}/sky/${skyId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function updateSky(token: string, skyId: string) {
    const url = `${process.env.API_URL}/sky/${skyId}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function replaceSky(token: string, skyId: string) {
    const url = `${process.env.API_URL}/sky/${skyId}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getSkys(token: string, page: number, limit: number) {
    const url = `${process.env.API_URL}/skys`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
      body: JSON.stringify({ page, limit }),
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  