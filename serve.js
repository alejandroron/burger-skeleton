"use strict";

// Generate webpack config with CLI service
const webpackConfig = require("@vue/cli-service/webpack.config.js");

// Create express app
const express = require("express");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Configure webpack as middleware
const webpack = require("webpack");

webpackConfig.entry.app.unshift('webpack-hot-middleware/client');

const compiler = webpack(webpackConfig);
const devMiddleware = require('webpack-dev-middleware'); // eslint-disable-line

app.use(devMiddleware(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { "Access-Control-Allow-Origin": "*" },
  stats: { colors: true }
}));

const hotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
app.use(hotMiddleware(compiler, {
  log: console.log
}));

/*
 EVERYTING ABOVE DOESN'T NEED TO BE UNDERSTOOD OR CHANGED
*/

const Data = require("./dataHandler.js");

var data = new Data();
data.initializeData();

io.on('connection', function (socket) {
  
  // on client connect
  socket.emit('initialize', {
    orders: data.getAllOrders(),
    uiLabels: data.getUILabels()
  });

  // When someone orders something
  socket.on('order', function (order) {
    var newOrderID = data.addOrder(order);
    console.log("order total: " + order.price);

    // Kitchen Order page isn't receiving this socket emit call
    // it has to do a refresh and use initialize to get new orders
    socket.emit('newOrder', newOrderID, data.getAllOrders()[newOrderID]);
  });

  // send UI labels in the chosen language
  socket.on('switchLang', function (lang) {
    socket.emit('switchLang', data.getUILabels(lang));
  });

  // when order is marked as done, send updated queue to all connected clients
  socket.on('orderDone', function (orderId) {
    data.setOrderStatus(orderId, 'done');
    io.emit('currentQueue', {orders: data.getAllOrders() });
  });

  socket.on('orderStarted', function (orderId) {
    data.setOrderStatus(orderId, 'started');
    io.emit('currentQueue', {orders: data.getAllOrders() });
  });

  socket.on('orderNotStarted', function (orderId) {
    data.setOrderStatus(orderId, 'non-started');
    io.emit('currentQueue', {orders: data.getAllOrders() });
  });

  socket.on('updateStock', function (item, saldo) {
    data.changeStock(item, saldo);
    io.emit('currentQueue', {ingredients: data.getIngredients() });
  });
  socket.on('modified',function() {
	  io.emit('modified');
  });
});
const port = 8080;
http.listen(port, function() {
  console.log("Developer server running on http://localhost:" + port);
});
