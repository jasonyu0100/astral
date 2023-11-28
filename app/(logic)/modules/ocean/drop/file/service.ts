export async function createFiledrop(token: string) {
    const url = `${process.env.API_URL}/filedrop`;
    const res = await fetch(url, {
      method: "POST",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getFiledrop(token: string, filedropId: string) {
    const url = `${process.env.API_URL}/filedrop/${filedropId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function deleteFiledrop(token: string, filedropId: string) {
    const url = `${process.env.API_URL}/filedrop/${filedropId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function updateFiledrop(token: string, filedropId: string) {
    const url = `${process.env.API_URL}/filedrop/${filedropId}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function replaceFiledrop(token: string, filedropId: string) {
    const url = `${process.env.API_URL}/filedrop/${filedropId}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getFiledrops(token: string, page: number, limit: number) {
    const url = `${process.env.API_URL}/filedrops`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
      body: JSON.stringify({ page, limit }),
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  