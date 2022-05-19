import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleGoogleLogin=()=>{
        signInWithGoogle();
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <button onClick={handleGoogleLogin} className='btn btn-primary'>Google Sign In</button>
        </div>
    );
};

export default Login;