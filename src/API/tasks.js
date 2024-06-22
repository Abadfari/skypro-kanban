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

export function postTasks({ token, title, topic, status, description, date }) {
  return fetch(baseHost, {
    method: "POST",
    body: JSON.stringify({ title, topic, status, description, date }),
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(async (response) => {
    if (response.status === 401) {
      throw new Error("Нет авторизации");
    }
    if (response.status === 400) {
      const error = await response.json();
      throw new Error(error.error);
    }

    return response.json();
  });
}
