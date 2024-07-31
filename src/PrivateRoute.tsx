import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  if (isAuthenticated) return <Component />;
  return <Navigate to='/login' />;
};

export default PrivateRoute;
