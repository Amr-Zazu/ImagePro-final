import React, { useState , useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../actions/auth';

import './ResetPassword.css'

const ResetPassword = ({ reset_password , isEmailActivated }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    useEffect(
        () => {
            if(isEmailActivated === null) {
                return ;
            }
            if(isEmailActivated){
                alert('Request sent to your e-mail');
            }
            else{
                alert('Please make sure you have entered the correct e-mail .. note: if your email is not activated yet , go to your email to verify it first');
            }
        }
        , [isEmailActivated] 
      )

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (email !== 'undefined') {
            reset_password(email);
        }
       // setRequestSent(true);
    };

    // if (requestSent) {
    //     return <Redirect to='/' />
    // }

    if (isEmailActivated){
        return <Redirect to = '/' />
    }

    return (
        <div className='container mt-5'>
        <div id='resetPassword' >
            <h1>Request Password Reset:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isEmailActivated: state.auth.isEmailActivated

});

export default connect(mapStateToProps, { reset_password })(ResetPassword);