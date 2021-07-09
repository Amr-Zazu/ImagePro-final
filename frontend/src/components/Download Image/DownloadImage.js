import React, { Component } from 'react';
import { saveAs } from 'file-saver';
// function DownloadImage() {
//   const download = e => {
//     console.log(e.target.href);
//     fetch(e.target.href, {
//       method: "GET",
//       headers: {}
//     })
//       .then(response => {
//         response.arrayBuffer().then(function(buffer) {
//           const url = window.URL.createObjectURL(new Blob([buffer]));
//           const link = document.createElement("a");
//           link.href = url;
//           link.setAttribute("download", "image.png"); //or any other extension
//           document.body.appendChild(link);
//           link.click();
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
//   return (
//     <div >
//       <a
//         href="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
//         download
//         onClick={e => download(e)}
//       >
//         <i className="fa fa-download" />
//         download
//       </a>
//     </div>
//   );
// }
// export default DownloadImage ;


// function downloadImage(src) {
//     const img = new Image();
//     img.crossOrigin = 'anonymous';  // This tells the browser to request cross-origin access when trying to download the image data.
//     // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
//     img.src = src;
//     img.onload = () => {
//       // create Canvas
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
//       // create a tag
//       const a = document.createElement('a');
//       a.download = 'download.png';
//       a.href = canvas.toDataURL('image/png');
//       a.click();
//     };
//     return(
//        <div>
//            <button onClick={onload}
//            >Download Image</button>
//        </div>
//     )
//   }
//   export default downloadImage ;

// const download = require('image-downloader')

// options = {
//   url: 'http://someurl.com/image2.jpg',
//   dest: '/path/to/dest/photo.jpg'      // will be saved to /path/to/dest/photo.jpg
// }

// download.image(options)
//   .then(({ filename }) => {
//     console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
//   })
  // .catch((err) => console.error(err))

class downloadImage extends Component {
  DownloadImageonclick = () => {
    let img = document.querySelector('img');
      let imagePath = img.getAttribute('src');
      let fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1)
      saveAs(imagePath, fileName);
  };
    render(){
        return(
            <div className='divDownloadImage'>
            <img className='imgDownload' src="http://localhost:8000/media/images/watermarked.png" alt=""/>
            <button onClick ={this.DownloadImageonclick} className='buttonDownload'>Download</button>
         </div>
        )
    }
}
export default downloadImage ;


// const DownloadButton = props => {
//   const downloadFile = () => {
//     window.location.href = "http://localhost:8000/media/images/watermarked.png"
//   }
//   return (
//             // <button className='buttonDownload' onClick={downloadFile} />
//             <a href='http://localhost:8000/media/images/watermarked.zip'><button>Download</button></a>
//             // <button className='buttonDownload' onClick={downloadFile}>
              

          
          
          
//   )
// }
// export default DownloadButton;