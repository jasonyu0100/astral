export async function createFileresource(token: string) {
    const url = `${process.env.API_URL}/fileresource`;
    const res = await fetch(url, {
      method: "POST",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getFileresource(token: string, fileresourceId: string) {
    const url = `${process.env.API_URL}/fileresource/${fileresourceId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function deleteFileresource(token: string, fileresourceId: string) {
    const url = `${process.env.API_URL}/fileresource/${fileresourceId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function updateFileresource(token: string, fileresourceId: string) {
    const url = `${process.env.API_URL}/fileresource/${fileresourceId}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function replaceFileresource(token: string, fileresourceId: string) {
    const url = `${process.env.API_URL}/fileresource/${fileresourceId}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getFileresources(token: string, page: number, limit: number) {
    const url = `${process.env.API_URL}/fileresources`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
      body: JSON.stringify({ page, limit }),
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  