"use strict"
const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');     

const MONGO_DB_SERVER = process.env.MONGO_DB_SERVER || "localhost"
const MONGO_DB_SERVER_PORT = process.env.MONGO_DB_SERVER_PORT || 27017
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'cep';
const MONGO_DB_USER = encodeURIComponent(process.env.MONGO_DB_USER || "root")
const MONGO_DB_PASS = encodeURIComponent(process.env.MONGO_DB_PASS || "mysecret")

// Connection URL
const uri = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;

console.log(`[MONGODB] connection url: ${uri}`);
exports.parseId =(str) => new mongo.ObjectID(str);
exports.getCli = getCli;
exports.getDB = getDB;
exports.getURI = () => uri;

