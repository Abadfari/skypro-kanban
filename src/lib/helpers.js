// export function saveUserToLocalStorage(user) {
//   window.localStorage.setItem("userData", JSON.stringify(user));
// }

export function getUserFromLocalStorage() {
  try {
    return JSON.parse(window.localStorage.getItem("userData"));
  } catch (error) {
    return null;
  }
}

// export function removeUserFromLocalStorage() {
//   window.localStorage.removeItem("userData");
// }
