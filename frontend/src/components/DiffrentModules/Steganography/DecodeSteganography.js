import React, { Component } from 'react';
import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { saveAs } from 'file-saver';
// import 'bootstrap/dist/css/bootstrap.css';
import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';

import './SteganographyStyle.css' 

class DecodeSteganography extends Component {
    constructor() {
        super();
        this.state = {
            // 'images': [],
            steganography_image: null,
            steganography_imageShown: null,
            steganography_image_path:'',
            secret_image:null,
            loading: false,
        }
    }
    handleSteganographyImageChange = (e) => {
        let img = e.target.files[0];
        this.setState({
            steganography_imageShown: URL.createObjectURL(img),
            steganography_image: img
        })
    };

    handleSteganographyUpload = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.steganography_image , this.state.steganography_image.name);
        let url = 'http://localhost:8000/api/image/';
        
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data' ,
            }
        })
        .then(res => {
        console.log(res.data);
        // console.log(this.state.image.name);
        this.setState({
            steganography_image_path: res.data.data
        })
    })
        .catch(err => console.log(err)) ;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('steganography_image_path',this.state.steganography_image_path);
        let url = 'http://localhost:8000/decode_steganography/'

        this.setState({
            loading: true
        })

        axios.post(url , form_data , {
            headers: {
                'content-type': 'multipart/form-data' ,
            }
        })
        .then(res => {
            this.setState({
                secret_image: res.data.secret_image,
                loading : false,
            })

        })
            .catch(err => console.log(err)) ;
        };
        DownloadImageonclick = () => {
            let imagePath = this.state.secret_image
            let fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1)
            saveAs(imagePath, fileName);
        };

    render() {
        return (
            <div>
                <form>
                <dl className='stegnagoraphyList'>
                        <dt>Important Notes</dt>
                        <ul>
                        <i><li><dd>Steganography image must be .png extension.</dd></li></i>
                        <i><li><dd>Steganography image name must be not more than 7 letters.</dd></li></i>
                        </ul>
                    </dl>
                    <h4 className='title_Steganography_Image_decode'>Steganography Image</h4>
                    <h4 className='title_secret_Image_decode'>Secret Image</h4>
                    <img id='DecodeSteganographyimage' src={this.state.steganography_imageShown} />
                    <img id='DecodeSteganographyimage' src={this.state.secret_image} />

                    <div id='choose'>
                    <label for="coverImage" className="btn_steganography_choose">Choose Steganography image</label>
                    <input type="file" className='input'id="coverImage" accept="image/png, image/jpeg" onChange={this.handleSteganographyImageChange} required />
                    <Button disabled={this.state.loading}  onClick={this.handleSubmit} className='decode_stegnagoraphy' >
                            {  this.state.loading ?
                              <div>
                                     <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                           Loading...
                              </div>
                              :
                            'Apply Decoding Stegnagoraphy'
                            }
                        </Button>{' '}
                    </div>

                   <div id='upload'>
                    <input type="submit" onClick={this.handleSteganographyUpload} className='btn_steganography_upload' value='Upload Image' />
                    {/* <input type="submit" onClick={this.handleSubmit} className='decode_stegnagoraphy' value= 'Apply Decoding Stegnagoraphy'/> */}
                    <button onClick={this.DownloadImageonclick} className='decode_stegnagoraphy'>Download Secret image</button>
              
                   </div>

                    
                </form>
            </div>
            //   </ul>
        );
    }
}



export default DecodeSteganography;