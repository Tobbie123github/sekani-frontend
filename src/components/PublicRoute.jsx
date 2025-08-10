
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from './Loading';

const PublicRoute = ({ children }) => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loading />

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PublicRoute;
