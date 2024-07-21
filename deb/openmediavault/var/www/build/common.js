"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["common"],{

/***/ 97713:
/*!**********************************************!*\
  !*** ./src/app/pages/base-page-component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDatatablePageComponent": () => (/* binding */ BaseDatatablePageComponent),
/* harmony export */   "BaseFormPageComponent": () => (/* binding */ BaseFormPageComponent),
/* harmony export */   "BaseSelectionListPageComponent": () => (/* binding */ BaseSelectionListPageComponent)
/* harmony export */ });
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);
/* harmony import */ var _app_core_components_intuition_selection_list_page_selection_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/selection-list-page/selection-list-page.component */ 35939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class BaseFormPageComponent {
    isDirty() {
        return this.page?.isDirty?.() ?? false;
    }
    markAsDirty() {
        this.page.markAsDirty();
    }
    markAsPristine() {
        this.page.markAsPristine();
    }
}
BaseFormPageComponent.ɵfac = function BaseFormPageComponent_Factory(t) { return new (t || BaseFormPageComponent)(); };
BaseFormPageComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseFormPageComponent, viewQuery: function BaseFormPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_1__.FormPageComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } } });
class BaseSelectionListPageComponent {
    isDirty() {
        return this.page?.isDirty?.() ?? false;
    }
    markAsDirty() {
        this.page.markAsDirty();
    }
    markAsPristine() {
        this.page.markAsPristine();
    }
}
BaseSelectionListPageComponent.ɵfac = function BaseSelectionListPageComponent_Factory(t) { return new (t || BaseSelectionListPageComponent)(); };
BaseSelectionListPageComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseSelectionListPageComponent, viewQuery: function BaseSelectionListPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_app_core_components_intuition_selection_list_page_selection_list_page_component__WEBPACK_IMPORTED_MODULE_2__.SelectionListPageComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } } });
class BaseDatatablePageComponent {
    constructor() {
        this.dirty = false;
    }
    isDirty() {
        return this.dirty;
    }
    markAsDirty() {
        this.dirty = true;
    }
    markAsPristine() {
        this.dirty = false;
    }
}
BaseDatatablePageComponent.ɵfac = function BaseDatatablePageComponent_Factory(t) { return new (t || BaseDatatablePageComponent)(); };
BaseDatatablePageComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseDatatablePageComponent, viewQuery: function BaseDatatablePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_0__.DatatablePageComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } } });


/***/ })

}]);
//# sourceMappingURL=common.js.map