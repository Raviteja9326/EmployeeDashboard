function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar>\n</app-navbar>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm justify-content-center bg-light\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item pr-3\">\n            <a routerLink=\"task1\">task1</a>\n        </li>\n        <li class=\"nav-item\">\n            <a routerLink=\"task2\">task 2</a>\n        </li>\n    </ul>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task1/task1.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task1/task1.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTask1Task1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center mt-4 mb-4\">\n    <button type=\"reset\" class=\"btn btn-danger\" (click)=\"sor()\">{{buttonName}}</button>\n</div>\n\n<div *ngIf=\"setting\">\n    <form [formGroup]=\"form\">\n        <mat-checkbox *ngFor=\"let cd of columnDefinitions\" [formControlName]=\"cd.def\"><span\n                class=\"pr-3\">{{cd.label}}</span></mat-checkbox>\n    </form>\n</div>\n<div *ngIf=\"!(setting)\">\n    <mat-table class=\"mat-elevation-z8\" [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"Sno\">\n            <mat-header-cell *matHeaderCellDef> S.no </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.Sno}} </mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"DOB\">\n            <mat-header-cell *matHeaderCellDef> Date of Birth </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.DOB}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"gender\">\n            <mat-header-cell *matHeaderCellDef> gender </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.gender}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"address\">\n            <mat-header-cell *matHeaderCellDef> address </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.address}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"address1\">\n            <mat-header-cell *matHeaderCellDef> address1 </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.address1}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"address2\">\n            <mat-header-cell *matHeaderCellDef> address2 </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.address2}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"state\">\n            <mat-header-cell *matHeaderCellDef> state </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.state}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"city\">\n            <mat-header-cell *matHeaderCellDef> city </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.city}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"pincode\">\n            <mat-header-cell *matHeaderCellDef> pincode </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.pincode}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"educationaldetails\">\n            <mat-header-cell *matHeaderCellDef> educationaldetails </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.educationaldetails}} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"getDisplayedColumns()\">\n        </mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: getDisplayedColumns()\"></mat-row>\n    </mat-table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task2/task2.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task2/task2.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTask2Task2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-4 mb-2 order-md-1\">\n            <mat-card>\n                <mat-card-header class=\"float-left\">\n                    <mat-card-title>Paitent Details</mat-card-title>\n                </mat-card-header>\n                <mat-card-header class=\"float-right\">\n                    <span class=\"material-icons pr-2\">\n                        create\n                    </span>\n                    <span class=\"material-icons\">\n                        add\n                    </span>\n                </mat-card-header>\n\n                <mat-card-content>\n                    <form [formGroup]=\"patient\">\n                        <mat-form-field appearance=\"outline\" class=\"d-block\">\n                            <mat-label>Name</mat-label>\n                            <input matInput class=\"col-lg-12\" formControlName=\"names\" placeholder=\"Placeholder\">\n                            <mat-error *ngIf=\"patient.get('names').hasError('required')\">\n                                <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                            </mat-error>\n                        </mat-form-field>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">DOB:<span class=\"pl-2\">17/11/1991</span></p>\n                            <p class=\"col-lg-4\">Age:<span class=\"pl-2\">22</span></p>\n                            <p class=\"col-lg-4\">Gender:<span class=\"pl-2\">M</span></p>\n                        </div>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">Ins:<span class=\"pl-2\">cvsk</span></p>\n                            <p class=\"col-lg-4\">Group:<span class=\"pl-2\">Gca165</span></p>\n                            <p class=\"col-lg-4\">Rel:<span class=\"pl-2\">Child</span></p>\n                        </div>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">Rel:<span class=\"pl-2\">Child</span></p>\n                            <p class=\"col-lg-8\">Address:<span class=\"pl-2\">Hyderdad</span></p>\n                        </div>\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n        <div class=\"col-lg-8 mb-2 order-md-4\">\n            <mat-card>\n                <div class=\"float-left\">\n                    <mat-card-header>\n                        <mat-card-title>Rx Details</mat-card-title>\n                    </mat-card-header>\n                </div>\n                <div class=\"float-right\">\n                    <mat-card-header>\n                        <span class=\"pr-4\" style=\"\n                        position: relative;\n                        top: 6px;\n                    \">\n                            <mat-checkbox class=\"example-margin\">Piorty</mat-checkbox>\n                        </span>\n                        <span class=\"pr-3\">\n                            <div class=\"form-group row\">\n                                <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label\">Orderdate</label>\n                                <div class=\"col-sm-9\">\n                                    <input type=\"date\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n                                </div>\n                            </div>\n                        </span>\n                        <span class=\"pr-3\">\n                            <div class=\"row\">\n                                <label for=\"inputEmail3\" class=\"col-sm-4 col-form-label\">Refill Qty</label>\n                                <div class=\"col-sm-8\">\n                                    <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\">\n                                </div>\n                            </div>\n                        </span>\n                        <span class=\"material-icons\">\n                            add\n                        </span>\n                    </mat-card-header>\n                </div>\n                <br />\n                <br />\n                <br />\n                <br />\n                <mat-card-content>\n                    <p>retails(0)</p>\n                </mat-card-content>\n            </mat-card>\n            <div class=\"row\">\n                <div class=\"col-lg-12 mt-2 sec order-md-5\">\n                    <mat-card>\n                        <mat-card-content>\n                            <form [formGroup]=\"retail\">\n                                <div class=\"row\">\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names1\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names1').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names2\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names2').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names3\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names3').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names4\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names4').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names14\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names14').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names5\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names5').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names6\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names6').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names7\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names7').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names8\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names8').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names9\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names9').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-4\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-lg-8\" formControlName=\"names10\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names10').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-8\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names11\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names11').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-8\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput class=\"col-md-8\" formControlName=\"names12\"\n                                                    placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retail.get('names12').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                </div>\n                            </form>\n                        </mat-card-content>\n                        <mat-card-content class=\"secs\" style=\"\n                        background: #f7f7f7;\n                    \">\n                            <form [formGroup]=\"retails\">\n                                <div class=\"row\">\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names99\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names99').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names98\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names98').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names97\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names97').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names96\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names96').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names95\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names95').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names94\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names94').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names93\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names93').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names92\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names92').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names91\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names91').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names90\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names90').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                                <div class=\"row\">\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names89\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names89').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n                                    <p class=\"col-lg-6\">Bill To<span>\n                                            <mat-form-field appearance=\"outline\">\n                                                <input matInput formControlName=\"names88\" placeholder=\"Cash\">\n                                                <mat-error *ngIf=\"retails.get('names88').hasError('required')\">\n                                                    <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                                                </mat-error>\n                                            </mat-form-field>\n                                        </span></p>\n\n                                </div>\n                            </form>\n                        </mat-card-content>\n\n                    </mat-card>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-4 mb-2 order-md-2\">\n            <mat-card>\n                <mat-card-header class=\"float-left\">\n                    <mat-card-title>Prescriber Details</mat-card-title>\n                </mat-card-header>\n                <mat-card-header class=\"float-right\">\n                    <span class=\"material-icons pr-2\">\n                        create\n                    </span>\n                    <span class=\"material-icons\">\n                        add\n                    </span>\n                </mat-card-header>\n\n                <mat-card-content>\n                    <form [formGroup]=\"Prescriber\">\n                        <mat-form-field appearance=\"outline\" class=\"d-block\">\n                            <mat-label>Name</mat-label>\n                            <input matInput class=\"col-lg-12\" formControlName=\"names\" placeholder=\"Placeholder\">\n                            <mat-error *ngIf=\"Prescriber.get('names').hasError('required')\">\n                                <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                            </mat-error>\n                        </mat-form-field>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">DOB:<span class=\"pl-2\">17/11/1991</span></p>\n                            <p class=\"col-lg-4\">Age:<span class=\"pl-2\">22</span></p>\n                            <p class=\"col-lg-4\">Gender:<span class=\"pl-2\">M</span></p>\n                        </div>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">Ins:<span class=\"pl-2\">cvsk</span></p>\n                            <p class=\"col-lg-4\">Group:<span class=\"pl-2\">Gca165</span></p>\n                            <p class=\"col-lg-4\">Rel:<span class=\"pl-2\">Child</span></p>\n                        </div>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-12\">Address:<span class=\"pl-2\">Hyderdad</span></p>\n                        </div>\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-4 order-md-3\">\n            <mat-card>\n                <mat-card-header class=\"float-left\">\n                    <mat-card-title>Drug Details</mat-card-title>\n                </mat-card-header>\n                <mat-card-header class=\"float-right\">\n                    <span class=\"material-icons pr-2\">\n                        create\n                    </span>\n                    <span class=\"material-icons\">\n                        add\n                    </span>\n                </mat-card-header>\n\n                <mat-card-content>\n                    <form [formGroup]=\"Drug\">\n                        <mat-form-field appearance=\"outline\" class=\"d-block\">\n                            <mat-label>Name</mat-label>\n                            <input matInput class=\"col-lg-12\" formControlName=\"names\" placeholder=\"Placeholder\">\n                            <mat-error *ngIf=\"Drug.get('names').hasError('required')\">\n                                <sup class=\"required\" title=\"Required\">*</sup>Field is Required!\n                            </mat-error>\n                        </mat-form-field>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">DOB:<span class=\"pl-2\">17/11/1991</span></p>\n                            <p class=\"col-lg-4\">Age:<span class=\"pl-2\">22</span></p>\n                            <p class=\"col-lg-4\">Gender:<span class=\"pl-2\">M</span></p>\n                        </div>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">Ins:<span class=\"pl-2\">cvsk</span></p>\n                            <p class=\"col-lg-4\">Group:<span class=\"pl-2\">Gca165</span></p>\n                            <p class=\"col-lg-4\">Rel:<span class=\"pl-2\">Child</span></p>\n                        </div>\n                        <div class=\"form-group row\">\n                            <p class=\"col-lg-4\">Rel:<span class=\"pl-2\">Child</span></p>\n                            <p class=\"col-lg-4\">Address:<span class=\"pl-2\">Hyderdad</span></p>\n                            <p class=\"col-lg-4\">Rel:<span class=\"pl-2\">Child</span></p>\n                        </div>\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _task2_task2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task2/task2.component */
    "./src/app/task2/task2.component.ts");
    /* harmony import */


    var _task1_task1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./task1/task1.component */
    "./src/app/task1/task1.component.ts");

    var routes = [{
      path: "",
      redirectTo: "task2",
      pathMatch: "full"
    }, {
      path: "task2",
      component: _task2_task2_component__WEBPACK_IMPORTED_MODULE_3__["Task2Component"]
    }, {
      path: "task1",
      component: _task1_task1_component__WEBPACK_IMPORTED_MODULE_4__["Task1Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'kayaksoftware';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _task2_task2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./task2/task2.component */
    "./src/app/task2/task2.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _task1_task1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./task1/task1.component */
    "./src/app/task1/task1.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _task2_task2_component__WEBPACK_IMPORTED_MODULE_8__["Task2Component"], _task1_task1_component__WEBPACK_IMPORTED_MODULE_10__["Task1Component"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
      imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/task1/task1.component.css":
  /*!*******************************************!*\
    !*** ./src/app/task1/task1.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTask1Task1ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\r\n    font-family: Lato;\r\n  }\r\n  \r\n  .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzazEvdGFzazEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC90YXNrMS90YXNrMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/task1/task1.component.ts":
  /*!******************************************!*\
    !*** ./src/app/task1/task1.component.ts ***!
    \******************************************/

  /*! exports provided: Task1Component */

  /***/
  function srcAppTask1Task1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task1Component", function () {
      return Task1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Todo = function Todo() {
      _classCallCheck(this, Todo);
    };

    var Task1Component = /*#__PURE__*/function () {
      function Task1Component() {
        _classCallCheck(this, Task1Component);

        this.setting = false;
        this.buttonName = 'edit';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          Sno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
          educationaldetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.Sno = this.form.get('Sno');
        this.name = this.form.get('name');
        this.DOB = this.form.get('DOB');
        this.gender = this.form.get('gender');
        this.address = this.form.get('address');
        this.address1 = this.form.get('address1');
        this.address2 = this.form.get('address2');
        this.state = this.form.get('state');
        this.city = this.form.get('city');
        this.pincode = this.form.get('pincode');
        this.educationaldetails = this.form.get('educationaldetails');
        /**
         * Control column ordering and which columns are displayed.
         */

        this.columnDefinitions = [{
          def: 'Sno',
          label: 'Sno',
          hide: this.Sno.value
        }, {
          def: 'name',
          label: 'name',
          hide: this.name.value
        }, {
          def: 'DOB',
          label: 'DOB',
          hide: this.DOB.value
        }, {
          def: 'gender',
          label: 'gender',
          hide: this.gender.value
        }, {
          def: 'address',
          label: 'address',
          hide: this.address.value
        }, {
          def: 'address1',
          label: 'address1',
          hide: this.address1.value
        }, {
          def: 'address2',
          label: 'address2',
          hide: this.address2.value
        }, {
          def: 'state',
          label: 'state',
          hide: this.state.value
        }, {
          def: 'city',
          label: 'city',
          hide: this.city.value
        }, {
          def: 'pincode',
          label: 'pincode',
          hide: this.pincode.value
        }, {
          def: 'educationaldetails',
          label: 'educationaldetails',
          hide: this.educationaldetails.value
        }];
        var todos = [{
          Sno: '1',
          name: 'ravi',
          DOB: "12-10-15",
          gender: 'Male',
          address: 'hyderbad1',
          address1: 'hyderbad2',
          address2: 'hyderbad3',
          state: "telangana",
          city: "hyderbad",
          pincode: 500085,
          educationaldetails: "b.tech",
          complete: false
        }, {
          Sno: '2',
          name: 'teja',
          DOB: "12-10-15",
          gender: 'Male',
          address: 'hyderbad1',
          address1: 'hyderbad2',
          address2: 'hyderbad3',
          state: "telangana",
          city: "hyderbad",
          pincode: 500085,
          educationaldetails: "b.tech",
          complete: false
        }, {
          Sno: '3',
          name: 'sravani',
          DOB: "12-10-15",
          gender: 'Male',
          address: 'hyderbad1',
          address1: 'hyderbad2',
          address2: 'hyderbad3',
          state: "telangana",
          city: "hyderbad",
          pincode: 500085,
          educationaldetails: "b.tech",
          complete: false
        }, {
          Sno: '4',
          name: 'rajesh',
          DOB: "12-10-15",
          gender: 'Male',
          address: 'hyderbad1',
          address1: 'hyderbad2',
          address2: 'hyderbad3',
          state: "telangana",
          city: "hyderbad",
          pincode: 500085,
          educationaldetails: "b.tech",
          complete: false
        }, {
          Sno: '5',
          name: 'suresh',
          DOB: "12-10-15",
          gender: 'Male',
          address: 'hyderbad1',
          address1: 'hyderbad2',
          address2: 'hyderbad3',
          state: "telangana",
          city: "hyderbad",
          pincode: 500085,
          educationaldetails: "b.tech",
          complete: false
        }];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](todos);
      }

      _createClass(Task1Component, [{
        key: "getDisplayedColumns",
        value: function getDisplayedColumns() {
          return this.columnDefinitions.filter(function (cd) {
            return !cd.hide;
          }).map(function (cd) {
            return cd.def;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.sucess();
        }
      }, {
        key: "sucess",
        value: function sucess() {
          var _this = this;

          var o1 = this.Sno.valueChanges;
          var o2 = this.name.valueChanges;
          var o3 = this.DOB.valueChanges;
          var o4 = this.gender.valueChanges;
          var o5 = this.address.valueChanges;
          var o6 = this.address1.valueChanges;
          var o7 = this.address2.valueChanges;
          var o8 = this.state.valueChanges;
          var o9 = this.city.valueChanges;
          var o10 = this.pincode.valueChanges;
          var o11 = this.educationaldetails.valueChanges;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11).subscribe(function (v) {
            _this.columnDefinitions[0].hide = _this.Sno.value;
            _this.columnDefinitions[1].hide = _this.name.value;
            _this.columnDefinitions[2].hide = _this.DOB.value;
            _this.columnDefinitions[3].hide = _this.gender.value;
            _this.columnDefinitions[4].hide = _this.address.value;
            _this.columnDefinitions[5].hide = _this.address1.value;
            _this.columnDefinitions[6].hide = _this.address2.value;
            _this.columnDefinitions[7].hide = _this.state.value;
            _this.columnDefinitions[8].hide = _this.city.value;
            _this.columnDefinitions[9].hide = _this.pincode.value;
            _this.columnDefinitions[10].hide = _this.educationaldetails.value;
            console.log(_this.columnDefinitions);
          });
        }
      }, {
        key: "sor",
        value: function sor() {
          this.setting = !this.setting;

          if (this.setting) {
            this.buttonName = 'Hide';
            console.log(this.setting);
          } else {
            this.buttonName = 'edit';
          }
        }
      }]);

      return Task1Component;
    }();

    Task1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task1/task1.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task1.component.css */
      "./src/app/task1/task1.component.css"))["default"]]
    })], Task1Component);
    /***/
  },

  /***/
  "./src/app/task2/task2.component.scss":
  /*!********************************************!*\
    !*** ./src/app/task2/task2.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTask2Task2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card {\n  background: #ffffff !important;\n  color: #424242 !important;\n}\n\n@media screen and (min-width: 992px) {\n  .sec {\n    position: absolute;\n  }\n\n  .secs {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzazIvRDpcXGtheWFrc29mdHdhcmUvc3JjXFxhcHBcXHRhc2syXFx0YXNrMi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFzazIvdGFzazIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLGtCQUFBO0VDQUY7O0VEQ0U7SUFDRSxhQUFBO0VDRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rhc2syL3Rhc2syLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM0MjQyNDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNlY3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTt9XHJcbiAgICAuc2Vjc3tcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufSIsIi5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MjQyNDIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnNlYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLnNlY3Mge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/task2/task2.component.ts":
  /*!******************************************!*\
    !*** ./src/app/task2/task2.component.ts ***!
    \******************************************/

  /*! exports provided: Task2Component */

  /***/
  function srcAppTask2Task2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task2Component", function () {
      return Task2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var Task2Component = /*#__PURE__*/function () {
      function Task2Component(formBuilder) {
        _classCallCheck(this, Task2Component);

        this.formBuilder = formBuilder;
        this.patient = this.formBuilder.group({
          names: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.Drug = this.formBuilder.group({
          names: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.Prescriber = this.formBuilder.group({
          names: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.retail = this.formBuilder.group({
          names: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names9: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names10: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names11: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names12: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names13: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names14: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.retails = this.formBuilder.group({
          names99: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names98: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names97: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names96: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names95: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names94: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names93: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names92: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names91: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names90: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names89: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          names88: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(Task2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Task2Component;
    }();

    Task2Component.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    Task2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task2/task2.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task2.component.scss */
      "./src/app/task2/task2.component.scss"))["default"]]
    })], Task2Component);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\kayaksoftware\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map