'use strict';

let csv = require("csvtojson");

let ingredientsDataName = "ingredients";
let transactionsDataName = "transactions";
let defaultLanguage = "en";

// Store data in an object to keep the global namespace clean
function Data() {

  this.data = {};
  this.orders = {};
  this.currentOrderNumber = 0;

  this.getUILabels = function(lang) {
    var ui = require("./data/ui_" + (lang || defaultLanguage) + ".json");
    return ui;
  }

}

/*
  Returns a JSON object array of ingredients with the fields from
  the CSV file, plus a calculated amount in stock, based on
  transactions.
*/
/*Data.prototype.getIngredients = function () {
  var d = this.data;
  return d[ingredientsDataName].map(function (obj) {
    obj.stock = d[transactionsDataName].reduce(function (sum, trans) {
      if (trans.ingredient_id === obj.ingredient_id) {
        return sum + trans.change;
      } else {
        return sum;
      }
    }, 0);
    return obj;
  });
};*/

/*
  Function to load initial data from CSV files into the object
*/
Data.prototype.initializeTable = function (table) {
  csv({ checkType: true })
    .fromFile("./data/" + table + ".csv")
    .then((jsonObj) => {
      //console.log("JSON object", jsonObj, "done");
      this.data[table] = jsonObj;
    });
};

Data.prototype.initializeData = function() {
  console.log("Starting to build data tables");
  // Load initial ingredients. If you want to add columns, do it in the CSV file.
  this.initializeTable(ingredientsDataName);
  // Load initial stock. Make alterations in the CSV file.
  this.initializeTable(transactionsDataName);
}

Data.prototype.getOrderNumber = function () {
  this.currentOrderNumber += 1;
  return this.currentOrderNumber;
}

Data.prototype.addOrder = function (order) {
  var orderId = this.getOrderNumber();
  this.orders[orderId] = order;
  this.orders[orderId].status = "not started";
  return orderId;
};

Data.prototype.changeStock = function (item, saldo) {
  var transactions = this.data[transactionsDataName];
  var transId = transactions[transactions.length - 1].transaction_id;
  transactions.push({
    transaction_id: transId,
    ingredient_id: item.ingredient.ingredient_id,
    change: saldo - item.ingredient.stock
  });
};

Data.prototype.getAllOrders = function () {
  return this.orders;
};

Data.prototype.setOrderStatus = function(orderID, orderStatus){
  this.orders[orderID].status = orderStatus;
}

module.exports = Data;
