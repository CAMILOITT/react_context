import Login from '../../../page/challenge6/login/Login';
// import { verifyToken } from '../token/Token';

export default function ProtectedRouter({ children }) {
  // const token = sessionStorage.getItem(session);
  const token = true;
  if (!token) {
    return <Login />;
  }
  return children ;
}
