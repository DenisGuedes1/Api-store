"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllproducts_1 = require("../controlleer/products/getAllproducts");
const userNotLogin = (0, express_1.Router)();
userNotLogin.get("", getAllproducts_1.getAllproductsController);
exports.default = userNotLogin;
