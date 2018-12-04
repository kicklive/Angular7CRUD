"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/v1/products';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getProducts = function () {
        return this.http.get(apiUrl).pipe(operators_1.tap(function (heroes) { return console.log('fetched products'); }), operators_1.catchError(this.handleError('getProducts', [])));
    };
    ApiService.prototype.addProduct = function (product) {
        return this.http.post(apiUrl, product, httpOptions).pipe(operators_1.tap(function (product) { return console.log("added product w/ id=" + product.id); }), operators_1.catchError(this.handleError('addProduct')));
    };
    ApiService.prototype.updateProduct = function (id, product) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, product, httpOptions).pipe(operators_1.tap(function (_) { return console.log("updated product id=" + id); }), operators_1.catchError(this.handleError('updateProduct')));
    };
    ApiService.prototype.deleteProduct = function (id) {
        var url = apiUrl + "/" + id;
        return this.http["delete"](url, httpOptions).pipe(operators_1.tap(function (_) { return console.log("deleted product id=" + id); }), operators_1.catchError(this.handleError('deleteProduct')));
    };
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            //TODO: send the error to remote logging infrastructure
            console.error(error); //log to console instead
            //Let the app keep running by returning an empty result
            return rxjs_1.of(result);
        };
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
