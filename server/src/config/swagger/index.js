import express from "express";

const argv = require('minimist')(process.argv.slice(2));
const swagger = require("swagger-node-express");
const bodyParser = require('body-parser');
const app = express();
const subpath = express();
let PORT = process.env.NODE_PORT || 9634;

app.use(bodyParser());
app.use(express.static('dist'));
app.use('/api/v1/', subpath);``
swagger.setAppHandler(subpath);

swagger.setApiInfo({
    title: "node-basic API",
    description: "API for CRUD products",
    termsOfServiceUrl: "",
    contact: "dmitriy@gmail.com",
    license: "",
    licenseUrl: ""
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});
swagger.configureSwaggerPaths('', 'api-docs', '');

// Configure the API domain
let domain = 'localhost';
if(argv.domain !== undefined)
    domain = argv.domain;
else
    console.log('No --domain=xxx specified, taking default hostname "localhost".')

// Configure the API port
if(argv.port !== undefined)
    PORT = argv.port;
else
    console.log('No --port=xxx specified, taking default port ' + PORT + '.')

// Set and display the application URL
const applicationUrl = 'http://' + domain + ':' + PORT;
console.log('snapJob API running on ' + applicationUrl);

swagger.configure(applicationUrl, '1.0.0');

// Start the web server
// app.listen(port, () => console.log( `Swagger listening on port ${port}!` ) );
