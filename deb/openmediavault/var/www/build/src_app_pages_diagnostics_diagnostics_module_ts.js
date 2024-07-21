"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["src_app_pages_diagnostics_diagnostics_module_ts"],{

/***/ 24795:
/*!*****************************************************************!*\
  !*** ./src/app/pages/diagnostics/diagnostics-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosticsRoutingModule": () => (/* binding */ DiagnosticsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/pages/navigation-page/navigation-page.component */ 99076);
/* harmony import */ var _app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/route-config.service */ 23642);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_cpu_rrd_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-cpu-rrd-page.component */ 66210);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_du_rrd_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-du-rrd-page.component */ 63077);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_load_rrd_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-load-rrd-page.component */ 92041);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_memory_rrd_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-memory-rrd-page.component */ 75066);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_network_rrd_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-network-rrd-page.component */ 19055);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_uptime_rrd_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-uptime-rrd-page.component */ 31660);
/* harmony import */ var _app_pages_diagnostics_processes_processes_text_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/diagnostics/processes/processes-text-page.component */ 40132);
/* harmony import */ var _app_pages_diagnostics_report_report_text_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/diagnostics/report/report-text-page.component */ 78900);
/* harmony import */ var _app_pages_diagnostics_services_service_smb_text_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/diagnostics/services/service-smb-text-page.component */ 52809);
/* harmony import */ var _app_pages_diagnostics_services_service_ssh_text_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/diagnostics/services/service-ssh-text-page.component */ 3613);
/* harmony import */ var _app_pages_diagnostics_system_information_system_information_datatable_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/diagnostics/system-information/system-information-datatable-page.component */ 189);
/* harmony import */ var _app_pages_diagnostics_system_logs_system_logs_list_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/diagnostics/system-logs/system-logs-list-page.component */ 8459);
/* harmony import */ var _app_pages_diagnostics_system_logs_system_logs_remote_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/pages/diagnostics/system-logs/system-logs-remote-form-page.component */ 13210);
/* harmony import */ var _app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/is-dirty-guard.service */ 71885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);




















const routes = [
    {
        path: '',
        component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
    },
    {
        path: 'system-information',
        component: _app_pages_diagnostics_system_information_system_information_datatable_page_component__WEBPACK_IMPORTED_MODULE_13__.SystemInformationDatatablePageComponent,
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('System Information') }
    },
    {
        path: 'processes',
        component: _app_pages_diagnostics_processes_processes_text_page_component__WEBPACK_IMPORTED_MODULE_9__.ProcessesTextPageComponent,
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Processes') }
    },
    {
        path: 'report',
        component: _app_pages_diagnostics_report_report_text_page_component__WEBPACK_IMPORTED_MODULE_10__.ReportTextPageComponent,
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Report') }
    },
    {
        path: 'system-logs',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('System Logs') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'logs',
                component: _app_pages_diagnostics_system_logs_system_logs_list_page_component__WEBPACK_IMPORTED_MODULE_14__.SystemLogsListPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Logs') }
            },
            {
                path: 'remote',
                component: _app_pages_diagnostics_system_logs_system_logs_remote_form_page_component__WEBPACK_IMPORTED_MODULE_15__.SystemLogsRemoteFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Remote'),
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated remote system-logs settings.'),
                    editing: true
                }
            }
        ]
    },
    {
        path: 'performance-statistics',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Performance Statistics') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'cpu',
                component: _app_pages_diagnostics_performance_statistics_performance_statistic_cpu_rrd_page_component__WEBPACK_IMPORTED_MODULE_3__.PerformanceStatisticCpuRrdPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('CPU') }
            },
            {
                path: 'disk-usage',
                component: _app_pages_diagnostics_performance_statistics_performance_statistic_du_rrd_page_component__WEBPACK_IMPORTED_MODULE_4__.PerformanceStatisticDuRrdPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disk Usage') }
            },
            {
                path: 'load',
                component: _app_pages_diagnostics_performance_statistics_performance_statistic_load_rrd_page_component__WEBPACK_IMPORTED_MODULE_5__.PerformanceStatisticLoadRrdPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Load Average') }
            },
            {
                path: 'memory',
                component: _app_pages_diagnostics_performance_statistics_performance_statistic_memory_rrd_page_component__WEBPACK_IMPORTED_MODULE_6__.PerformanceStatisticMemoryRrdPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Memory Usage') }
            },
            {
                path: 'network-interfaces',
                component: _app_pages_diagnostics_performance_statistics_performance_statistic_network_rrd_page_component__WEBPACK_IMPORTED_MODULE_7__.PerformanceStatisticNetworkRrdPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Network Interfaces') }
            },
            {
                path: 'uptime',
                component: _app_pages_diagnostics_performance_statistics_performance_statistic_uptime_rrd_page_component__WEBPACK_IMPORTED_MODULE_8__.PerformanceStatisticUptimeRrdPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Uptime') }
            }
        ]
    },
    {
        path: 'services',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Services') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'smb',
                component: _app_pages_diagnostics_services_service_smb_text_page_component__WEBPACK_IMPORTED_MODULE_11__.ServiceSmbTextPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SMB/CIFS') }
            },
            {
                path: 'ssh',
                component: _app_pages_diagnostics_services_service_ssh_text_page_component__WEBPACK_IMPORTED_MODULE_12__.ServiceSshTextPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSH') }
            }
        ]
    }
];
class DiagnosticsRoutingModule {
}
DiagnosticsRoutingModule.ɵfac = function DiagnosticsRoutingModule_Factory(t) { return new (t || DiagnosticsRoutingModule)(); };
DiagnosticsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: DiagnosticsRoutingModule });
DiagnosticsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ROUTES,
            multi: true,
            useFactory: (routeConfigService) => {
                routeConfigService.inject('diagnostics', routes);
                return routes;
            },
            deps: [_app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__.RouteConfigService]
        }
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](DiagnosticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ }),

