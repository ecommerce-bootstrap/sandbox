import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

class Home extends Component {constructor( props ) {
  super( props );
  this.state = {
   selectedFile: null,
   selectedFiles: null
  }
 }
 singleFileChangedHandler = ( event ) => {
  this.setState({
   selectedFile: event.target.files[0]
  });
 };
 
 singleFileUploadHandler = ( event ) => {
  const data = new FormData();// If file selected
  if ( this.state.selectedFile ) {data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
  axios.post( 'http://localhost:7890/api/profile/profile-img-upload', data, {
    headers: {
     'accept': 'application/json',
     'Accept-Language': 'en-US,en;q=0.8',
     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    }
   })
    .then( ( response ) => { if ( 200 === response.status ) {
      // If file size is larger than expected.
      if( response.data.error ) {
       if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
           console.log('error');
       } else {
        console.log( response.data );// If not the given file type
        
       }
      } else {
       // Success
       let fileName = response.data;
       console.log( 'HELLO FILENAME', fileName );
      }
     }
    }).catch( ( error ) => {
        console.log(error);
   });
  } else {
   // if file not selected throw error
   console.log(error);
  }};


 render() {
  return(
   <div>
    <div>
     {/* <div><img src={} alt={} /></div> */}
     <div>
      <div>
       <h3>Single Image Upload</h3>
       <p>Upload Size: 250px x 250px ( Max 2MB )</p>
      </div>
      <div>
       <p>Please upload an image for your profile</p>
       <input type="file" onChange={this.singleFileChangedHandler}/>
       <div>
        <button onClick={this.singleFileUploadHandler}>Upload!</button>
       </div>
      </div>
     </div>
     </div>
   </div>
  );
 }
}export default Home;