export async function createRecording(token: string) {
  const url = `${process.env.API_URL}/recording`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getRecording(token: string, recordingId: string) {
  const url = `${process.env.API_URL}/recording/${recordingId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteRecording(token: string, recordingId: string) {
  const url = `${process.env.API_URL}/recording/${recordingId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateRecording(token: string, recordingId: string) {
  const url = `${process.env.API_URL}/recording/${recordingId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceRecording(token: string, recordingId: string) {
  const url = `${process.env.API_URL}/recording/${recordingId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getRecordings(
  token: string,
  page: number,
  limit: number
) {
  const url = `${process.env.API_URL}/recordings`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