/***/ 25364:
/*!*********************************************************!*\
  !*** ./src/app/pages/diagnostics/diagnostics.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosticsModule": () => (/* binding */ DiagnosticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/core.module */ 40294);
/* harmony import */ var _app_pages_diagnostics_diagnostics_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/diagnostics/diagnostics-routing.module */ 24795);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_cpu_rrd_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-cpu-rrd-page.component */ 66210);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_du_rrd_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-du-rrd-page.component */ 63077);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_load_rrd_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-load-rrd-page.component */ 92041);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_memory_rrd_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-memory-rrd-page.component */ 75066);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_network_rrd_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-network-rrd-page.component */ 19055);
/* harmony import */ var _app_pages_diagnostics_performance_statistics_performance_statistic_uptime_rrd_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/diagnostics/performance-statistics/performance-statistic-uptime-rrd-page.component */ 31660);
/* harmony import */ var _app_pages_diagnostics_processes_processes_text_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/diagnostics/processes/processes-text-page.component */ 40132);
/* harmony import */ var _app_pages_diagnostics_report_report_text_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/diagnostics/report/report-text-page.component */ 78900);
/* harmony import */ var _app_pages_diagnostics_services_service_smb_text_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/diagnostics/services/service-smb-text-page.component */ 52809);
/* harmony import */ var _app_pages_diagnostics_services_service_ssh_text_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/diagnostics/services/service-ssh-text-page.component */ 3613);
/* harmony import */ var _app_pages_diagnostics_system_information_system_information_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/diagnostics/system-information/system-information-datatable-page.component */ 189);
/* harmony import */ var _app_pages_diagnostics_system_logs_system_logs_list_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/diagnostics/system-logs/system-logs-list-page.component */ 8459);
/* harmony import */ var _app_pages_diagnostics_system_logs_system_logs_remote_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/diagnostics/system-logs/system-logs-remote-form-page.component */ 13210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* eslint-disable max-len */

















