import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, getFirestore } from 'firebase/firestore';
import { app, auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const db = getFirestore(app);
    const navigate = useNavigate();

    const register = () => {
        if (email === '' || password === '' || phone === '') {
            alert('Please enter all the credentials');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials._tokenResponse.email;
            const uid = auth.currentUser.uid;

            setDoc(doc(db, 'users', `${uid}`), {
                email: user,
                phone: phone
            });

            navigate('/dashboard'); // Redirect to dashboard page after registration
        });
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <div className="flex flex-col items-center mt-8">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 rounded-md p-2 mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 rounded-md p-2 mb-4"
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-400 rounded-md p-2 mb-4"
                />
                <button
                    onClick={register}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default SigninPage;
