import React , {Component}  from 'react' ;
import './style.css'

// import 'font-awesome/css/font-awesome.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render(){
        return(
            <footer className="footer" >
            <div className="footer-content">
                <div className="footer-contactInfo">
                    <div className="footer-logo"> 
                    <h3 id='logo1'>Image<span id='logo2'>Pro</span></h3>
                    </div>
                    <p id='logo1'>ImagePro is a website for process Images with many modules</p>
                    <p className="footer-date">© 2020 - 2021 ImagePro</p> 
                    </div>
            <div  className="footer-navList-wrapper">
                <ul className="footer-list footer-navList">
                    <li className='titles' >Useful links</li>
                    <li className="footer-navItem"> <a href="/">Home</a> </li>
                    <li className="footer-navItem"> <a href="/modules">Modules</a> </li>
                    <li className="footer-navItem"> <a href="/login">Login</a> </li>
                    <li className="footer-navItem"> <a href="/signup">Signup</a></li>
                </ul>
                <ul className="footer-list footer-navList">
                    <li className='titles' >Follow US</li>
                    <li className="footer-navItem"> <a href="#">Facebook</a> <FontAwesomeIcon className='facebook' icon={faFacebook} /> </li>
                    <li className="footer-navItem"> <a href="#">Twitter</a> <FontAwesomeIcon className='twitter' icon={faTwitter} /> </li>
                    <li className="footer-navItem"> <a href="#">Instagram</a> <FontAwesomeIcon className='instagram' icon={faInstagram} /> </li>
                    <li className="footer-navItem"> <a href="#">Youtube</a> <FontAwesomeIcon className='youtube' icon={faYoutube} /> </li>
                </ul>
                <img ></img>
            </div>
        </div>
    </footer>


//     <div id='eeee' >
//     <footer className="footer bg-dark">
//         <div className="row">
//         	<div className="col-md-3 footer-brand animated fadeInLeft">
//             	<h2>Logo</h2>
//                 <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
//                 <p>© 2014 BS3 UI Kit, All rights reserved</p>
//             </div>
//         	<div className="col-md-4 footer-nav animated fadeInUp">
//             	<h4>Menu —</h4>
//             	<div className="col-md-6">
//                     <ul className="pages">
//                         <li><a href="#">Travel</a></li>
//                         <li><a href="#">Nature</a></li>
//                         <li><a href="#">Explores</a></li>
//                         <li><a href="#">Science</a></li>
//                         <li><a href="#">Advice</a></li>
//                     </ul>
//                 </div>
//             </div>
//         	<div className="col-md-2 footer-social animated fadeInDown">
//             	<h4>Follow Us</h4>
//             	<ul>
//                 	<li><a href="#">Facebook</a></li>
//                 	<li><a href="#">Twitter</a></li>
//                 	<li><a href="#">Instagram</a></li>
//                 	<li><a href="#">RSS</a></li>
//                 </ul>
//             </div>
//         </div>
//     </footer>
  

// </div>



        )
    }
}

export default Footer ;