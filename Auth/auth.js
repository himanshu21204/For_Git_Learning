function login(username, password) {
  if (!username || !password) return false;
  return password.length >= 8;
}