class DiagnosticsModule {
}
DiagnosticsModule.ɵfac = function DiagnosticsModule_Factory(t) { return new (t || DiagnosticsModule)(); };
DiagnosticsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: DiagnosticsModule });
DiagnosticsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_pages_diagnostics_diagnostics_routing_module__WEBPACK_IMPORTED_MODULE_1__.DiagnosticsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](DiagnosticsModule, { declarations: [_app_pages_diagnostics_system_information_system_information_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__.SystemInformationDatatablePageComponent,
        _app_pages_diagnostics_system_logs_system_logs_list_page_component__WEBPACK_IMPORTED_MODULE_13__.SystemLogsListPageComponent,
        _app_pages_diagnostics_system_logs_system_logs_remote_form_page_component__WEBPACK_IMPORTED_MODULE_14__.SystemLogsRemoteFormPageComponent,
        _app_pages_diagnostics_processes_processes_text_page_component__WEBPACK_IMPORTED_MODULE_8__.ProcessesTextPageComponent,
        _app_pages_diagnostics_report_report_text_page_component__WEBPACK_IMPORTED_MODULE_9__.ReportTextPageComponent,
        _app_pages_diagnostics_performance_statistics_performance_statistic_cpu_rrd_page_component__WEBPACK_IMPORTED_MODULE_2__.PerformanceStatisticCpuRrdPageComponent,
        _app_pages_diagnostics_performance_statistics_performance_statistic_du_rrd_page_component__WEBPACK_IMPORTED_MODULE_3__.PerformanceStatisticDuRrdPageComponent,
        _app_pages_diagnostics_performance_statistics_performance_statistic_load_rrd_page_component__WEBPACK_IMPORTED_MODULE_4__.PerformanceStatisticLoadRrdPageComponent,
        _app_pages_diagnostics_performance_statistics_performance_statistic_memory_rrd_page_component__WEBPACK_IMPORTED_MODULE_5__.PerformanceStatisticMemoryRrdPageComponent,
        _app_pages_diagnostics_performance_statistics_performance_statistic_network_rrd_page_component__WEBPACK_IMPORTED_MODULE_6__.PerformanceStatisticNetworkRrdPageComponent,
        _app_pages_diagnostics_performance_statistics_performance_statistic_uptime_rrd_page_component__WEBPACK_IMPORTED_MODULE_7__.PerformanceStatisticUptimeRrdPageComponent,
        _app_pages_diagnostics_services_service_smb_text_page_component__WEBPACK_IMPORTED_MODULE_10__.ServiceSmbTextPageComponent,
        _app_pages_diagnostics_services_service_ssh_text_page_component__WEBPACK_IMPORTED_MODULE_11__.ServiceSshTextPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_pages_diagnostics_diagnostics_routing_module__WEBPACK_IMPORTED_MODULE_1__.DiagnosticsRoutingModule] }); })();


/***/ }),

/***/ 66210:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/performance-statistics/performance-statistic-cpu-rrd-page.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceStatisticCpuRrdPageComponent": () => (/* binding */ PerformanceStatisticCpuRrdPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/rrd-page/rrd-page.component */ 71327);


class PerformanceStatisticCpuRrdPageComponent {
    constructor() {
        this.config = {
            graphs: [
                {
                    name: 'cpu-0'
                }
            ]
        };
    }
}
PerformanceStatisticCpuRrdPageComponent.ɵfac = function PerformanceStatisticCpuRrdPageComponent_Factory(t) { return new (t || PerformanceStatisticCpuRrdPageComponent)(); };
PerformanceStatisticCpuRrdPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerformanceStatisticCpuRrdPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PerformanceStatisticCpuRrdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-rrd-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__.RrdPageComponent], encapsulation: 2 });


/***/ }),

/***/ 63077:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/performance-statistics/performance-statistic-du-rrd-page.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceStatisticDuRrdPageComponent": () => (/* binding */ PerformanceStatisticDuRrdPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/rrd-page/rrd-page.component */ 71327);


class PerformanceStatisticDuRrdPageComponent {
    constructor() {
        this.config = {
            graphs: [
                {
                    name: 'df-{{ "root" if mountpoint == "/" else mountpoint | substr(1) | replace("/", "-") }}'
                }
            ],
            label: '{{ devicefile }}{{ " [" + label + "]" if label }}{{ " [" + "System" | translate + "]" if mountpoint == "/" }}',
            store: {
                proxy: {
                    service: 'FileSystemMgmt',
                    get: {
                        method: 'enumerateMountedFilesystems',
                        params: {
                            includeroot: true
                        }
                    }
                },
                sorters: [
                    {
                        prop: 'devicefile',
                        dir: 'asc'
                    }
                ]
            }
        };
    }
}
PerformanceStatisticDuRrdPageComponent.ɵfac = function PerformanceStatisticDuRrdPageComponent_Factory(t) { return new (t || PerformanceStatisticDuRrdPageComponent)(); };
PerformanceStatisticDuRrdPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerformanceStatisticDuRrdPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PerformanceStatisticDuRrdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-rrd-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__.RrdPageComponent], encapsulation: 2 });


