function login(username, password) {
  if (!username || !password) return false;
  if (username.length < 4) return false;
  return password.length >= 8;
}
