"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_core_pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/pages/dashboard-page/dashboard-page.component */ 64821);
/* harmony import */ var _app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/route-config.service */ 23642);
/* harmony import */ var _app_pages_dashboard_dashboard_settings_page_dashboard_settings_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/dashboard/dashboard-settings-page/dashboard-settings-page.component */ 16662);
/* harmony import */ var _app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/is-dirty-guard.service */ 71885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: '',
        component: _app_core_pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_1__.DashboardPageComponent,
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Dashboard') }
    },
    {
        path: 'settings',
        component: _app_pages_dashboard_dashboard_settings_page_dashboard_settings_page_component__WEBPACK_IMPORTED_MODULE_3__.DashboardSettingsPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_4__.IsDirtyGuardService],
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'), notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated dashboard settings.') }
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ROUTES,
            multi: true,
            useFactory: (routeConfigService) => {
                routeConfigService.inject('dashboard', routes);
                return routes;
            },
            deps: [_app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__.RouteConfigService]
        }
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 16662:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-settings-page/dashboard-settings-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardSettingsPageComponent": () => (/* binding */ DashboardSettingsPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_core_services_dashboard_widget_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/dashboard-widget-config.service */ 87560);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_core_components_intuition_selection_list_page_selection_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/core/components/intuition/selection-list-page/selection-list-page.component */ 35939);









class DashboardSettingsPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_3__.BaseSelectionListPageComponent {
    constructor(dashboardWidgetConfigService, router) {
        super();
        this.dashboardWidgetConfigService = dashboardWidgetConfigService;
        this.router = router;
        this.config = {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled widgets'),
            hasSelectAllButton: true,
            multiple: true,
            textProp: 'title',
            valueProp: 'id',
            hintProp: 'description',
            selectedProp: 'enabled',
            updateStoreOnSelectionChange: true,
            store: {
                data: [],
                sorters: [
                    {
                        dir: 'asc',
                        prop: 'title'
                    }
                ]
            },
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'click',
                        click: this.onSubmit.bind(this)
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/dashboard'
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.dashboardWidgetConfigService.configs$.subscribe((widgets) => {
            const data = [];
            const enabledWidgets = this.dashboardWidgetConfigService.getEnabled();
            lodash__WEBPACK_IMPORTED_MODULE_1__.forEach(widgets, (widget) => {
                data.push({
                    id: widget.id,
                    title: widget.title,
                    description: widget.description,
                    enabled: enabledWidgets.includes(widget.id)
                });
            });
            this.config.store.data = [...data];
        });
    }
    onSubmit(buttonConfig, store, value) {
        this.markAsPristine();
        this.dashboardWidgetConfigService.setEnabled(value);
        this.router.navigate(['/dashboard']);
    }
}
DashboardSettingsPageComponent.ɵfac = function DashboardSettingsPageComponent_Factory(t) { return new (t || DashboardSettingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_core_services_dashboard_widget_config_service__WEBPACK_IMPORTED_MODULE_2__.DashboardWidgetConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
DashboardSettingsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardSettingsPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function DashboardSettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "omv-intuition-selection-list-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_selection_list_page_selection_list_page_component__WEBPACK_IMPORTED_MODULE_4__.SelectionListPageComponent], encapsulation: 2 });


/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 40668);
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/core.module */ 40294);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/material.module */ 63806);
/* harmony import */ var _app_pages_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/dashboard/dashboard-routing.module */ 99366);
/* harmony import */ var _app_pages_dashboard_dashboard_settings_page_dashboard_settings_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/dashboard/dashboard-settings-page/dashboard-settings-page.component */ 16662);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _app_pages_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule,
        _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_app_pages_dashboard_dashboard_settings_page_dashboard_settings_page_component__WEBPACK_IMPORTED_MODULE_3__.DashboardSettingsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _app_pages_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule,
        _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map