/***/ }),

/***/ 92041:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/performance-statistics/performance-statistic-load-rrd-page.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceStatisticLoadRrdPageComponent": () => (/* binding */ PerformanceStatisticLoadRrdPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/rrd-page/rrd-page.component */ 71327);


class PerformanceStatisticLoadRrdPageComponent {
    constructor() {
        this.config = {
            graphs: [
                {
                    name: 'load'
                }
            ]
        };
    }
}
PerformanceStatisticLoadRrdPageComponent.ɵfac = function PerformanceStatisticLoadRrdPageComponent_Factory(t) { return new (t || PerformanceStatisticLoadRrdPageComponent)(); };
PerformanceStatisticLoadRrdPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerformanceStatisticLoadRrdPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PerformanceStatisticLoadRrdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-rrd-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__.RrdPageComponent], encapsulation: 2 });


/***/ }),

/***/ 75066:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/performance-statistics/performance-statistic-memory-rrd-page.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceStatisticMemoryRrdPageComponent": () => (/* binding */ PerformanceStatisticMemoryRrdPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/rrd-page/rrd-page.component */ 71327);


class PerformanceStatisticMemoryRrdPageComponent {
    constructor() {
        this.config = {
            graphs: [
                {
                    name: 'memory'
                }
            ]
        };
    }
}
PerformanceStatisticMemoryRrdPageComponent.ɵfac = function PerformanceStatisticMemoryRrdPageComponent_Factory(t) { return new (t || PerformanceStatisticMemoryRrdPageComponent)(); };
PerformanceStatisticMemoryRrdPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerformanceStatisticMemoryRrdPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PerformanceStatisticMemoryRrdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-rrd-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__.RrdPageComponent], encapsulation: 2 });


/***/ }),

/***/ 19055:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/performance-statistics/performance-statistic-network-rrd-page.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceStatisticNetworkRrdPageComponent": () => (/* binding */ PerformanceStatisticNetworkRrdPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/rrd-page/rrd-page.component */ 71327);


class PerformanceStatisticNetworkRrdPageComponent {
    constructor() {
        this.config = {
            graphs: [
                {
                    name: 'interface-{{ devicename }}'
                }
            ],
            label: '{{ devicename }}',
            store: {
                proxy: {
                    service: 'Network',
                    get: {
                        method: 'enumerateConfiguredDevices',
                        params: {}
                    }
                },
                sorters: [
                    {
                        prop: 'devicefile',
                        dir: 'asc'
                    }
                ]
            }
        };
    }
}
PerformanceStatisticNetworkRrdPageComponent.ɵfac = function PerformanceStatisticNetworkRrdPageComponent_Factory(t) { return new (t || PerformanceStatisticNetworkRrdPageComponent)(); };
PerformanceStatisticNetworkRrdPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerformanceStatisticNetworkRrdPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PerformanceStatisticNetworkRrdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-rrd-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__.RrdPageComponent], encapsulation: 2 });


/***/ }),

/***/ 31660:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/performance-statistics/performance-statistic-uptime-rrd-page.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceStatisticUptimeRrdPageComponent": () => (/* binding */ PerformanceStatisticUptimeRrdPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/rrd-page/rrd-page.component */ 71327);


class PerformanceStatisticUptimeRrdPageComponent {
    constructor() {
        this.config = {
            graphs: [
                {
                    name: 'uptime'
                }
            ]
        };
    }
}
PerformanceStatisticUptimeRrdPageComponent.ɵfac = function PerformanceStatisticUptimeRrdPageComponent_Factory(t) { return new (t || PerformanceStatisticUptimeRrdPageComponent)(); };
PerformanceStatisticUptimeRrdPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerformanceStatisticUptimeRrdPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PerformanceStatisticUptimeRrdPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-rrd-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_rrd_page_rrd_page_component__WEBPACK_IMPORTED_MODULE_0__.RrdPageComponent], encapsulation: 2 });


