import React, { Component }  from 'react' ;
import axios from 'axios'

import {ModuleTitle , ModuleSection , ModuleButton , ModuleDesc ,  Span , ModulePart , ModuleButtonWatermarking}  from './style.js' ;
import { connect } from 'react-redux';

import './Modules.css'
// import { Span } from '../Home/style.js';


class Modules extends Component {  
  state = {
    modules : [] ,
  } 

 componentDidMount()  {
    axios.get('static/js/modules.json').then(res => {this.setState({ modules: res.data.modules}) }  )
  }
  render() {
    const {isAuthenticated} = this.props ;

    // const {modules} = this.state ;
    // const modulesList = modules && modules !== null && modules !== undefined && modules.map( (moduleItem) => {
    //   console.log(moduleItem)
    //   return(
    //     <ModulePart first={moduleItem.id} key = {moduleItem.id}>
    //           <ModuleTitle first={moduleItem.id}>{moduleItem.title}</ModuleTitle>
    //           <ModuleDesc first={moduleItem.id}>{moduleItem.description}</ModuleDesc>
    //           {isAuthenticated ? <ModuleButton href={moduleItem.href}>Start</ModuleButton> : '' }
    //       </ModulePart>
    //   )

    // })
    return (
      <ModuleSection>
      <div className="page_conatiner">
          <Span>Modules</Span>
          {/* {modulesList} */}
          <ModulePart id='ModulePartForgery' >
              <ModuleTitle id='ModuleTitleFogery'>Forgery detection</ModuleTitle>
              <ModuleDesc id='ModuleDescForgery'>Detecting the probability of an image being compromised and mark the specific regions that could be forged</ModuleDesc>
              {/* <ModuleButton href='/forgeryDetection'>Start</ModuleButton> */}
              {isAuthenticated ? <ModuleButton href='/forgeryDetection'>Start</ModuleButton> : '' }
          </ModulePart>
          <ModulePart id='ModulePartWatermarking' >
              <ModuleTitle id='ModuleTitleWatermarking'>Watermarking</ModuleTitle>
              <ModuleDesc id='ModuleDescWatermarking'>Marking the ownership of an image by embedding a watermark on it that belongs to its owner</ModuleDesc>
              {/* <ModuleButton href='/watermarking'>Start</ModuleButton> */}
              {isAuthenticated ? <ModuleButton href='/watermarking'>Start</ModuleButton> : '' }
          </ModulePart>
          <ModulePart id='ModulePartSteganography' >
              <ModuleTitle id='ModuleTitleSteganography'>Steganography</ModuleTitle>
              <ModuleDesc id='ModuleDescSteganography'>Hiding private images and secrets inside other images to protect the privacy of data from eavesdroppers and transition across the internet</ModuleDesc>
              {/* <ModuleButton id='btn_Steganography_encode' href='/EncodeSteganography'>Start Encode</ModuleButton>
              <ModuleButton id='btn_Steganography_decode' href='/DecodeSteganography'>Start Decode</ModuleButton> */}
              {isAuthenticated ? <ModuleButton id='btn_Steganography_encode' href='/EncodeSteganography'>Start Encode</ModuleButton> : '' }
              {isAuthenticated ? <ModuleButton id='btn_Steganography_decode' href='/DecodeSteganography'>Start Decode</ModuleButton> : '' }
          </ModulePart>
      </div>
  </ModuleSection>
    );

  }
    
}
  
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps , null) (Modules);