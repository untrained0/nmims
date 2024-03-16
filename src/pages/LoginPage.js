import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('user credential', userCredential);
            const user = userCredential.user;
            console.log('user details', user);
        });
    };

    useEffect(() => {
        try {
            const unsubscribe = auth.onAuthStateChanged((authUser) => {
                if (authUser && navigation && navigation.current !== '/dashboard') {
                    console.log('User is authenticated');
                    navigation(() => 'dashboard');
                }
            });
    
            return unsubscribe;
        } catch (e) {
            console.log(e);
        }
    }, [navigation]);
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                />
                <button
                    onClick={login}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Login
                </button>
                <p className="text-center mt-4 text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => navigation('/Signin')}
                    >
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;