/***/ }),

/***/ 40132:
/*!******************************************************************************!*\
  !*** ./src/app/pages/diagnostics/processes/processes-text-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessesTextPageComponent": () => (/* binding */ ProcessesTextPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/text-page/text-page.component */ 43145);


class ProcessesTextPageComponent {
    constructor() {
        this.config = {
            hasReloadButton: true,
            request: {
                service: 'System',
                get: {
                    method: 'getTopInfo'
                }
            }
        };
    }
}
ProcessesTextPageComponent.ɵfac = function ProcessesTextPageComponent_Factory(t) { return new (t || ProcessesTextPageComponent)(); };
ProcessesTextPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProcessesTextPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function ProcessesTextPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-text-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__.TextPageComponent], encapsulation: 2 });


/***/ }),

/***/ 78900:
/*!************************************************************************!*\
  !*** ./src/app/pages/diagnostics/report/report-text-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportTextPageComponent": () => (/* binding */ ReportTextPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/text-page/text-page.component */ 43145);


class ReportTextPageComponent {
    constructor() {
        this.config = {
            hasCopyToClipboardButton: true,
            request: {
                service: 'System',
                get: {
                    method: 'getDiagnosticReport'
                }
            }
        };
    }
}
ReportTextPageComponent.ɵfac = function ReportTextPageComponent_Factory(t) { return new (t || ReportTextPageComponent)(); };
ReportTextPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReportTextPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function ReportTextPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-text-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__.TextPageComponent], encapsulation: 2 });


/***/ }),

/***/ 52809:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/diagnostics/services/service-smb-text-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSmbTextPageComponent": () => (/* binding */ ServiceSmbTextPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/text-page/text-page.component */ 43145);


class ServiceSmbTextPageComponent {
    constructor() {
        this.config = {
            hasReloadButton: true,
            request: {
                service: 'SMB',
                get: {
                    method: 'getStats'
                }
            }
        };
    }
}
ServiceSmbTextPageComponent.ɵfac = function ServiceSmbTextPageComponent_Factory(t) { return new (t || ServiceSmbTextPageComponent)(); };
ServiceSmbTextPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServiceSmbTextPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function ServiceSmbTextPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-text-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__.TextPageComponent], encapsulation: 2 });


/***/ }),

/***/ 3613:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/diagnostics/services/service-ssh-text-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSshTextPageComponent": () => (/* binding */ ServiceSshTextPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/text-page/text-page.component */ 43145);


class ServiceSshTextPageComponent {
    constructor() {
        this.config = {
            hasReloadButton: true,
            request: {
                service: 'SSH',
                get: {
                    method: 'getStats'
                }
            }
        };
    }
}
ServiceSshTextPageComponent.ɵfac = function ServiceSshTextPageComponent_Factory(t) { return new (t || ServiceSshTextPageComponent)(); };
ServiceSshTextPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServiceSshTextPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function ServiceSshTextPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-text-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__.TextPageComponent], encapsulation: 2 });


/***/ }),

/***/ 189:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/system-information/system-information-datatable-page.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemInformationDatatablePageComponent": () => (/* binding */ SystemInformationDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 16901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _app_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/decorators */ 45677);
/* harmony import */ var _app_functions_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/functions.helper */ 57169);
/* harmony import */ var _app_shared_pipes_binary_unit_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/pipes/binary-unit.pipe */ 64561);
/* harmony import */ var _app_shared_services_system_information_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/system-information.service */ 53734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);













