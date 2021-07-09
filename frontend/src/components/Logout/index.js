import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';


const Logout = ({ isLogout, logout, isAuthenticated }) => {

    // useEffect(
    //     () => {
    //         if(isLogout === null) {
    //             return ;
    //         }
    //         if(isLogout){
    //             return <Redirect to='/' /> ;
    //         }
    //     
    //     , [isLogout] 
    //   )

   

    if (isLogout) {
        return <Redirect to='/' />
    }

    return (
        <div>

        </div>
    );
};

const mapStateToProps = state => ({
    isLogout: state.auth.isLogout,
    isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, { logout })(Logout);







