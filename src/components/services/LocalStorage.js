/* eslint-disable import/no-anonymous-default-export */
export const setLocalStorage = (key, val) => {
  localStorage.setItem(key, val)
}

export const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}