class SystemInformationDatatablePageComponent {
    constructor(binaryUnitPipe, systemInformationService) {
        this.binaryUnitPipe = binaryUnitPipe;
        this.systemInformationService = systemInformationService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.config = {
            limit: 0,
            autoReload: false,
            hasActionBar: false,
            hasHeader: false,
            hasFooter: false,
            selectionType: 'none',
            columns: [
                {
                    prop: 'name',
                    flexGrow: 1,
                    cellClass: 'omv-font-weight-bold',
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ name | translate }}'
                },
                {
                    prop: 'value',
                    flexGrow: 3,
                    cellTemplateName: 'shapeShifter'
                }
            ],
            store: {
                data: [],
                fields: ['name', 'value']
            }
        };
        this.subscriptions.add(this.systemInformationService.systemInfo$.subscribe((res) => {
            const data = [];
            const rows = {
                hostname: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hostname'),
                    value: {
                        type: 'text',
                        value: lodash__WEBPACK_IMPORTED_MODULE_2__.get(res, 'hostname')
                    }
                },
                version: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Version'),
                    value: {
                        type: 'text',
                        value: '1.0'
                    }
                },
                cpuModelName: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Processor'),
                    value: {
                        type: 'text',
                        value: (0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_4__.notAvailable)(lodash__WEBPACK_IMPORTED_MODULE_2__.get(res, 'cpuModelName'))
                    }
                },
                kernel: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Kernel'),
                    value: {
                        type: 'text',
                        value: (0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_4__.notAvailable)(lodash__WEBPACK_IMPORTED_MODULE_2__.get(res, 'kernel'))
                    }
                },
                time: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('System Time'),
                    value: {
                        type: 'localeDateTime',
                        value: lodash__WEBPACK_IMPORTED_MODULE_2__.get(res, 'ts')
                    }
                },
                uptime: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Uptime'),
                    value: {
                        type: 'relativeTime',
                        value: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().unix() - lodash__WEBPACK_IMPORTED_MODULE_2__.get(res, 'uptime')
                    }
                },
                loadAverage: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Load Average'),
                    value: {
                        type: 'text',
                        value: (0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_4__.format)('{{ loadAverage.1min | tofixed(2) }}, {{ loadAverage.5min | tofixed(2) }}, {{ loadAverage.15min | tofixed(2) }}', res)
                    }
                },
                cpuUsage: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('CPU Usage'),
                    value: {
                        type: 'progressBar',
                        text: `${res.cpuUsage?.toFixed(1)}%`,
                        value: res.cpuUsage?.toFixed(1)
                    }
                },
                memUsed: {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Memory Usage'),
                    value: {
                        type: 'progressBar',
                        text: `${(res.memUtilization * 100).toFixed(1)}% of ${this.binaryUnitPipe.transform(res.memTotal)}`,
                        value: (res.memUtilization * 100).toFixed(1)
                    }
                }
            };
            lodash__WEBPACK_IMPORTED_MODULE_2__.forEach(rows, (value, key) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_2__.has(res, key)) {
                    data.push(value);
                }
            });
            this.config.store.data = data;
        }));
    }
}
SystemInformationDatatablePageComponent.ɵfac = function SystemInformationDatatablePageComponent_Factory(t) { return new (t || SystemInformationDatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_pipes_binary_unit_pipe__WEBPACK_IMPORTED_MODULE_5__.BinaryUnitPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_services_system_information_service__WEBPACK_IMPORTED_MODULE_6__.SystemInformationService)); };
SystemInformationDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SystemInformationDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SystemInformationDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__.DatatablePageComponent], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_app_decorators__WEBPACK_IMPORTED_MODULE_3__.Unsubscribe)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:type", Object)
], SystemInformationDatatablePageComponent.prototype, "subscriptions", void 0);


/***/ }),

/***/ 8459:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/diagnostics/system-logs/system-logs-list-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemLogsListPageComponent": () => (/* binding */ SystemLogsListPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);
/* harmony import */ var _app_core_services_log_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/core/services/log-config.service */ 60214);
/* harmony import */ var _app_i18n_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/i18n.helper */ 28897);
/* harmony import */ var _app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/rpc.service */ 24358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);










