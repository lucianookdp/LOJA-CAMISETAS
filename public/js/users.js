import fs from 'fs/promises';

async function findUser(username) {
  const users = JSON.parse(await fs.readFile('users.json', 'utf8'));
   return users.find(user => user.username === username);
}
  
async function verifyUser(username, password) {
   const user = await findUser(username);
  return user && user.password === password;
}

export { findUser, verifyUser }