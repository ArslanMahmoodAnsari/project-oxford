/*dependencies*/
const express = require("express");
const bodyParser = require("body-parser");
const oxford = require('project-oxford'), client = new oxford.Client('0bd837cc949249bea74f91fd34a55d69');
const mongoose = require('mongoose');
const app = express();

const faces = require('./routes/faces');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//connection to mLab
mongoose.connect('mongodb://root:toor@ds161179.mlab.com:61179/first_project');

app.use('/api/faces', faces);

/*Server Setup*/
app.use(express.static(__dirname + '/public'));
app.listen(3000);
console.log("working on 3000");
