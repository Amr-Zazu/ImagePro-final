import React, { Component } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';

import './style.css' 

class UploadImage extends Component {
    constructor() {
        super();
        this.state = {
            // 'images': [],
            image: null,
            imageShown: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleImageChange = (e) => {
        let img = e.target.files[0];
        this.setState({
            imageShown: URL.createObjectURL(img),
            image: img
        })
    };
    handleUpload = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image , this.state.image.name);
        let url = 'http://localhost:8000/api/image/';
        
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data' ,
            }
        })
        .then(res => {
        // console.log(res.data);
        // console.log(this.state.image.name);
    })
        .catch(err => console.log(err)) ;
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image_name',this.state.image.name , this.state.image.name);
        let url = 'http://localhost:8000/image_name/'

        axios.post(url , form_data , {
            headers: {
                'content-type': 'multipart/form-data' ,
            }
        })
        .then(res => {
            console.log(res.data);
            // console.log(this.state.image.name);
        })
            .catch(err => console.log(err)) ;
        };

    render() {
        return (
            <div>
                <form onSubmit={this.handleUpload}>
                    <img id='image' src={this.state.imageShown} />

                    <label for="fileUpload" className="amr">Choose an Image</label>

                    <input type="file" className='input'
                        id="fileUpload"
                        accept="image/png, image/jpeg" onChange={this.handleImageChange} required />
                    <input type="submit" className='amr' value='Upload Image' />
                </form>

                <form onSubmit={this.handleSubmit}>
                    <img id='image' src='' />

                    <input type="submit" className='amr' value='Do stegnagoraphy' />
                </form>
            </div>
            //   </ul>
        );
    }
}

export default UploadImage;





  //   state = {
    //     // title: '',
    //     // description: '',
    //     image: null,
    //     imageShown: null
    //   };


    //   componentDidMount() {
    //           this.getItems();
    //         }

    // getItems() {
    //     fetch('http://localhost:8000/api/image/')
    //         .then(results => results.json())
    //         .then(results => this.setState({ 'images': results }));
    // }

    
    
    // this.setState({
        //     image : URL.revokeObjectURL(this.state.image)
        // })

        // let image22 = URL.revokeObjectURL(this.state.image)

        // var content = this.state.image;
        // var blob = new Blob([content], { type: 'multipart/form-data' });


               
        
        
        // form_data.append('title', this.state.title);
        // form_data.append('description', this.state.description);




                  // <ul>
            //   {this.state.images.map(function(image, index) {
            //       // return <ContentItem item={item} key={index} />
            //       return
            //     (
            //        <div key={index}>
            //             <img id='image' src= {image.image} />

            //        </div>
            //      ) 
            //     // return <h1>item={item} key={index}</h1>  
            //   })}


               // var request = new XMLHttpRequest();
        // request.open("POST", "http://localhost:8000/api/image/");
        // request.send(form_data)




               {/* <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/> */}


                    {/* <input type="text" placeholder='Description' id='description' value={this.state.description} onChange={this.handleChange} required/>  */}