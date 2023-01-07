import { Route, Routes } from 'react-router-dom';
import Challenge5 from '../../page/challenge5/Challenge5';
import Login from '../../page/challenge6/login/Login';
import Register from '../../page/challenge6/register/Register';
import ProtectedRouter from '../../components/challenge5/protectedRouter/ProtectedRouter';

export default function Challenge6() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouter>
            <Challenge5 />
          </ProtectedRouter>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
