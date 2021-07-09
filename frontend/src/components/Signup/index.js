import React, { useState , useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';

import './SignupStyle.css'


const Signup = ({ signup, isAuthenticated, isEmailSignup , isSignup }) => {
    this.state = {
        loading: false
    }
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    useEffect(
        () => {
            if(isEmailSignup === null) {
                return ;
            }
            if(isEmailSignup){
                alert('Your account has successfully done , Go to your email to verify it');
            }
            else{
                alert('This email already exists');
            }
        }
        , [isEmailSignup] 
      )

    const { name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        // this.setState({
        //     loading: true
        // })

        if (password !== 'undefined' && re_password !== 'undefined') {
            if (password == re_password) {
                signup(name, email, password, re_password);
            }
            else {
                if (password !== re_password) {
                    alert('The two password fields did not match');
                }
            }

        }
    };

    // if (isAuthenticated) {
    //     return <Redirect to='/' />
    // }
    // if(isSignup) {
    //     return <Redirect to = '/login' /> ;
    // }

    // if (accountCreated) {
    //      setAccountCreated(false);
    //      return <Redirect to='/login' /> ;
    // }

    return (

        <div >
        <section className="Form my-5 mx-5">
         <div className="container">
           <div className="row no-gutters">

             <div className="col-lg-5">
                 <img id='imgSignup' src='/static/images/2.jpg' className="img-fluid" ></img>
             </div>

             <div className="col-lg-7 px-5 pt-5">
             <h1 id='welcome' className="font-weight-bold py-3 mx-5">Welcome </h1>
                 <h3 className="font-weight-bold py-3 mx-5">Registration</h3>
                  <form className="needs-validation" onSubmit={e => onSubmit(e)} >

                  <div className="form-row">
                        <div className="col-lg-7"> 
                        <input
                        // className='form-control'
                        className="form-control my-3 p-2 mx-5"
                        type='text'
                        placeholder='Name*'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                      </div>
                      </div>

                      <div className="form-row">
                        <div className="col-lg-7"> 
                        <input
                        // className='form-control'
                        className="form-control my-3 p-2 mx-5"
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="col-lg-7"> 
                        <input
                        // className='form-control'
                        className="form-control my-3 p-2 mx-5"
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                        </div>
                      </div>

                      
                      <div className="form-row">
                        <div className="col-lg-7"> 
                        <input
                        // className='form-control'
                        className="form-control my-3 p-2 mx-5"
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                      </div>
                      </div>

                      <div className="form-row">
                        <div className="col-lg-7"> 
                        <button type="submit" className="btn1 mt-3 mb-5 mx-5" >Sign Up</button>
                        </div>  
                      </div>

                      <p style={{marginLeft:"120px"}}>Have an account? <a href="/login">Login</a></p>
                      
                      </form> 
                    </div> 
                </div>
              </div>
             </section>
           </div>


    );
};

const mapStateToProps = state => ({
    isEmailSignup: state.auth.isEmailSignup ,
    isSignup: state.auth.isSignup 
});

export default connect(mapStateToProps, { signup })(Signup);





        //      <div className='container mt-5'>
        //      <h1>Sign Up</h1>
        //     <p>Create your Account</p> 
        //      <form onSubmit={e => onSubmit(e)}>

        //          <div className='form-group'>
        //            <input
        //                 className='form-control'
        //                 type='text'
        //                 placeholder='Name*'
        //                 name='name'
        //                 value={name}
        //                 onChange={e => onChange(e)}
        //                 required
        //             />
        //         </div>
        //         <div className='form-group'>
        //             <input
        //                 className='form-control'
        //                 type='email'
        //                 placeholder='Email*'
        //                 name='email'
        //                 value={email}
        //                 onChange={e => onChange(e)}
        //                 required
        //             />
        //         </div>
        //         <div className='form-group'>
        //             <input
        //                 className='form-control'
        //                 type='password'
        //                 placeholder='Password*'
        //                 name='password'
        //                 value={password}
        //                 onChange={e => onChange(e)}
        //                 minLength='6'
        //                 required
        //             />
        //         </div>
        //         <div className='form-group'>
        //             <input
        //                 className='form-control'
        //                 type='password'
        //                 placeholder='Confirm Password*'
        //                 name='re_password'
        //                 value={re_password}
        //                 onChange={e => onChange(e)}
        //                 minLength='6'
        //                 required
        //             />
        //         </div>
        //         <button className='btn btn-primary' type='submit'>Register</button>
        //     </form> 
        //      <p className='mt-3'>
        //         Already have an account? <Link to='/login'>Sign In</Link>
        //     </p>
        // </div>    