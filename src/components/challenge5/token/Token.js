import * as jose from 'jose';

export function generateToken(user) {
  const token = jose.sign(user, 'key', { expiresIn: '10m' });
  return token;
}
export function verifyToken() {
  const token = localStorage.getItem('token');
  return isAuth;
}
