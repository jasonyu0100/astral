export async function createOrgFile(token: string) {
    const url = `${process.env.API_URL}/org_file`;
    const res = await fetch(url, {
      method: "POST",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getOrgFile(token: string, orgFileId: string) {
    const url = `${process.env.API_URL}/org_file/${orgFileId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function deleteOrgFile(token: string, orgFileId: string) {
    const url = `${process.env.API_URL}/org_file/${orgFileId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function updateOrgFile(token: string, orgFileId: string) {
    const url = `${process.env.API_URL}/org_file/${orgFileId}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function replaceOrgFile(token: string, orgFileId: string) {
    const url = `${process.env.API_URL}/org_file/${orgFileId}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getOrgFiles(token: string, page: number, limit: number) {
    const url = `${process.env.API_URL}/org_files`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
      body: JSON.stringify({ page, limit }),
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  