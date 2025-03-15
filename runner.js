const Conrtoller = require('./Conrtoller');
const View = require('./View');
const Model = require('./classModel');

const controller = new Conrtoller(new Model(), new View());
