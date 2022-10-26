import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authporvider';

const Privateroutes = ({ children }) => {
    const location = useLocation()
    const { user ,loading} = useContext(AuthContext)

    if(loading){
      return  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 text-center"></div>

    }
    if (!user) {
        return <Navigate state={{ from: location }} replace to='/login'></Navigate>
    } else {
        return children
    }
};

export default Privateroutes;