"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("mike", "jaskon");
myCustomer.firstName = "stephhone";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
