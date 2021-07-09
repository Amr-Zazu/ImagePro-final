import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import React from 'react';


import Modules from './components/Modules';
import LogIn from './components/LogIn';
import Index from './components/Index';
import ResetPassword from './components/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './store';
import Layout from './hocs/Layout';
import Signup from './components/Signup';
import Activate from './components/Activate';
import ImageUpload from './components/ImageUpload' ;
import Logout from './components/Logout' ;
import ContentFeed from './ContentFeed/contet-feed' ;
import UploadImage from './components/UploadImage'
import EncodeSteganography from './components/DiffrentModules/Steganography/EncodeSteganography';
import DecodeSteganography from './components/DiffrentModules/Steganography/DecodeSteganography';
import Watermarking from './components/DiffrentModules/Watermarking/Watermarking';
import ForgeryDetection from './components/DiffrentModules/Forgery Detection/ForgeryDetection';
import Footer from './components/Footer/Footer';
import DownloadImage from './components/Download Image/DownloadImage';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Layout />
    <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/login" component={LogIn} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path="/modules" component={Modules} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path='/reset-password' component={ResetPassword} />
    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
    <Route exact path='/activate/:uid/:token' component={Activate} />
    <Route exact path="/image-upload" component={ImageUpload} />
    <Route exact path="/" component={Logout} />
    <Route exact path="/content-feed" component={ContentFeed} />
    <Route exact path="/upload-image" component={UploadImage} />
    <Route exact path="/EncodeSteganography" component={EncodeSteganography} />
    <Route exact path="/DecodeSteganography" component={DecodeSteganography} />
    <Route exact path="/watermarking" component={Watermarking} />
    <Route exact path="/forgeryDetection" component={ForgeryDetection} />
    <Route exact path="/downloadImage" component={DownloadImage} />
    </Switch>
    <Footer/>

  </Router>
  </Provider>
);
}

export default App;
