export async function createNotification(token: string) {
  const url = `${process.env.API_URL}/notification`;
  const res = await fetch(url, {
    method: "POST",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getNotification(token: string, notificationId: string) {
  const url = `${process.env.API_URL}/notification/${notificationId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteNotification(token: string, notificationId: string) {
  const url = `${process.env.API_URL}/notification/${notificationId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateNotification(token: string, notificationId: string) {
  const url = `${process.env.API_URL}/notification/${notificationId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceNotification(token: string, notificationId: string) {
  const url = `${process.env.API_URL}/notification/${notificationId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getNotifications(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/notifications`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
