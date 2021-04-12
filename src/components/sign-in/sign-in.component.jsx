import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = ({ email, password }) => {

    const [userCredentials, setCredntials] = useState({ email: '', password: '' });


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredntials({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

        setCredntials({ email: '', password: '' });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredntials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign in with your email</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="text" name="email" value={userCredentials.email} handleChange={handleChange} label="email" required />
                <FormInput type="password" name="password" value={userCredentials.password} handleChange={handleChange} label="password" required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton >
                </div>
            </form>
        </div>
    )
}

export default SignIn;