class SystemLogsListPageComponent {
    constructor(rpcService, logConfigService) {
        this.rpcService = rpcService;
        this.logConfigService = logConfigService;
        this.config = {
            autoLoad: false,
            autoReload: false,
            remoteSorting: true,
            remotePaging: true,
            limit: 15,
            selectionType: 'none',
            sorters: [],
            columns: [],
            store: {
                data: []
            },
            actions: [
                {
                    type: 'select',
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a system log ...'),
                    selectionChange: this.onSelectionChange.bind(this),
                    store: {
                        data: []
                    }
                },
                {
                    type: 'divider'
                },
                {
                    type: 'iconButton',
                    icon: 'download',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Download'),
                    click: this.onDownload.bind(this),
                    enabledConstraints: {
                        callback: () => 
                        // Enable the download button if a log ID is selected.
                        lodash__WEBPACK_IMPORTED_MODULE_1__.isString(this.logId)
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.logConfigService.configs$.subscribe((logConfigs) => {
            this.config.actions[0].store.data = lodash__WEBPACK_IMPORTED_MODULE_1__.chain(logConfigs)
                .sortBy(['text'])
                .map((systemLogConfig) => ({
                text: (0,_app_i18n_helper__WEBPACK_IMPORTED_MODULE_4__.translate)(systemLogConfig.text),
                value: systemLogConfig.id
            }))
                .value();
        });
    }
    onSelectionChange(action, value) {
        this.logConfigService.configs$.subscribe((logs) => {
            const logConfig = logs.find((lc) => lc.id === value);
            if (!lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined(logConfig)) {
                this.logId = value;
                // Update the configuration of the datatable.
                // Do not use _.merge(), otherwise Angular CD will not detect
                // the changes.
                this.config.stateId = logConfig.id;
                this.config.columns = logConfig.columns;
                this.config.sorters = logConfig.sorters;
                this.config.store.proxy = {
                    service: logConfig.request.service,
                    get: {
                        method: logConfig.request.method,
                        params: logConfig.request.params
                    }
                };
                // Finally, reload the datatable content. Note, we need to wait
                // until the datatable has updated the configuration (e.g. sorters)
                // thanks to Angular's change-detection.
                setTimeout(() => {
                    this.page.table.offset = 0;
                    this.page.table.updateColumns();
                    this.page.table.reloadData();
                });
            }
        });
    }
    onDownload() {
        this.rpcService.download('LogFile', 'getContent', { id: this.logId });
    }
}
SystemLogsListPageComponent.ɵfac = function SystemLogsListPageComponent_Factory(t) { return new (t || SystemLogsListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_5__.RpcService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_log_config_service__WEBPACK_IMPORTED_MODULE_3__.LogConfigService)); };
SystemLogsListPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SystemLogsListPageComponent, selectors: [["ng-component"]], viewQuery: function SystemLogsListPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DatatablePageComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } }, decls: 1, vars: 1, consts: [[3, "config"]], template: function SystemLogsListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 13210:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/diagnostics/system-logs/system-logs-remote-form-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemLogsRemoteFormPageComponent": () => (/* binding */ SystemLogsRemoteFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SystemLogsRemoteFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Syslog',
                get: {
                    method: 'getSettings'
                },
                post: {
                    method: 'setSettings'
                }
            },
            fields: [
                {
                    type: 'checkbox',
                    name: 'enable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable remote logging of syslog to the specified host.'),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'host',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Host'),
                    value: '',
                    validators: {
                        patternType: 'domainNameIp',
                        requiredIf: { operator: 'eq', arg0: { prop: 'enable' }, arg1: true }
                    }
                },
                {
                    type: 'numberInput',
                    name: 'port',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 514,
                    validators: {
                        min: 1,
                        max: 65535,
                        required: true,
                        patternType: 'port'
                    }
                },
                {
                    type: 'select',
                    name: 'protocol',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Protocol'),
                    value: 'udp',
                    store: {
                        data: [
                            ['tcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('TCP')],
                            ['udp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('UDP')]
                        ]
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit'
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/diagnostics/system-logs'
                    }
                }
            ]
        };
    }
}
SystemLogsRemoteFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSystemLogsRemoteFormPageComponent_BaseFactory; return function SystemLogsRemoteFormPageComponent_Factory(t) { return (ɵSystemLogsRemoteFormPageComponent_BaseFactory || (ɵSystemLogsRemoteFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SystemLogsRemoteFormPageComponent)))(t || SystemLogsRemoteFormPageComponent); }; }();
SystemLogsRemoteFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SystemLogsRemoteFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SystemLogsRemoteFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_diagnostics_diagnostics_module_ts.js.map