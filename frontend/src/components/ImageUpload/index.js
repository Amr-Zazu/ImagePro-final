import React, { Component } from 'react';

import './style.css'

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img id='image' src={this.state.image} />
            <label for="fileUpload" className="label">Upload Image</label>
            <input type="file" className='input' id="fileUpload" name="myImage" onChange={this.onImageChange} ></input>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageUpload;
