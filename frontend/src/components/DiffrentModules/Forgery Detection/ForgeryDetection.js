import React, { Component } from 'react';
import axios from 'axios';

import './ForgeryStyle.css'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

class ForgeryDetection extends Component {
    constructor() {
        super();
        this.state = {
            // 'images': [],
            image: null,
            imageShown: null,
            image_path: '',
            result: null,
            loading: false,
        }
    }
    handleImageChange = (e) => {
        let img = e.target.files[0];
        this.setState({
            imageShown: URL.createObjectURL(img),
            image: img
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

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image_path', this.state.image_path);
        let url = 'http://localhost:8000/forgeryDetection/'

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
                    result: res.data.result,
                    loading: false,
                })
                console.log(this.state.result)
            })
            .catch(err => console.log(err));
    };

    // Option1() {
    //     return <h3>Image is Forged</h3>;
    //   }

    // Option2() {
    //     return <h3>Image is Authenticated</h3>;





    render() {
        const result = this.state.result
        let text;
        if (result === 1) {
            text = <h4>Image is Forged</h4>;
        } else if (result === 0) {
            text = <h4>Image is Authenticated</h4>;
        }
        console.log(text)
        return (
            <div>
                <form >
                    <dl className='ForgeryList'>
                        <dt>Important Note</dt>
                        <ul>
                            <i><li><dd>Image must be .jpg or .jpeg extension.</dd></li></i>
                        </ul>
                    </dl>
                    <h4 className='title_forgery_Image'>Image to be Detection</h4>
                    <img id='Forgeryimage' src={this.state.imageShown} />

                    <span id='spanText'>
                        {text}
                    </span>


                    <div id='choose'>
                        <label for="coverImage" className="btn_forgery_choose">Choose the image</label>
                        <input type="file" className='input' id="coverImage" accept="image/png, image/jpeg" onChange={this.handleImageChange} required />
                    </div>



                    <div id='upload'>
                        <input type="submit" onClick={this.handleImageUpload} className='forgery_image_upload' value='Upload Image' />
                        {/* <input type="submit" onClick={this.handleSubmit} className='forgeryDetection' value= 'Apply Forgery Detection'/> */}
                        <Button disabled={this.state.loading} onClick={this.handleSubmit} className='forgeryDetection' >
                            {this.state.loading ?
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
                                'Apply Forgery Detection'
                            }
                        </Button>{' '}
                    </div>


                </form>
            </div>
        );
    }
}



export default ForgeryDetection;