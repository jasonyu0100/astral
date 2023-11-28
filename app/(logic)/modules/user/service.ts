export interface RegisterArgs {
    email: string;
    fName: string;
    lName: string;
    password: string;
}

export interface LoginArgs {
    email: string;
    password: string;
}

export async function registerUser(registerArgs: RegisterArgs) {
  const url = `${process.env.API_URL}/user`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(registerArgs),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function loginUser(loginArgs: LoginArgs) {
  const url = `${process.env.API_URL}/user`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(loginArgs),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getUser(token: string, userId: string) {
  const url = `${process.env.API_URL}/user/${userId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function deleteUser(token: string, userId: string) {
  const url = `${process.env.API_URL}/user/${userId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function updateUser(token: string, userId: string) {
  const url = `${process.env.API_URL}/user/${userId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function replaceUser(token: string, userId: string) {
  const url = `${process.env.API_URL}/user/${userId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { token },
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}

export async function getUsers(token: string, page: number, limit: number) {
  const url = `${process.env.API_URL}/users`;
  const res = await fetch(url, {
    method: "GET",
    headers: { token },
    body: JSON.stringify({ page, limit }),
  });
  if (res.ok) return await res.json();
  else return Promise.reject(await res.text());
}
