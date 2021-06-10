/////AWS STARTS


//   // * BUSINESS GALLERY IMAGES
//   // * MULTIPLE FILE UPLOADS
//   /// Multiple File Uploads ( max 4 )
//   const uploadsBusinessGallery = multer({
//     storage: multerS3({
//      s3: s3,
//      bucket: 'bucketnewfinal',
//      acl: 'public-read',
//      key: function (req, file, cb) {
//       cb( null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
//      }
//     }),
//     limits:{ fileSize: 2000000 }, 
//     fileFilter: function( req, file, cb ){
//      checkFileType( file, cb );
//     }
//    }).array( 'galleryImage', 4 );/**
//     * @route POST /api/profile/business-gallery-upload
//     * @desc Upload business Gallery images
//     * @access public
//     */
//    router.post('/multiple-file-upload', ( req, res ) => {uploadsBusinessGallery( req, res, ( error ) => {
//      console.log( 'files', req.files );
//      if( error ){
//       console.log( 'errors', error );
//       res.json( { error: error } );
//      } else {
//       // If File not found
//       if( req.files === undefined ){
//        console.log( 'Error: No File Selected!' );
//        res.json( 'Error: No File Selected' );
//       } else {
//        // If Success
//        let fileArray = req.files,
//         fileLocation;const galleryImgLocationArray = [];
//        for ( let i = 0; i < fileArray.length; i++ ) {
//         fileLocation = fileArray[ i ].location;
//         console.log( 'filenm', fileLocation );
//         galleryImgLocationArray.push( fileLocation )
//        }
//        // Save the file name into database
//         res.json( {
//         filesArray: fileArray,
//         locationArray: galleryImgLocationArray
//        });
//       }
//      }
//     });
//    });// We export the router so that the server.js file can pick it up