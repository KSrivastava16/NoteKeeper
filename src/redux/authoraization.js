export default function auth() {
  const token = JSON.parse(localStorage.getItem("user"));
  return token.token;
}
