import React  from 'react' ;
import {BrowserRouter , Route} from 'react-router-dom' ;
import Navbar from '../Navbar';
import LogIn from './../LogIn' ;
import {connect} from 'react-redux' ;

import {HomeSection , HomeBtn , HomeDesc , HomeInformation , HomeTitle , Span} from './style.js' ;

const Home = ({isAuthenticated}) =>  {
    // const logIn = () => {
    //     <BrowserRouter>
    //     <Navbar/>
    //     <Route path="/login" component={LogIn} />
    //     </BrowserRouter>

    // }
    return (
      <HomeSection>
      <div className="page_conatiner">
          <HomeInformation>
              <HomeTitle>Image Processing</HomeTitle>
              <HomeDesc>
                  <Span>ImagePro</Span> is a website for process Images with many modules
              </HomeDesc>
              {/* <HomeBtn to="/login">Let's Begin</HomeBtn> */}
              {isAuthenticated ? '' : <HomeBtn to="/signup">Try it free !</HomeBtn>}
          </HomeInformation>
      </div>
  </HomeSection>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps , null) (Home);