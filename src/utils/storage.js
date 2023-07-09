const KEY = 'token'

export const saveToken = data => {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem(KEY) || '{}')
}

export const removeToken = () => {
  localStorage.removeItem(KEY)
}
