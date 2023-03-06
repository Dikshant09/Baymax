import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStatus } from '../../hooks/useAuthStatus.js';
import { useAuthStatus } from '../../src/hooks/useAuthStatus';
import Spinner from "./Spinner/Spinner";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if(checkingStatus){
    return <Spinner />
  }

  // Rendering child component if loggedIn is true.. Here child is Home component...
  return loggedIn ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
