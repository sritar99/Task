const express = require('express');
var bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require("fs");
const multiparty = require("multiparty");

const app = express();
const req1 = require("request");


var urlencodedParser = bodyParser.urlencoded({ extended: false });

/////////////////////////////////////////////////////////////////////

//Don't Uncomment

//global.Uid = 123;

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');
//     },

//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Uid + path.extname(file.originalname));
//     }
// });

// var upload = multer({ storage: storage });

/////////////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



app.post('/', (req, res) => {

    /////////////////////////////////////////////////////////////////////

    //Don't Uncomment

    //var upload = multer({ storage: storage }).single('file_name');
    //Uid = Uid + 1;
    // console.log('Payload Uid:', req.body['Uid']);
    // console.log('Payload File Name : ', req.body['file_name']);


    /////////////////////////////////////////////////////////////////////

    console.log("File Received Successfully ! ");

    let form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
        console.log("Errors : " + err);
        console.log("Uid : " + fields['Uid']);
        console.log(files);
    });

    ////////////////////////////////////////////////////////////////////////////////

    //Uncomment only the part inside this box when you put the URL


    // form.on('file', function(name, file) {
    //     let formData = {
    //         file: {
    //             value: fs.createReadStream(file.path),
    //             options: {
    //                 filename: file.originalFilename
    //             }
    //         }
    //     };
    //     const postUrl = "http://google.com" //replace your upload url here     
    //     req1.post({ url: postUrl, formData: formData }, function(err, httpResponse, body) {
    //         console.log(err);
    //         console.log(httpResponse);
    //         console.log(body);
    //         fs.unlink(file.path, (_err) => {});
    //     });
    //     console.log(file.path);
    // });
    ////////////////////////////////////////////////////////////////////////////////


    res.sendStatus(200);

});

app.listen(3000);
