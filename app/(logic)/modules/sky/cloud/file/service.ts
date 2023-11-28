export async function createFilecloud(token: string) {
    const url = `${process.env.API_URL}/filecloud`;
    const res = await fetch(url, {
      method: "POST",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getFilecloud(token: string, filecloudId: string) {
    const url = `${process.env.API_URL}/filecloud/${filecloudId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function deleteFilecloud(token: string, filecloudId: string) {
    const url = `${process.env.API_URL}/filecloud/${filecloudId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function updateFilecloud(token: string, filecloudId: string) {
    const url = `${process.env.API_URL}/filecloud/${filecloudId}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function replaceFilecloud(token: string, filecloudId: string) {
    const url = `${process.env.API_URL}/filecloud/${filecloudId}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: { token },
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  
  export async function getFileclouds(token: string, page: number, limit: number) {
    const url = `${process.env.API_URL}/fileclouds`;
    const res = await fetch(url, {
      method: "GET",
      headers: { token },
      body: JSON.stringify({ page, limit }),
    });
    if (res.ok) return await res.json();
    else return Promise.reject(await res.text());
  }
  