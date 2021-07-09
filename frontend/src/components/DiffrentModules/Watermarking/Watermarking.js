import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { saveAs } from 'file-saver';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loading } from '@fortawesome/free-brands-svg-icons'

import Loader from "react-loader-spinner";
import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';

import './WatermarkingStyle.css'

class Watermarking extends Component {
    constructor() {
        super();
        this.state = {
            // 'images': [],
            image: null,
            imageShown: null,
            image_path: '',
            watermark_image_path: '',
            watermark_image: null,
            watermark_imageShown: null,
            watermarked_image: null,
            loading: false
        }
    }
    handleImageChange = (e) => {
        let img = e.target.files[0];
        this.setState({
            imageShown: URL.createObjectURL(img),
            image: img
        })
    };
    handleWaterMarkImageChange = (e) => {
        let img = e.target.files[0];
        this.setState({
            watermark_imageShown: URL.createObjectURL(img),
            watermark_image: img
        })
    };

    handleImageUpload = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
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
                    image_path: res.data.data
                })
            })
            .catch(err => console.log(err));
    };

    handleWatermarkUpload = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.watermark_image, this.state.watermark_image.name);
        let url = 'http://localhost:8000/api/image/';

        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    watermark_image_path: res.data.data
                })
                // console.log(this.state.image.name);
            })
            .catch(err => console.log(err));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image_path', this.state.image_path);
        form_data.append('watermark_image_path', this.state.watermark_image_path);
        let url = 'http://localhost:8000/watermarking/'

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
                    watermarked_image: res.data.watermarked_image,
                    loading: false
                })


            })
            .catch(err => console.log(err));
    };

    DownloadImageonclick = () => {
        let imagePath = this.state.watermarked_image
        let fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1)
        saveAs(imagePath, fileName);
    };

    render() {
        // const { loading } = this.state.loading;
        return (
            <div>
                <form >
                    <dl className='watermarkingList'>
                        <dt>Important Note</dt>
                        <ul>
                            <i><li><dd>Original image must be .jpg extension.</dd></li></i>
                        </ul>
                    </dl>
                    <h4 className='title_original_Image'>Original Image</h4>
                    <h4 className='title_watermark_Image'>Watermark Image</h4>
                    <h4 className='title_watermarked_Image'>Image after Watermarking</h4>
                    <img id='imageWatermarking' src={this.state.imageShown} />
                    <img id='imageWatermarking' src={this.state.watermark_imageShown} />
                    <img id='imageWatermarking' src={this.state.watermarked_image} />

                    <div id='choose'>
                        <label for="coverImage" className="btn_image_choose">Choose the image</label>
                        <label for="secretImage" className="btn_watermark_choose">Choose watermark image</label>
                        <input type="file" className='input' id="coverImage" accept="image/png, image/jpeg" onChange={this.handleImageChange} required />
                        <input type="file" className='input' id="secretImage" accept="image/png, image/jpeg" onChange={this.handleWaterMarkImageChange} required />
                        <Button disabled={this.state.loading} onClick={this.handleSubmit} className='watermarking' >
                            {this.state.loading ?
                                <div>
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                    Loading...
                                </div>
                                :
                                ' Apply Watermarking'
                            }
                        </Button>{' '}
                    </div>

                    <div id='upload'>
                        <input type="submit" onClick={this.handleImageUpload} className='btn_image_upload' value='Upload Image' />
                        <input type="submit" onClick={this.handleWatermarkUpload} className='btn_watermark_upload' value='Upload Image' />


                        {/* <img className='imgDownload' src="http://localhost:8000/media/images/watermarked.png" alt="" /> */}
                        <button onClick={this.DownloadImageonclick} className='watermarking'>Download Watermarked image</button>
                    </div>


                </form>
            </div>
        );
    }
}



export default Watermarking;


{/* <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        /> */}

                                 //   <Spinner
                        //   as="span"
                        //   animation="border"
                        //   size="sm"
                        //   role="status"
                        //   aria-hidden="true"
                        // />
                        // <span className="sr-only">Loading...</span>