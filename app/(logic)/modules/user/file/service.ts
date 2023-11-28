export async function createUserFile(token: string) {
    const url = `${process.env.API_URL}/user_file`;
    const res = await fetch(url, {
      method: "POST",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getUserFile(token: string, userFileId: string) {
    const url = `${process.env.API_URL}/user_file/${userFileId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function deleteUserFile(token: string, userFileId: string) {
    const url = `${process.env.API_URL}/user_file/${userFileId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function updateUserFile(token: string, userFileId: string) {
    const url = `${process.env.API_URL}/user_file/${userFileId}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function replaceUserFile(token: string, userFileId: string) {
    const url = `${process.env.API_URL}/user_file/${userFileId}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getUserFiles(token: string, page: number, limit: number) {
    const url = `${process.env.API_URL}/user_files`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
      body: JSON.stringify({ page, limit }),
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  