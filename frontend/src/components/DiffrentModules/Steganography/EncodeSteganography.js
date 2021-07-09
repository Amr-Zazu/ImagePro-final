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

class EncodeSteganography extends Component {
    constructor() {
        super();
        this.state = {
            // 'images': [],
            cover_image: null,
            cover_image_path: '',
            secret_image_path: '',
            secret_image: null,
            cover_imageShown: null,
            secret_imageShown: null,
            steganography_image: null,
            steganography_imageShown: null,
            loading: false,
        }
    }
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // };
    handleCoverImageChange = (e) => {
        let img = e.target.files[0];
        this.setState({
            cover_imageShown: URL.createObjectURL(img),
            cover_image: img
        })
    };
    handleSecretImageChange = (e) => {
        let img = e.target.files[0];
        this.setState({
            secret_imageShown: URL.createObjectURL(img),
            secret_image: img
        })
    };

    handleCoverUpload = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.cover_image, this.state.cover_image.name);
        let url = 'http://localhost:8000/api/image/';

        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log(res.data);
                // console.log(this.state.image.name);
                this.setState({
                    cover_image_path: res.data.data
                })
            })
            .catch(err => console.log(err));
    };

    handleSecretUpload = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.secret_image, this.state.secret_image.name);
        let url = 'http://localhost:8000/api/image/';

        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    secret_image_path: res.data.data
                })
                // console.log(this.state.image.name);
            })
            .catch(err => console.log(err));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('cover_image_path', this.state.cover_image_path);
        form_data.append('secret_image_path', this.state.secret_image_path);
        let url = 'http://localhost:8000/encode_steganography/'

        this.setState({
            loading: true
        })

        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log(res.data.data);
                this.setState({
                    steganography_image: res.data.steganography_image,
                    loading : false,
                })


            })
            .catch(err => console.log(err));
    };
    DownloadImageonclick = () => {
        let imagePath = this.state.steganography_image
        let fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1)
        saveAs(imagePath, fileName);
    };

    render() {
        return (
            <div>
                <form >
                    <dl className='stegnagoraphyList'>
                        <dt>Important Notes</dt>
                        <ul>
                        <i><li><dd>Size of Secret image must be 25% or fewer of size of Cover image.</dd></li></i>
                        <i><li><dd>Cover image and Secret image must be .png extension.</dd></li></i>
                        <i><li><dd>Cover image name and Secret image name must be not more than 7 letters.</dd></li></i>
                        </ul>
                    </dl>
                    <h4 className='title_cover_Image_encode'>Cover Image</h4>
                    <h4 className='title_secret_Image_encode'>Secret Image</h4>
                    <h4 className='title_steganography_Image_encode'>Steganography Image</h4>
                    <img id='Steganographyimage' src={this.state.cover_imageShown} />
                    <img id='Steganographyimage' src={this.state.secret_imageShown} />
                    <img id='Steganographyimage' src={this.state.steganography_image} />

                    <div id='choose'>
                        <label for="coverImage" className="btn_cover_choose">Choose cover image</label>
                        <label for="secretImage" className="btn_secret_choose">Choose secret image</label>
                        <input type="file" className='input' id="coverImage" accept="image/png, image/jpeg" onChange={this.handleCoverImageChange} required />
                        <input type="file" className='input' id="secretImage" accept="image/png, image/jpeg" onChange={this.handleSecretImageChange} required />
                        <Button disabled={this.state.loading}  onClick={this.handleSubmit} className='stegnagoraphy' >
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
                            'Apply Stegnagoraphy'
                            }
                        </Button>{' '}
                    </div>

                    <div id='upload'>
                        <input type="submit" onClick={this.handleCoverUpload} className='btn_cover_upload' value='Upload Image' />
                        <input type="submit" onClick={this.handleSecretUpload} className='btn_secret_upload' value='Upload Image' />
                        {/* <input type="submit" onClick={this.handleSubmit} className='stegnagoraphy' value='Apply Stegnagoraphy' /> */}
                        <button onClick={this.DownloadImageonclick} className='stegnagoraphy'>Download Steganography image</button>

                   
                        
                    </div>


                </form>
            </div>
            //   </ul>
        );
    }
}



export default EncodeSteganography;