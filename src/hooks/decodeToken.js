export default function decodeToken() {
  const tokenString = localStorage.getItem("token");

  return tokenString
    ? JSON.parse(atob(tokenString.split(".")[1]))
    : { role: "NOT_PERMITED" };
}
