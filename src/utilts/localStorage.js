export const addUsertoLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUsertoLocalStorage = () => {
  localStorage.removeItem('user')
}

export const getUsertoLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}
