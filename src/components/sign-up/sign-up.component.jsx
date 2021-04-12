import React, { useState } from 'react';
import { auth, createUSerProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss';


const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwowrd dont match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUSerProfileDocument(user, { displayName });
            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} handleChange={handleChange} label='DisplayName' required />
                <FormInput type='text' name='email' value={email} handleChange={handleChange} label='email' required />
                <FormInput type='text' name='password' value={password} onChange={handleChange} label='password' required />
                <FormInput type='text' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='confirmPassword' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;

