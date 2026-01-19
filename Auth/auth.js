function login(username, password) {
  if (!username || !password) return false;

  console.log("Password:", password);

  return password.length >= 8;
}
