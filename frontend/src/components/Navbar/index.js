import React , {Fragment}  from 'react' ;
import {NavbarSection , Logo , LogoText , ListItem , UlList , Span ,StyledLink} from './style.js';
import {connect} from 'react-redux' ;
import { logout } from '../../actions/auth' ;
import {Link} from 'react-router-dom' ;

import './NavbarStyle.css' ;

const Navbar = ({logout , isAuthenticated}) =>  {
    const guestLinks = () => (
        <Fragment>
            <ListItem>
        <li className='nav-item active '>
            <Link className='nav-link' to='/login'>Login <span className='sr-only'>(current)</span></Link>
        </li>
        </ListItem>
        <ListItem>
        <li className='nav-item active'>
            <Link className='nav-link' to='/signup'>Sign Up<span className='sr-only'>(current)</span></Link>
        </li>
        </ListItem>
    </Fragment>
       
    );

    const authLinks = () => (
        <ListItem>
        <li className='nav-item active'>
        <Link className='nav-link' to='/' onClick={logout}>Logout<span className='sr-only'>(current)</span></Link>
    </li>  
    </ListItem>
    );
  
   
return(
// {/* <Fragment> */}
    <NavbarSection>
         <nav id='NavbarColor' className='navbar navbar-expand-lg navbar-dark '>
            
               <Logo><Link className='navbar-brand'to='/'> <LogoText> Image<Span>Pro</Span> </LogoText> </Link>   </Logo> 
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse ' id='navbarResponsive'>
                    
                    <ul className='navbar-nav ml-auto'>
                      <ListItem>  <li className='nav-item active'>
                            <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
                        </li>
                        </ListItem>
                       <ListItem> <li className='nav-item active'>
                            <Link className='nav-link' to='/modules'>Modules <span className='sr-only'>(current)</span></Link>
                        </li>
                        </ListItem>
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>
            </nav>
            </NavbarSection>
            // {/* // </Fragment> */}
           

);


}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps , {logout}) (Navbar);