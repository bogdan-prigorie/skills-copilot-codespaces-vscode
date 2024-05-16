// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express application
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a simple in-memory database
const comments = [];

// Create a route for