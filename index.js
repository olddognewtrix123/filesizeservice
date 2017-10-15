var express = require('express');
var multer = require('multer');
var cors = require ('cors');
var bodyParser = require('body-parser');

var upload = multer({dest:'uploads/'})

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//gotta connect index.js to index.html
app.get('/', function(req, res, next){
  res.sendFile(__dirname + "/index.html");
})
// there is a better way to do this where using express you create a public folder
// that holds all your views then you use
//'app.use(express.static(__dirname + '/public'));' saves time and code

app.post('/upload', upload.single('file'), function(req, res, next){
// return (res.json(req.file.size);
res.json({size: req.file.size});

});

app.listen(process.env.PORT || 3000, function(){
  console.log("Yup, it's werkin!");
})
