import { useRouter } from 'vue-router'
const useToken = {
  get: () => localStorage.getItem("access_token"),
  set: (token: string) => localStorage.setItem("access_token", token),
};

const useUser = {
  get: () => {
    const user = localStorage.getItem("user");
    if (!user) return;
    return JSON.parse(user);
  },
  set: (user: any) => localStorage.setItem("user", JSON.stringify(user)),
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    const router = useRouter()
    router.push('/')
  },
};

export { useToken, useUser };
