// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios' 
// import {
//   Row, Col, Card, CardBody, CardTitle, CardText, CardImg 
// } from 'reactstrap';
// import './index.css' 

// class ContentFeed extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       'items': []
//     }
//   }
//     componentDidMount() {
//       this.getItems();
//     }
  
//     getItems() {
//       fetch('http://localhost:8000/api/item/')
//       .then(results => results.json())
//       // .then(results => console.log(results))
//       .then(results => this.setState({'items': results}));


//     }
//     render() {
//       return  (
//         <ul>
//           {this.state.items.map(function(item, index) {
//               // return <ContentItem item={item} key={index} />
//               return
//             (
//                <div key={index}>
//                  <h1>{item.title}</h1> 
//                  <p>{item.description}</p>
//                </div>
//              ) 
//             // return <h1>item={item} key={index}</h1>  
//           })}
//         </ul>
//       );
//     }
//   }

//   const ContentItem = ({ item }) => (
//     <Row className="ContentItem">
//       <Col xs="3" />
//       <Col xs="12" sm="6">
//         <Card>
//           <CardImg id='image' top width="100%" src={item.image}></CardImg>
//           <CardBody>
//             <CardTitle>
//               {item.title}
//             </CardTitle>
//             <CardText>
//               {item.description}
//             </CardText>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   )

// // class ContentItem extends React.Component {
// //   render() {
// //     return (
// //       <Row className="ContentItem">
// //         <Col xs="3" />
// //         <Col xs="12" sm="6" >
// //           <Card>
// //           {/* <CardImg top width="100%" src={item.image}></CardImg> */}
// //           <CardImg top width="100%" src={this.props.item.image}></CardImg>
// //             <CardBody>
// //               <CardTitle>
// //                 {this.props.item.title}
// //               </CardTitle>
// //               <CardText>
// //                 {this.props.item.description}
// //               </CardText>
// //             </CardBody>
// //           </Card>
// //         </Col>
// //       </Row>
// //     )
// //   }
// // }
  
//   export default ContentFeed ;



// import React from "react";
// import axios from "axios";
  
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       details: [],
//       title: "",
//       description: "",
//       image: null,
//     };
//     this.onImageChange = this.onImageChange.bind(this);
//   }
//     // state = {
//     //     details: [],
//     //     title: "",
//     //     description: "",
//     //     image: "",
//     // };
  
//     componentDidMount() {
//         let data;
  
//         axios
//             .get("http://localhost:8000/api/item/")
//             .then((res) => {
//                 data = res.data;
//                 this.setState({
//                     details: data,
//                 });
//             })
//             .catch((err) => {});
//     }

//     handleInput = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     };
  
//     handleSubmit = (e) => {
//         e.preventDefault();
  
//         axios
//             .post("http://localhost:8000/api/item/", {
//                 title: this.state.title,
//                 description: this.state.description,
//                 image: this.state.image,
//             })
//             .then((res) => {
//                 this.setState({
//                     title: "",
//                     description: "",
//                     image: "",
//                 });
//             })
//             .catch((err) => {});
//     };

//     onImageChange = event => {
//       if (event.target.files && event.target.files[0]) {
//         let img = event.target.files[0];
//         this.setState({
//           image: URL.createObjectURL(img)
//         });
//       }
//     };
  
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <div>
//                             <span>
//                                 {" "}
//                                 Title{" "}
//                             </span>
//                         </div>
//                         <input type="text" 
//                                placeholder="Name of the Poet/Author"
//                                aria-label="Username"
//                                aria-describedby="basic-addon1"
//                                value={this.state.title} name="title"
//                                onChange={this.handleInput} />
//                     </div>
  
//                     <div>
//                         <div >
//                             <span >
//                               description
//                             </span>
//                         </div>
//                         <textarea 
//                                   aria-label="With textarea"
//                                   placeholder="Tell us what you think of ....." 
//                                   value={this.state.description} name="description" 
//                                   onChange={this.handleInput}>
//                         </textarea>
//                     </div>

//                     <div>
//                             <span>
//                                 Image
//                             </span>
//                         {/* <label for="fileUpload">Upload Image</label> */}

//                         <input type="file" id="fileUpload"
//                               //  aria-label="Username"
//                               //  aria-describedby="basic-addon1"
//                               //  value={this.state.image} 
//                                name="image"
//                                accept="image/png, image/jpeg"
//                                onChange={this.onImageChange} required />
//                     </div>


//                     {/* <p>
//             <input type="file"
//                    id="image"
//                    accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
//           </p> */}




  
//                     <button type="submit" >
//                         Submit
//                     </button>
//                 </form>
  
//                 <hr
//                     style={{
//                         color: "#000000",
//                         backgroundColor: "#000000",
//                         height: 0.5,
//                         borderColor: "#000000",
//                     }}
//                 />
  
//                 {/* {this.state.details.map((detail, id) => (
//                     <div key={id}>
//                         <div className="card shadow-lg">
//                             <div className={"bg-" + this.renderSwitch(id % 6) + 
//                                           " card-header"}>Quote {id + 1}</div>
//                             <div className="card-body">
//                                 <blockquote className={"text-" + this.renderSwitch(id % 6) + 
//                                                    " blockquote mb-0"}>
//                                     <h1> {detail.detail} </h1>
//                                     <footer className="blockquote-footer">
//                                         {" "}
//                                         <cite title="Source Title">{detail.name}</cite>
//                                     </footer>
//                                 </blockquote>
//                             </div>
//                         </div>
//                         <span className="border border-primary "></span>
//                     </div>
//                 ))} */}
//             </div>
//         );
//     }
// }
// export default App;




import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    title: '',
    description: '',
    image: null,
    imageShown: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    let img = e.target.files[0];
    this.setState({
      imageShown: URL.createObjectURL(img),
      image: e.target.files[0]
      
    })
  };



  // onImageChange = event => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     this.setState({
  //       image: URL.createObjectURL(img)
  //     });
  //   }
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image);
    form_data.append('title', this.state.title);
    form_data.append('description', this.state.description);
    let url = 'http://localhost:8000/api/item/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
          
          
            <input type="text" placeholder='Description' id='description' value={this.state.description} onChange={this.handleChange} required/>

            <img id='image' src= {this.state.imageShown} />
          
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;