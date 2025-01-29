// Create web server
const express = require("express");
const app = express();
const PORT = 3000;

// Import the comments data
const comments = require("./data/comments");

// Import the posts data
const posts = require("./data/posts");

// Import the users data
const users = require("./data/users");