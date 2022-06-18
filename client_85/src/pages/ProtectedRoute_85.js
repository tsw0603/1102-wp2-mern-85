import { useAppContext } from '../context/appContext_85';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_85 = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute_85;
