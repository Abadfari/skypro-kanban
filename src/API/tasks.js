const baseHost = "https://wedev-api.sky.pro/api/kanban";

export function getTasks({ token }) {
  return fetch(baseHost, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 401) {
      throw new Error("Нет авторизации");
    }

    return response.json();
  });
}
