export const isAuthenticated = () => {
  const token = localStorage.getItem("bazzar_buddy_token");
  const user_id = localStorage.getItem("bazzar_buddy_user_id");
  return { user: token !== null && user_id !== null };
};
