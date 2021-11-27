const useToken = {
  get: () => localStorage.getItem('access_token'),
  set: (token: string) => localStorage.setItem('access_token', token),
}

export { useToken }
