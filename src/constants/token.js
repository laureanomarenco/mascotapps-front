export const tokenAccess = localStorage.getItem("token");

export const header = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
