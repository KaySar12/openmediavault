"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["src_app_pages_storage_storage_module_ts"],{

/***/ 29817:
/*!**********************************************************************!*\
  !*** ./src/app/pages/storage/disks/disk-datatable-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiskDatatablePageComponent": () => (/* binding */ DiskDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_functions_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/functions.helper */ 57169);
/* harmony import */ var _app_shared_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/components/modal-dialog/modal-dialog.component */ 92141);
/* harmony import */ var _app_shared_components_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/components/task-dialog/task-dialog.component */ 12242);
/* harmony import */ var _app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/dialog.service */ 74564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);











class DiskDatatablePageComponent {
    constructor(dialogService, router) {
        this.dialogService = dialogService;
        this.router = router;
        this.config = {
            stateId: 'c2d59665-d12a-4166-91fc-bdf4707ee539',
            autoReload: false,
            remoteSorting: true,
            remotePaging: true,
            sorters: [
                {
                    dir: 'asc',
                    prop: 'canonicaldevicefile'
                }
            ],
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'), prop: 'canonicaldevicefile', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device Symlinks'),
                    prop: 'devicelinks',
                    flexGrow: 2,
                    sortable: false,
                    hidden: true,
                    cellTemplateName: 'unsortedList'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Model'),
                    prop: 'model',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Serial Number'),
                    prop: 'serialnumber',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('WWN'),
                    prop: 'wwn',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Vendor'),
                    prop: 'vendor',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Capacity'),
                    prop: 'size',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'binaryUnit'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Power Mode'),
                    prop: 'powermode',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        /* eslint-disable @typescript-eslint/naming-convention */
                        map: {
                            ACTIVE: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Active'),
                                class: 'omv-background-color-pair-orange'
                            },
                            'ACTIVE or IDLE': {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Active or Idle'),
                                class: 'omv-background-color-pair-orange'
                            },
                            IDLE: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Idle'),
                                class: 'omv-background-color-pair-yellow'
                            },
                            STANDBY: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Standby'),
                                class: 'omv-background-color-pair-blue'
                            },
                            SLEEP: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sleep'),
                                class: 'omv-background-color-pair-green'
                            },
                            UNKNOWN: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Unknown'),
                                class: 'omv-background-color-pair-gray'
                            },
                            ERROR: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Error'),
                                class: 'omv-background-color-pair-red'
                            }
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Temperature'),
                    prop: 'temperature',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                }
            ],
            store: {
                proxy: {
                    service: 'DiskMgmt',
                    get: {
                        method: 'getListBg',
                        task: true
                    }
                },
                transform: {
                    temperature: '{% if temperature %}{{ temperature }} °C{% endif %}'
                }
            },
            actions: [
                {
                    template: 'edit',
                    click: this.onEdit.bind(this)
                },
                {
                    type: 'iconButton',
                    icon: 'eraser',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wipe'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [
                            {
                                operator: 'and',
                                arg0: { operator: 'falsy', arg0: { prop: 'isroot' } },
                                arg1: { operator: 'falsy', arg0: { prop: 'isreadonly' } }
                            }
                        ]
                    },
                    click: this.onWipe.bind(this)
                },
                {
                    type: 'iconButton',
                    icon: 'search',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scan for new devices'),
                    confirmationDialogConfig: {
                        template: 'confirmation',
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)(
                        // eslint-disable-next-line max-len
                        'It may take a while to detect the new devices, thus it might be necessary to reload the table several times. Do you want to proceed?')
                    },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'DiskMgmt',
                            method: 'rescan',
                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scanning for new devices ...')
                        }
                    }
                }
            ]
        };
    }
    onEdit(action, table) {
        const selected = table.selection.first();
        let url;
        if ((0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_2__.isUUID)(lodash__WEBPACK_IMPORTED_MODULE_1__.get(selected, 'hdparm.uuid'))) {
            url = '/storage/disks/hdparm/edit/{{ hdparm.uuid }}';
        }
        else {
            url = '/storage/disks/hdparm/create/{{ devicefile | encodeuricomponent }}';
        }
        this.router.navigate([(0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_2__.format)(url, selected)]);
    }
    onWipe(action, table) {
        const selected = table.selection.first();
        this.dialogService
            .open(_app_shared_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ModalDialogComponent, {
            data: {
                template: 'confirmation-critical',
                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wipe'),
                message: (0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_2__.format)((0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Do you really want to wipe the device {{ canonicaldevicefile }}? All data will be lost.'), selected)
            }
        })
            .afterClosed()
            .subscribe((choice) => {
            if (choice) {
                this.dialogService
                    .open(_app_shared_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ModalDialogComponent, {
                    data: {
                        template: 'confirmation',
                        title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wipe'),
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please choose the method to wipe the device.'),
                        buttons: [
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cancel'),
                                dialogResult: false,
                                autofocus: true
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Quick'),
                                dialogResult: 'quick',
                                class: 'omv-background-color-pair-red'
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Secure'),
                                dialogResult: 'secure',
                                class: 'omv-background-color-pair-red'
                            }
                        ]
                    }
                })
                    .afterClosed()
                    .subscribe((mode) => {
                    if (mode) {
                        this.dialogService.open(_app_shared_components_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_4__.TaskDialogComponent, {
                            width: '75%',
                            data: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wiping device'),
                                startOnInit: true,
                                request: {
                                    service: 'DiskMgmt',
                                    method: 'wipe',
                                    params: {
                                        devicefile: selected.devicefile,
                                        secure: mode === 'secure'
                                    }
                                }
                            }
                        });
                    }
                });
            }
        });
    }
}
DiskDatatablePageComponent.ɵfac = function DiskDatatablePageComponent_Factory(t) { return new (t || DiskDatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
DiskDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DiskDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function DiskDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 44461:
/*!*****************************************************************!*\
  !*** ./src/app/pages/storage/disks/disk-form-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiskFormPageComponent": () => (/* binding */ DiskFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class DiskFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'DiskMgmt',
                get: {
                    method: 'getHdParm',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setHdParm'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'select',
                    name: 'devicefile',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    valueField: 'devicefile',
                    textField: 'description',
                    disabled: true,
                    value: '{{ _routeParams.devicefile }}',
                    store: {
                        proxy: {
                            service: 'DiskMgmt',
                            get: {
                                method: 'enumerateDevices'
                            }
                        }
                    }
                },
                {
                    type: 'select',
                    name: 'apm',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced Power Management'),
                    value: 0,
                    store: {
                        data: [
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled'),
                                value: 0
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 - Minimum power usage with standby (spindown)'),
                                value: 1
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('64 - Intermediate power usage with standby'),
                                value: 64
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('127 - Intermediate power usage with standby'),
                                value: 127
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('128 - Minimum power usage without standby (no spindown)'),
                                value: 128
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('192 - Intermediate power usage without standby'),
                                value: 192
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('254 - Maximum performance, maximum power usage'),
                                value: 254
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('255 - Disabled'),
                                value: 255
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'aam',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced Acoustic Management'),
                    value: 0,
                    store: {
                        data: [
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled'),
                                value: 0
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Minimum performance, minimum acoustic output'),
                                value: 128
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Maximum performance, maximum acoustic output'),
                                value: 254
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'spindowntime',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Spindown time'),
                    value: 0,
                    store: {
                        data: [
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled'),
                                value: 0
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('5 minutes'),
                                value: 60
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('10 minutes'),
                                value: 120
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('20 minutes'),
                                value: 240
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('30 minutes'),
                                value: 241
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('60 minutes'),
                                value: 242
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('120 minutes'),
                                value: 244
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('180 minutes'),
                                value: 246
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('240 minutes'),
                                value: 248
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('300 minutes'),
                                value: 250
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('330 minutes'),
                                value: 251
                            }
                        ]
                    }
                },
                {
                    type: 'checkbox',
                    name: 'writecache',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable write-cache'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This function is effective only if the hard drive supports it.'),
                    value: false
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/storage/disks'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/storage/disks'
                    }
                }
            ]
        };
    }
}
DiskFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵDiskFormPageComponent_BaseFactory; return function DiskFormPageComponent_Factory(t) { return (ɵDiskFormPageComponent_BaseFactory || (ɵDiskFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DiskFormPageComponent)))(t || DiskFormPageComponent); }; }();
DiskFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DiskFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function DiskFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 42936:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/storage/filesystems/filesystem-datatable-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesystemDatatablePageComponent": () => (/* binding */ FilesystemDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _app_core_services_mkfs_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/mkfs-config.service */ 59670);
/* harmony import */ var _app_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/decorators */ 45677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);









class FilesystemDatatablePageComponent {
    constructor(mkfsConfigService) {
        this.mkfsConfigService = mkfsConfigService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.config = {
            stateId: '66d9d2ce-2fee-11ea-8386-e3eba0cf8f78',
            autoReload: 10000,
            remoteSorting: true,
            remotePaging: true,
            sorters: [
                {
                    dir: 'asc',
                    prop: 'canonicaldevicefile'
                }
            ],
            store: {
                proxy: {
                    service: 'FileSystemMgmt',
                    get: {
                        method: 'getListBg',
                        task: true
                    }
                }
            },
            rowId: 'devicefile',
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    prop: 'canonicaldevicefile',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    prop: 'comment',
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        separator: ','
                    },
                    flexGrow: 1,
                    hidden: true,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device(s)'),
                    prop: 'devicefiles',
                    flexGrow: 2,
                    sortable: false,
                    hidden: true,
                    cellTemplateName: 'unsortedList'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Identify As'),
                    prop: '',
                    flexGrow: 1,
                    cellTemplateName: 'template',
                    hidden: true,
                    cellTemplateConfig: '{% if uuid %}UUID={{ uuid }}{% else %}{{ devicefile }}{% endif %}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Label'),
                    prop: 'label',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Parent Device'),
                    prop: 'parentdevicefile',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    prop: 'type',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        template: '{{ type | upper }}'
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Total'),
                    prop: 'size',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ size | tobytes | binaryunit | notavailable("-") }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Available'),
                    prop: 'available',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ available | tobytes | binaryunit | notavailable("-") }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Used'),
                    prop: 'percentage',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'progressBar',
                    cellTemplateConfig: {
                        text: '{{ used | tobytes | binaryunit | notavailable("-") }}',
                        warningThreshold: '{{ usagewarnthreshold | default(0) }}'
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mounted'),
                    prop: 'mounted',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mount Point'),
                    prop: 'mountpoint',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'copyToClipboard'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mount Options'),
                    prop: 'mountopts',
                    flexGrow: 1,
                    sortable: false,
                    hidden: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ mountopts | split(",") | map("strip") | join(", ") }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Referenced'),
                    prop: '_used',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Status'),
                    prop: 'status',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            /* eslint-disable @typescript-eslint/naming-convention */
                            1: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Online'), class: 'omv-background-color-pair-success' },
                            2: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Initializing'), class: 'omv-background-color-pair-info' },
                            3: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Missing'), class: 'omv-background-color-pair-error' }
                            /* eslint-enable @typescript-eslint/naming-convention */
                        }
                    }
                }
            ],
            actions: [
                {
                    type: 'iconButton',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mount'),
                    icon: 'start',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mount an existing file system.'),
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems/mount'
                    }
                },
                {
                    type: 'menu',
                    icon: 'add',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create and mount a file system.'),
                    actions: []
                },
                {
                    template: 'edit',
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [
                            // Enable button if the file system has a `/etc/fstab` entry.
                            // This is because monitoring the warning threshold is only
                            // possible for mounted file systems.
                            { operator: 'truthy', arg0: { prop: 'propfstab' } }
                        ]
                    },
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems/edit/{{ _selected[0].canonicaldevicefile | encodeuricomponent }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'expand',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Grow'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [
                            // Enable button if the file system is online.
                            { operator: 'eq', arg0: { prop: 'status' }, arg1: 1 },
                            // Enable button if the file system supports online resizing.
                            { operator: 'truthy', arg0: { prop: 'propresize' } },
                            // Enable button if the file system is not read-only.
                            { operator: 'falsy', arg0: { prop: '_readonly' } }
                        ]
                    },
                    confirmationDialogConfig: {
                        template: 'confirmation',
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Do you really want to resize the file system? You have to do that after a RAID has been grown for example.')
                    },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'FileSystemMgmt',
                            method: 'grow',
                            params: {
                                id: '{{ _selected[0].uuid }}'
                            }
                        }
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:chart-pie',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Quota'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [
                            // Enable button if file systems is online.
                            { operator: 'eq', arg0: { prop: 'status' }, arg1: 1 },
                            // Enable button if file system supports quota.
                            { operator: 'truthy', arg0: { prop: 'propquota' } },
                            // Enable button if the file system is mounted.
                            { operator: 'truthy', arg0: { prop: 'mounted' } },
                            // Enable button if the file system is not read-only.
                            { operator: 'falsy', arg0: { prop: '_readonly' } }
                        ]
                    },
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems/quota/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'details',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Show details'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems/details/{{ _selected[0].canonicaldevicefile | encodeuricomponent }}'
                    }
                },
                {
                    template: 'delete',
                    icon: 'stop',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Unmount'),
                    enabledConstraints: {
                        constraint: [
                            // Disable button if file system is in use or read-only.
                            {
                                operator: 'if',
                                arg0: { operator: 'has', arg0: { prop: '_used' } },
                                arg1: { operator: 'falsy', arg0: { prop: '_used' } }
                            },
                            {
                                operator: 'if',
                                arg0: { operator: 'has', arg0: { prop: '_readonly' } },
                                arg1: { operator: 'falsy', arg0: { prop: '_readonly' } }
                            },
                            // Disable button if file system is initialized (status=2)
                            // at the moment.
                            { operator: 'ne', arg0: { prop: 'status' }, arg1: 2 },
                            // Enable button if file system supports fstab
                            // mount entries.
                            { operator: 'truthy', arg0: { prop: 'propfstab' } }
                        ]
                    },
                    confirmationDialogConfig: {
                        title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Unmount'),
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)(
                        // eslint-disable-next-line max-len
                        'Do you really want to unmount this file system? Please make sure that the file system is not used by any service before unmounting. Note, the file system will not be deleted by this action.')
                    },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'FileSystemMgmt',
                            method: 'umount',
                            params: {
                                id: '{{ devicefile }}',
                                fstab: true
                            },
                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, unmounting the file system ...')
                        }
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.subscriptions.add(this.mkfsConfigService.configs$.subscribe((configs) => {
            // @ts-ignore
            this.config.actions[1].actions = lodash__WEBPACK_IMPORTED_MODULE_1__.chain(configs)
                .sortBy(['text'])
                .map((config) => ({
                type: 'button',
                text: config.text,
                execute: {
                    type: 'url',
                    url: config.url
                }
            }))
                .value();
        }));
    }
}
FilesystemDatatablePageComponent.ɵfac = function FilesystemDatatablePageComponent_Factory(t) { return new (t || FilesystemDatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_core_services_mkfs_config_service__WEBPACK_IMPORTED_MODULE_2__.MkfsConfigService)); };
FilesystemDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FilesystemDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FilesystemDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.DatatablePageComponent], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_app_decorators__WEBPACK_IMPORTED_MODULE_3__.Unsubscribe)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription)
], FilesystemDatatablePageComponent.prototype, "subscriptions", void 0);


/***/ }),

/***/ 15627:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/storage/filesystems/filesystem-details-text-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesystemDetailsTextPageComponent": () => (/* binding */ FilesystemDetailsTextPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/text-page/text-page.component */ 43145);


class FilesystemDetailsTextPageComponent {
    constructor() {
        this.config = {
            hasCopyToClipboardButton: true,
            hasReloadButton: true,
            request: {
                service: 'FileSystemMgmt',
                get: {
                    method: 'getDetails',
                    params: {
                        devicefile: '{{ _routeParams.devicefile }}'
                    }
                }
            },
            buttons: [
                {
                    template: 'back',
                    url: '/storage/filesystems'
                }
            ]
        };
    }
}
FilesystemDetailsTextPageComponent.ɵfac = function FilesystemDetailsTextPageComponent_Factory(t) { return new (t || FilesystemDetailsTextPageComponent)(); };
FilesystemDetailsTextPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilesystemDetailsTextPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FilesystemDetailsTextPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-text-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__.TextPageComponent], encapsulation: 2 });


/***/ }),

/***/ 20608:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/storage/filesystems/filesystem-edit-form-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesystemEditFormPageComponent": () => (/* binding */ FilesystemEditFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class FilesystemEditFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'FsTab',
                get: {
                    method: 'getByFsName',
                    params: {
                        fsname: '{{ _routeParams.fsname }}'
                    }
                },
                post: {
                    method: 'set'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'hidden',
                    name: 'fsname'
                },
                {
                    type: 'hidden',
                    name: 'dir'
                },
                {
                    type: 'hidden',
                    name: 'type'
                },
                {
                    type: 'hidden',
                    name: 'opts'
                },
                {
                    type: 'hidden',
                    name: 'freq'
                },
                {
                    type: 'hidden',
                    name: 'passno'
                },
                {
                    type: 'hidden',
                    name: 'hidden'
                },
                {
                    type: 'textInput',
                    name: 'devicefile',
                    value: '{{ _routeParams.fsname }}',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    disabled: true,
                    submitValue: false
                },
                {
                    type: 'select',
                    name: 'usagewarnthreshold',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Usage Warning Threshold'),
                    value: 85,
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            [50, '50%'],
                            [75, '75%'],
                            [80, '80%'],
                            [85, '85%'],
                            [90, '90%'],
                            [95, '95%']
                        ]
                    },
                    validators: {
                        required: true
                    },
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Send a notification when the used file system capacity exceeds the specified threshold.')
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems'
                    }
                }
            ]
        };
    }
}
FilesystemEditFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵFilesystemEditFormPageComponent_BaseFactory; return function FilesystemEditFormPageComponent_Factory(t) { return (ɵFilesystemEditFormPageComponent_BaseFactory || (ɵFilesystemEditFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FilesystemEditFormPageComponent)))(t || FilesystemEditFormPageComponent); }; }();
FilesystemEditFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilesystemEditFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FilesystemEditFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 28531:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/storage/filesystems/filesystem-mount-form-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesystemMountFormPageComponent": () => (/* binding */ FilesystemMountFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class FilesystemMountFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'FileSystemMgmt',
                post: {
                    method: 'setMountPoint'
                }
            },
            fields: [
                {
                    type: 'select',
                    name: 'id',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('File system'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a file system ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The file system to mount.'),
                    validators: {
                        required: true
                    },
                    valueField: 'devicefile',
                    textField: 'description',
                    store: {
                        proxy: {
                            service: 'FileSystemMgmt',
                            get: {
                                method: 'getMountCandidates'
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'devicefile'
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'usagewarnthreshold',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Usage Warning Threshold'),
                    value: 85,
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            [50, '50%'],
                            [75, '75%'],
                            [80, '80%'],
                            [85, '85%'],
                            [90, '90%'],
                            [95, '95%']
                        ]
                    },
                    validators: {
                        required: true
                    },
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Send a notification when the used file system capacity exceeds the specified threshold.')
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems'
                    }
                }
            ]
        };
    }
}
FilesystemMountFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵFilesystemMountFormPageComponent_BaseFactory; return function FilesystemMountFormPageComponent_Factory(t) { return (ɵFilesystemMountFormPageComponent_BaseFactory || (ɵFilesystemMountFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FilesystemMountFormPageComponent)))(t || FilesystemMountFormPageComponent); }; }();
FilesystemMountFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilesystemMountFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FilesystemMountFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 34893:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/storage/filesystems/filesystem-quota-datatable-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesystemQuotaDatatablePageComponent": () => (/* binding */ FilesystemQuotaDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class FilesystemQuotaDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: '3f8c62be-11ba-4d37-8683-cbe44c049955',
            autoReload: false,
            remoteSorting: false,
            remotePaging: false,
            hasSearchField: true,
            sorters: [
                {
                    dir: 'asc',
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'Quota',
                    get: {
                        method: 'get',
                        params: {
                            uuid: '{{ _routeParams.uuid }}'
                        }
                    }
                }
            },
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'), prop: 'name', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    prop: 'type',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            user: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User') },
                            group: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Group') }
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Used capacity'),
                    prop: 'bused',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Quota'),
                    prop: 'bhardlimit',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ bhardlimit }} {{ bunit }}'
                }
            ],
            actions: [
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems/quota/{{ _routeParams.uuid }}/edit/{{ _selected[0].type }}/{{ _selected[0].name }}'
                    }
                }
            ]
        };
    }
}
FilesystemQuotaDatatablePageComponent.ɵfac = function FilesystemQuotaDatatablePageComponent_Factory(t) { return new (t || FilesystemQuotaDatatablePageComponent)(); };
FilesystemQuotaDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FilesystemQuotaDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FilesystemQuotaDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 13774:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/storage/filesystems/filesystem-quota-form-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesystemQuotaFormPageComponent": () => (/* binding */ FilesystemQuotaFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class FilesystemQuotaFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Quota',
                get: {
                    method: 'getByTypeName',
                    params: {
                        uuid: '{{ _routeParams.uuid }}',
                        type: '{{ _routeParams.type }}',
                        name: '{{ _routeParams.name }}'
                    }
                },
                post: {
                    method: 'setByTypeName',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                }
            },
            fields: [
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    disabled: true,
                    store: {
                        data: [
                            ['user', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User')],
                            ['group', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Group')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'name',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    disabled: true
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'numberInput',
                            name: 'bhardlimit',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Quota'),
                            value: 0,
                            validators: {
                                min: 0,
                                patternType: 'integer',
                                required: true
                            },
                            flex: 75
                        },
                        {
                            type: 'select',
                            name: 'bunit',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Unit'),
                            value: 'GiB',
                            store: {
                                data: [
                                    ['KiB', 'KiB'],
                                    ['MiB', 'MiB'],
                                    ['GiB', 'GiB'],
                                    ['TiB', 'TiB']
                                ]
                            },
                            validators: {
                                required: true
                            },
                            flex: 25
                        }
                    ]
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems/quota/{{ _routeParams.uuid }}'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/storage/filesystems/quota/{{ _routeParams.uuid }}'
                    }
                }
            ]
        };
    }
}
FilesystemQuotaFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵFilesystemQuotaFormPageComponent_BaseFactory; return function FilesystemQuotaFormPageComponent_Factory(t) { return (ɵFilesystemQuotaFormPageComponent_BaseFactory || (ɵFilesystemQuotaFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FilesystemQuotaFormPageComponent)))(t || FilesystemQuotaFormPageComponent); }; }();
FilesystemQuotaFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilesystemQuotaFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FilesystemQuotaFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 38808:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/storage/shared-folders/shared-folder-acl-form-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFolderAclFormPageComponent": () => (/* binding */ SharedFolderAclFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _app_i18n_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/i18n.helper */ 28897);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _app_shared_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/components/modal-dialog/modal-dialog.component */ 92141);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_services_block_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/block-ui.service */ 95294);
/* harmony import */ var _app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/dialog.service */ 74564);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/services/rpc.service */ 24358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);


















class SharedFolderAclFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_3__.BaseFormPageComponent {
    constructor(blockUiService, dialogService, notificationService, rpcService) {
        super();
        this.blockUiService = blockUiService;
        this.dialogService = dialogService;
        this.notificationService = notificationService;
        this.rpcService = rpcService;
        this.config = {
            fields: [
                {
                    type: 'sharedFolderSelect',
                    name: 'uuid',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    disabled: true,
                    hasCreateButton: false,
                    value: '{{ _routeParams.uuid }}'
                },
                {
                    type: 'folderBrowser',
                    name: 'file',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Relative path'),
                    dirType: 'sharedfolder',
                    dirRefIdField: 'uuid',
                    readonly: true,
                    value: '/'
                },
                {
                    type: 'checkbox',
                    name: 'replace',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Replace'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Replace all existing permissions.'),
                    value: true
                },
                {
                    type: 'checkbox',
                    name: 'recursive',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Recursive'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Apply permissions to files and subfolders.'),
                    value: false
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('File owner and group')
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'select',
                            name: 'owner',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Owner'),
                            hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions of owner.'),
                            valueField: 'name',
                            textField: 'name',
                            store: {
                                proxy: {
                                    service: 'UserMgmt',
                                    get: {
                                        method: 'enumerateAllUsers',
                                        params: {}
                                    }
                                },
                                sorters: [
                                    {
                                        dir: 'asc',
                                        prop: 'name'
                                    }
                                ]
                            },
                            value: 'root'
                        },
                        {
                            type: 'select',
                            name: 'userperms',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                            store: {
                                data: [
                                    [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('None')],
                                    [1, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Execute only')],
                                    [2, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Write only')],
                                    [3, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Write/Execute')],
                                    [4, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read only')],
                                    [5, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Execute')],
                                    [6, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write')],
                                    [7, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write/Execute')]
                                ]
                            },
                            value: 7
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'select',
                            name: 'group',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Group'),
                            hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions of group.'),
                            valueField: 'name',
                            textField: 'name',
                            store: {
                                proxy: {
                                    service: 'UserMgmt',
                                    get: {
                                        method: 'enumerateAllGroups',
                                        params: {},
                                    }
                                },
                                sorters: [
                                    {
                                        dir: 'asc',
                                        prop: 'name'
                                    }
                                ]
                            },
                            value: 'users'
                        },
                        {
                            type: 'select',
                            name: 'groupperms',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                            store: {
                                data: [
                                    [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('None')],
                                    [1, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Execute only')],
                                    [2, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Write only')],
                                    [3, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Write/Execute')],
                                    [4, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read only')],
                                    [5, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Execute')],
                                    [6, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write')],
                                    [7, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write/Execute')]
                                ]
                            },
                            value: 7
                        }
                    ]
                },
                {
                    type: 'select',
                    name: 'otherperms',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Others'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions of others (e.g. anonymous FTP users).'),
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('None')],
                            [1, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Execute only')],
                            [2, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Write only')],
                            [3, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Write/Execute')],
                            [4, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read only')],
                            [5, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Execute')],
                            [6, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write')],
                            [7, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write/Execute')]
                        ]
                    },
                    value: 0
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('File access control lists')
                },
                {
                    type: 'datatable',
                    name: 'perms',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User/Group permissions'),
                    limit: 5,
                    hasActionBar: true,
                    hasSearchField: true,
                    selectionType: 'none',
                    columns: [
                        { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'), prop: 'name', flexGrow: 2, sortable: true },
                        {
                            name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                            prop: 'type',
                            flexGrow: 1,
                            sortable: true,
                            cellTemplateName: 'chip',
                            cellTemplateConfig: {
                                map: {
                                    user: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User') },
                                    group: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Group') }
                                }
                            }
                        },
                        {
                            name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('System account'),
                            prop: 'system',
                            flexGrow: 1,
                            cellTemplateName: 'checkIcon',
                            sortable: true
                        },
                        {
                            name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                            prop: 'perms',
                            flexGrow: 3,
                            sortable: true,
                            cellTemplateName: 'buttonToggle',
                            cellTemplateConfig: {
                                buttons: [
                                    {
                                        value: '7',
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write')
                                    },
                                    {
                                        value: '5',
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read-only')
                                    },
                                    {
                                        value: '0',
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('No access')
                                    }
                                ]
                            }
                        }
                    ],
                    actions: [
                        {
                            icon: 'mdi:transfer',
                            tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy permissions'),
                            click: this.onCopyPermissions.bind(this)
                        }
                    ],
                    sorters: [
                        {
                            dir: 'asc',
                            prop: 'system'
                        },
                        {
                            dir: 'asc',
                            prop: 'name'
                        }
                    ],
                    value: []
                }
            ],
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
                        url: '/storage/shared-folders'
                    }
                }
            ]
        };
    }
    ngOnInit() {
        const self = this.page;
        self.editing = true;
        self.loadData = () => this.loadData('/');
        self.afterViewInitEvent.subscribe(() => {
            const control = self.form.formGroup.get('file');
            control?.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()).subscribe((value) => this.loadData(value));
        });
    }
    onCopyPermissions() {
        const uuid = lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeParams, 'uuid');
        const values = this.page.getFormValues();
        this.dialogService
            .open(_app_shared_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ModalDialogComponent, {
            data: {
                template: 'confirmation',
                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy permissions'),
                message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Do you really want to copy the permissions from the shared folder?')
            }
        })
            .afterClosed()
            .subscribe((choice) => {
            if (choice) {
                this.blockUiService.start((0,_app_i18n_helper__WEBPACK_IMPORTED_MODULE_2__.translate)((0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, updating the permissions ...')));
                this.rpcService
                    .request('ShareMgmt', 'getPrivileges', { uuid })
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => {
                    this.blockUiService.stop();
                }))
                    .subscribe((privs) => {
                    const perms = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(values.perms);
                    // Reset all permission by default.
                    lodash__WEBPACK_IMPORTED_MODULE_1__.forEach(perms, (item) => {
                        item.perms = null;
                    });
                    // Apply the permissions from the shared folder.
                    lodash__WEBPACK_IMPORTED_MODULE_1__.forEach(privs, (priv) => {
                        const a = lodash__WEBPACK_IMPORTED_MODULE_1__.find(perms, { name: priv.name, type: priv.type });
                        if (!lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined(a)) {
                            a.perms = priv.perms;
                        }
                    });
                    this.page.setFormValues({ perms }, false);
                });
            }
        });
    }
    onSubmit(buttonConfig, values) {
        this.blockUiService.start((0,_app_i18n_helper__WEBPACK_IMPORTED_MODULE_2__.translate)((0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, updating access control lists ...')));
        // Process RPC parameters.
        const perms = lodash__WEBPACK_IMPORTED_MODULE_1__.map(lodash__WEBPACK_IMPORTED_MODULE_1__.reject(values.perms, ['perms', null]), (obj) => {
            obj.perms = lodash__WEBPACK_IMPORTED_MODULE_1__.toInteger(obj.perms);
            return obj;
        });
        const users = lodash__WEBPACK_IMPORTED_MODULE_1__.filter(perms, ['type', 'user']);
        const groups = lodash__WEBPACK_IMPORTED_MODULE_1__.filter(perms, ['type', 'group']);
        const rpcParams = lodash__WEBPACK_IMPORTED_MODULE_1__.merge({ users, groups }, lodash__WEBPACK_IMPORTED_MODULE_1__.omit(values, 'perms'));
        this.rpcService
            .requestTask('ShareMgmt', 'setFileACL', rpcParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => {
            this.blockUiService.stop();
        }))
            .subscribe(() => {
            this.page.markAsPristine();
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_5__.NotificationType.success, lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeConfig, 'data.notificationTitle'));
        });
    }
    loadData(file) {
        const uuid = lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeParams, 'uuid');
        this.page.loading = true;
        this.rpcService
            .request('ShareMgmt', 'getFileACL', {
            uuid,
            file
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)((error) => {
            this.page.error = error;
            return rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => {
            this.page.loading = false;
        }))
            .subscribe((res) => {
            lodash__WEBPACK_IMPORTED_MODULE_1__.map(res.acl.users, (user) => lodash__WEBPACK_IMPORTED_MODULE_1__.set(user, 'type', 'user'));
            lodash__WEBPACK_IMPORTED_MODULE_1__.map(res.acl.groups, (group) => lodash__WEBPACK_IMPORTED_MODULE_1__.set(group, 'type', 'group'));
            this.page.setFormValues({
                owner: res.owner,
                group: res.group,
                userperms: res.acl.user,
                groupperms: res.acl.group,
                otherperms: res.acl.other,
                perms: lodash__WEBPACK_IMPORTED_MODULE_1__.concat(res.acl.users, res.acl.groups)
            });
        });
    }
}
SharedFolderAclFormPageComponent.ɵfac = function SharedFolderAclFormPageComponent_Factory(t) { return new (t || SharedFolderAclFormPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_block_ui_service__WEBPACK_IMPORTED_MODULE_6__.BlockUiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_9__.RpcService)); };
SharedFolderAclFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: SharedFolderAclFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SharedFolderAclFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_10__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 81808:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/storage/shared-folders/shared-folder-all-snapshots-tabs-page.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFolderAllSnapshotsTabsPageComponent": () => (/* binding */ SharedFolderAllSnapshotsTabsPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/tabs-page/tabs-page.component */ 84696);



class SharedFolderAllSnapshotsTabsPageComponent {
    constructor() {
        this.config = {
            tabs: [
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Snapshots'),
                    type: 'datatable',
                    config: {
                        stateId: 'beae0ef8-bfff-11ed-8ff5-17628e8426cf',
                        autoReload: false,
                        limit: 0,
                        hasFooter: true,
                        hasSearchField: true,
                        selectionType: 'multi',
                        columns: [
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('ID'),
                                prop: 'id',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                                prop: 'name',
                                flexGrow: 2,
                                sortable: true
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Creation Time'),
                                prop: 'otimets',
                                flexGrow: 1,
                                sortable: true,
                                cellTemplateName: 'localeDateTime'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('UUID'),
                                prop: 'uuid',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Parent UUID'),
                                prop: 'parent_uuid',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Relative Path'),
                                prop: 'path',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Absolute Path'),
                                prop: 'abspath',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Referenced'),
                                prop: '_used',
                                flexGrow: 1,
                                sortable: true,
                                cellTemplateName: 'checkIcon'
                            }
                        ],
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'name'
                            }
                        ],
                        store: {
                            proxy: {
                                service: 'ShareMgmt',
                                get: {
                                    method: 'enumerateAllSnapshots',
                                    params: {},
                                }
                            }
                        },
                        actions: [
                            {
                                type: 'iconButton',
                                icon: 'share',
                                tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Share'),
                                enabledConstraints: {
                                    minSelected: 1,
                                    maxSelected: 1,
                                    constraint: [{ operator: 'falsy', arg0: { prop: '_used' } }]
                                },
                                execute: {
                                    type: 'request',
                                    request: {
                                        service: 'ShareMgmt',
                                        method: 'fromSnapshot',
                                        params: {
                                            uuid: '{{ sharedfolderref }}',
                                            id: '{{ id }}'
                                        },
                                        successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The shared folder {{ _selected[0].name }} was successfully created.')
                                    }
                                }
                            },
                            {
                                template: 'delete',
                                enabledConstraints: {
                                    constraint: [
                                        // Disable button if the snapshot is in use.
                                        { operator: 'falsy', arg0: { prop: '_used' } }
                                    ]
                                },
                                execute: {
                                    type: 'request',
                                    request: {
                                        service: 'ShareMgmt',
                                        method: 'deleteSnapshot',
                                        params: {
                                            uuid: '{{ sharedfolderref }}',
                                            id: '{{ id }}'
                                        }
                                    }
                                }
                            }
                        ],
                        buttons: [
                            {
                                template: 'back',
                                url: '/storage/shared-folders'
                            }
                        ]
                    }
                },
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduled Tasks'),
                    type: 'datatable',
                    config: {
                        stateId: 'd1f00a2c-c002-11ed-9171-6f9f7fbdd288',
                        autoReload: false,
                        limit: 0,
                        hasFooter: true,
                        hasSearchField: true,
                        selectionType: 'multi',
                        columns: [
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                                prop: 'enable',
                                flexGrow: 1,
                                sortable: true,
                                cellTemplateName: 'checkIcon'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduling'),
                                prop: '',
                                flexGrow: 1,
                                cellTemplateName: 'template',
                                cellTemplateConfig: '{% if execution == "exactly" %}' +
                                    '{% set _minute = minute %}' +
                                    '{% set _hour = hour %}' +
                                    '{% set _dayofmonth = dayofmonth %}' +
                                    '{% if everynminute %}{% set _minute %}*/{{ minute }}{% endset %}{% endif %}' +
                                    '{% if everynhour %}{% set _hour %}*/{{ hour }}{% endset %}{% endif %}' +
                                    '{% if everyndayofmonth %}{% set _dayofmonth %}*/{{ dayofmonth }}{% endset %}{% endif %}' +
                                    '{{ [_minute, _hour, _dayofmonth, month, dayofweek] | join(" ") | cron2human }}' +
                                    '{% else %}' +
                                    '{{ execution | capitalize | translate }}' +
                                    '{% endif %}'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Command'),
                                prop: 'command',
                                cellTemplateName: 'text',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                                prop: 'comment',
                                cellTemplateName: 'chip',
                                cellTemplateConfig: {
                                    separator: ','
                                },
                                flexGrow: 1,
                                sortable: true
                            }
                        ],
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'enable'
                            }
                        ],
                        store: {
                            proxy: {
                                service: 'ShareMgmt',
                                get: {
                                    method: 'enumerateAllScheduledSnapshotTasks',
                                    params: {}
                                }
                            }
                        },
                        actions: [
                            {
                                template: 'edit',
                                execute: {
                                    type: 'url',
                                    url: '/system/cron/edit/{{ _selected[0].uuid }}'
                                }
                            },
                            {
                                template: 'delete',
                                execute: {
                                    type: 'request',
                                    request: {
                                        service: 'Cron',
                                        method: 'delete',
                                        params: {
                                            uuid: '{{ uuid }}'
                                        }
                                    }
                                }
                            }
                        ],
                        buttons: [
                            {
                                template: 'back',
                                url: '/storage/shared-folders'
                            }
                        ]
                    }
                },
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
                    type: 'form',
                    config: {
                        request: {
                            service: 'ShareMgmt',
                            get: {
                                method: 'getSnapshotLifecycle',
                                params: {}
                            },
                            post: {
                                method: 'setSnapshotLifecycle',
                                params: {}
                            }
                        },
                        fields: [
                            {
                                type: 'checkbox',
                                name: 'enable',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable automatic snapshot clean up.'),
                                value: false
                            },
                            {
                                type: 'numberInput',
                                name: 'retentionperiod',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Retention period'),
                                hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The retention period (in seconds) before a snapshot can be deleted. This ensures that a snapshot that has just been created cannot be deleted again immediately.'),
                                value: 1800,
                                validators: {
                                    min: 0,
                                    max: 65535,
                                    patternType: 'integer'
                                }
                            },
                            {
                                type: 'numberInput',
                                name: 'limitcustom',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Limit custom'),
                                hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The number of custom snapshots to keep.'),
                                value: 10,
                                validators: {
                                    min: 0,
                                    max: 1024,
                                    patternType: 'integer'
                                }
                            },
                            {
                                type: 'numberInput',
                                name: 'limithourly',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Limit hourly'),
                                hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The number of hourly snapshots to keep.'),
                                value: 24,
                                validators: {
                                    min: 0,
                                    max: 1024,
                                    patternType: 'integer'
                                }
                            },
                            {
                                type: 'numberInput',
                                name: 'limitdaily',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Limit daily'),
                                hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The number of daily snapshots to keep.'),
                                value: 7,
                                validators: {
                                    min: 0,
                                    max: 1024,
                                    patternType: 'integer'
                                }
                            },
                            {
                                type: 'numberInput',
                                name: 'limitweekly',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Limit weekly'),
                                hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The number of weekly snapshots to keep.'),
                                value: 4,
                                validators: {
                                    min: 0,
                                    max: 1024,
                                    patternType: 'integer'
                                }
                            },
                            {
                                type: 'numberInput',
                                name: 'limitmonthly',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Limit monthly'),
                                hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The number of monthly snapshots to keep.'),
                                value: 12,
                                validators: {
                                    min: 0,
                                    max: 1024,
                                    patternType: 'integer'
                                }
                            },
                            {
                                type: 'numberInput',
                                name: 'limityearly',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Limit yearly'),
                                hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The number of yearly snapshots to keep.'),
                                value: 1,
                                validators: {
                                    min: 0,
                                    max: 1024,
                                    patternType: 'integer'
                                }
                            }
                        ],
                        buttons: [
                            {
                                template: 'submit'
                            },
                            {
                                template: 'back',
                                execute: {
                                    type: 'url',
                                    url: '/storage/shared-folders'
                                }
                            }
                        ]
                    }
                }
            ]
        };
    }
}
SharedFolderAllSnapshotsTabsPageComponent.ɵfac = function SharedFolderAllSnapshotsTabsPageComponent_Factory(t) { return new (t || SharedFolderAllSnapshotsTabsPageComponent)(); };
SharedFolderAllSnapshotsTabsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SharedFolderAllSnapshotsTabsPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SharedFolderAllSnapshotsTabsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-tabs-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__.TabsPageComponent], encapsulation: 2 });


/***/ }),

/***/ 65149:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/storage/shared-folders/shared-folder-datatable-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFolderDatatablePageComponent": () => (/* binding */ SharedFolderDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class SharedFolderDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: 'c0a05d92-2d72-11ea-9b29-33dda9c523cc',
            autoReload: false,
            hasSearchField: true,
            remoteSorting: true,
            remotePaging: true,
            sorters: [
                {
                    dir: 'asc',
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'ShareMgmt',
                    get: {
                        method: 'getList',
                        params: {}
                    }
                },
                transform: {
                    absdirpath: '/{{ [mntent.dir, reldirpath] | map("strip", "/")  | compact() | join("/") }}'
                }
            },
            rowEnumFmt: '{{ name }}',
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    prop: 'name',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    prop: 'device',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Relative Path'),
                    prop: 'reldirpath',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Absolute Path'),
                    prop: 'absdirpath',
                    flexGrow: 2,
                    sortable: true,
                    cellTemplateName: 'copyToClipboard'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Referenced'),
                    prop: '_used',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    prop: 'comment',
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        separator: ','
                    },
                    flexGrow: 1,
                    sortable: true
                }
            ],
            actions: [
                {
                    template: 'create',
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:folder-key',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders/permissions/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:format-list-checks',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Access control list'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [
                            // Enable button if the selected shared folder is located on
                            // a POSIX compliant file system.
                            { operator: 'truthy', arg0: { prop: 'mntent.posixacl' } }
                        ]
                    },
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders/acl/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:camera',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Snapshots'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [{ operator: 'truthy', arg0: { prop: 'snapshots' } }]
                    },
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders/snapshots/{{ _selected[0].uuid }}'
                    }
                },
                {
                    template: 'delete',
                    enabledConstraints: {
                        constraint: [
                            // Disable button if a selected shared folder is in use.
                            { operator: 'falsy', arg0: { prop: '_used' } }
                        ]
                    },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'ShareMgmt',
                            method: 'delete',
                            params: {
                                uuid: '{{ uuid }}',
                                recursive: false
                            }
                        }
                    }
                },
                {
                    type: 'divider'
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:camera',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('All Snapshots'),
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders/snapshots'
                    }
                }
            ]
        };
    }
}
SharedFolderDatatablePageComponent.ɵfac = function SharedFolderDatatablePageComponent_Factory(t) { return new (t || SharedFolderDatatablePageComponent)(); };
SharedFolderDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SharedFolderDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SharedFolderDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 16632:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/storage/shared-folders/shared-folder-form-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFolderFormPageComponent": () => (/* binding */ SharedFolderFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SharedFolderFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'ShareMgmt',
                get: {
                    method: 'get',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'set'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'textInput',
                    name: 'name',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    value: '',
                    updateOn: 'blur',
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'uuid' }, arg1: '{{ newconfobjuuid }}' }
                        }
                    ],
                    validators: {
                        required: true,
                        patternType: 'shareName'
                    }
                },
                {
                    type: 'select',
                    name: 'mntentref',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('File system'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a file system ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The file system on which the shared folder is to be created.'),
                    valueField: 'uuid',
                    textField: 'description',
                    store: {
                        proxy: {
                            service: 'ShareMgmt',
                            get: {
                                method: 'getCandidates',
                                params: {}
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'description'
                            }
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'folderBrowser',
                    name: 'reldirpath',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Relative path'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The relative path of the folder to share. The specified folder will be created if it does not exist.'),
                    value: '',
                    dirType: 'mntent',
                    dirRefIdField: 'mntentref',
                    modifiers: [
                        {
                            type: 'value',
                            typeConfig: '{{ name | rstrip("/") }}/',
                            constraint: {
                                operator: 'and',
                                arg0: { operator: 'notEmpty', arg0: { prop: 'name' } },
                                arg1: { operator: 'empty', arg0: { prop: 'reldirpath' } }
                            }
                        }
                    ],
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'mode',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select permissions ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The file mode of the shared folder path.'),
                    value: '775',
                    store: {
                        data: [
                            ['700', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Administrator: read/write, Users: no access, Others: no access')],
                            ['750', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Administrator: read/write, Users: read-only, Others: no access')],
                            ['770', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Administrator: read/write, Users: read/write, Others: no access')],
                            ['755', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Administrator: read/write, Users: read-only, Others: read-only')],
                            ['775', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Administrator: read/write, Users: read/write, Others: read-only')],
                            ['777', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Everyone: read/write')]
                        ]
                    },
                    modifiers: [
                        {
                            type: 'visible',
                            constraint: { operator: 'eq', arg0: { prop: 'uuid' }, arg1: '{{ newconfobjuuid }}' }
                        }
                    ],
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/storage/shared-folders'
                    }
                }
            ]
        };
    }
}
SharedFolderFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSharedFolderFormPageComponent_BaseFactory; return function SharedFolderFormPageComponent_Factory(t) { return (ɵSharedFolderFormPageComponent_BaseFactory || (ɵSharedFolderFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SharedFolderFormPageComponent)))(t || SharedFolderFormPageComponent); }; }();
SharedFolderFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SharedFolderFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SharedFolderFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 20146:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/storage/shared-folders/shared-folder-permissions-datatable-page.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFolderPermissionsDatatablePageComponent": () => (/* binding */ SharedFolderPermissionsDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);
/* harmony import */ var _app_functions_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/functions.helper */ 57169);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/rpc.service */ 24358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);













class SharedFolderPermissionsDatatablePageComponent {
    constructor(router, rpcService, notificationService) {
        this.router = router;
        this.rpcService = rpcService;
        this.notificationService = notificationService;
        this.config = {
            stateId: '99f40468-8309-11ea-834f-cbe87c99180b',
            autoReload: false,
            limit: 0,
            hasFooter: false,
            hasSearchField: true,
            hints: [
                {
                    type: 'info',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('These settings are used by the services to configure the user and group access rights. Please note that these settings have no effect on file system permissions.')
                }
            ],
            selectionType: 'none',
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'), prop: 'name', flexGrow: 2, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    prop: 'type',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            user: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User') },
                            group: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Group') }
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    prop: 'perms',
                    flexGrow: 3,
                    sortable: true,
                    cellTemplateName: 'buttonToggle',
                    cellTemplateConfig: {
                        buttons: [
                            {
                                value: '7',
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write')
                            },
                            {
                                value: '5',
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read-only')
                            },
                            {
                                value: '0',
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('No access')
                            }
                        ]
                    }
                }
            ],
            sorters: [
                {
                    dir: 'desc',
                    prop: 'type'
                },
                {
                    dir: 'asc',
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'ShareMgmt',
                    get: {
                        method: 'getPrivileges',
                        params: {
                            uuid: '{{ _routeParams.uuid }}'
                        }
                    }
                }
            },
            actions: [
                {
                    type: 'iconButton',
                    icon: 'mdi:transfer',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy permissions'),
                    execute: {
                        type: 'formDialog',
                        formDialog: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy permissions'),
                            fields: [
                                {
                                    type: 'sharedFolderSelect',
                                    name: 'src',
                                    store: {
                                        filters: [
                                            { operator: 'ne', arg0: { prop: 'uuid' }, arg1: '{{ _routeParams.uuid }}' }
                                        ]
                                    },
                                    hasCreateButton: false,
                                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source'),
                                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The shared folder from which the permissions are copied.'),
                                    validators: {
                                        required: true
                                    }
                                },
                                {
                                    type: 'hidden',
                                    name: 'dst',
                                    value: '{{ _routeParams.uuid }}'
                                }
                            ],
                            buttons: {
                                submit: {
                                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy'),
                                    execute: {
                                        type: 'request',
                                        request: {
                                            service: 'ShareMgmt',
                                            method: 'copyPrivileges',
                                            params: {},
                                            successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder permissions have been copied.')
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ],
            buttons: [
                {
                    template: 'cancel',
                    url: '/storage/shared-folders'
                },
                {
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Save'),
                    class: 'omv-background-color-pair-primary',
                    click: this.onSave.bind(this)
                }
            ]
        };
    }
    onSave() {
        const privileges = lodash__WEBPACK_IMPORTED_MODULE_1__.map(lodash__WEBPACK_IMPORTED_MODULE_1__.reject(this.page.table.data, ['perms', null]), (obj) => ({
            name: obj.name,
            type: obj.type,
            perms: lodash__WEBPACK_IMPORTED_MODULE_1__.toInteger(obj.perms)
        }));
        this.rpcService
            .request('ShareMgmt', 'setPrivileges', {
            uuid: lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeParams, 'uuid'),
            privileges
        })
            .subscribe(() => {
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_4__.NotificationType.success, (0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_3__.format)(lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeConfig, 'data.notificationTitle'), this.page.routeParams));
            this.router.navigate(['/storage/shared-folders']);
        });
    }
}
SharedFolderPermissionsDatatablePageComponent.ɵfac = function SharedFolderPermissionsDatatablePageComponent_Factory(t) { return new (t || SharedFolderPermissionsDatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_6__.RpcService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService)); };
SharedFolderPermissionsDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SharedFolderPermissionsDatatablePageComponent, selectors: [["ng-component"]], viewQuery: function SharedFolderPermissionsDatatablePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DatatablePageComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } }, decls: 1, vars: 1, consts: [[3, "config"]], template: function SharedFolderPermissionsDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 12322:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/storage/shared-folders/shared-folder-snapshots-tabs-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFolderSnapshotsTabsPageComponent": () => (/* binding */ SharedFolderSnapshotsTabsPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/tabs-page/tabs-page.component */ 84696);



class SharedFolderSnapshotsTabsPageComponent {
    constructor() {
        this.config = {
            tabs: [
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Snapshots'),
                    type: 'datatable',
                    config: {
                        stateId: '7fcc8590-a2e3-11ed-ac0f-238d9ec75eda',
                        autoReload: false,
                        limit: 0,
                        hasFooter: true,
                        hasSearchField: false,
                        selectionType: 'multi',
                        columns: [
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('ID'),
                                prop: 'id',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                                prop: 'name',
                                flexGrow: 2,
                                sortable: true
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Creation Time'),
                                prop: 'otimets',
                                flexGrow: 1,
                                sortable: true,
                                cellTemplateName: 'localeDateTime'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('UUID'),
                                prop: 'uuid',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Parent UUID'),
                                prop: 'parent_uuid',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Relative Path'),
                                prop: 'path',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Absolute Path'),
                                prop: 'abspath',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true,
                                cellTemplateName: 'copyToClipboard'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Referenced'),
                                prop: '_used',
                                flexGrow: 1,
                                sortable: true,
                                cellTemplateName: 'checkIcon'
                            }
                        ],
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'name'
                            }
                        ],
                        store: {
                            proxy: {
                                service: 'ShareMgmt',
                                get: {
                                    method: 'enumerateSnapshots',
                                    params: {
                                        uuid: '{{ _routeParams.uuid }}'
                                    }
                                }
                            }
                        },
                        actions: [
                            {
                                template: 'create',
                                execute: {
                                    type: 'request',
                                    request: {
                                        service: 'ShareMgmt',
                                        method: 'createSnapshot',
                                        params: {
                                            uuid: '{{ _routeParams.uuid }}'
                                        },
                                        progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, a snapshot will be created ...'),
                                        successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("The snapshot '{{ _response.name }}' has been created for the shared folder '{{ _response.sharedfolder }}'.")
                                    }
                                }
                            },
                            {
                                type: 'iconButton',
                                icon: 'share',
                                tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Share'),
                                enabledConstraints: {
                                    minSelected: 1,
                                    maxSelected: 1,
                                    constraint: [{ operator: 'falsy', arg0: { prop: '_used' } }]
                                },
                                execute: {
                                    type: 'request',
                                    request: {
                                        service: 'ShareMgmt',
                                        method: 'fromSnapshot',
                                        params: {
                                            uuid: '{{ _routeParams.uuid }}',
                                            id: '{{ id }}'
                                        },
                                        progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, a shared folder will be created ...'),
                                        successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The shared folder {{ _selected[0].name }} was successfully created.')
                                    }
                                }
                            },
                            // {
                            //   type: 'iconButton',
                            //   icon: 'restore',
                            //   tooltip: gettext('Restore'),
                            //   enabledConstraints: {
                            //     minSelected: 1,
                            //     maxSelected: 1
                            //   },
                            //   execute: {
                            //     type: 'request',
                            //     request: {
                            //       service: 'ShareMgmt',
                            //       method: 'restoreSnapshot',
                            //       params: {
                            //         uuid: '{{ _routeParams.uuid }}',
                            //         id: '{{ id }}'
                            //       }
                            //     }
                            //   }
                            // },
                            {
                                template: 'delete',
                                enabledConstraints: {
                                    constraint: [
                                        // Disable button if the snapshot is in use.
                                        { operator: 'falsy', arg0: { prop: '_used' } }
                                    ]
                                },
                                execute: {
                                    type: 'request',
                                    request: {
                                        service: 'ShareMgmt',
                                        method: 'deleteSnapshot',
                                        params: {
                                            uuid: '{{ _routeParams.uuid }}',
                                            id: '{{ id }}'
                                        }
                                    }
                                }
                            }
                        ],
                        buttons: [
                            {
                                template: 'back',
                                url: '/storage/shared-folders'
                            }
                        ]
                    }
                },
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduled Tasks'),
                    type: 'datatable',
                    config: {
                        stateId: '5762ee82-ad1f-11ed-98df-0b261daceb5d',
                        autoReload: false,
                        limit: 0,
                        hasFooter: true,
                        hasSearchField: false,
                        selectionType: 'multi',
                        columns: [
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                                prop: 'enable',
                                flexGrow: 1,
                                sortable: true,
                                cellTemplateName: 'checkIcon'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduling'),
                                prop: '',
                                flexGrow: 1,
                                cellTemplateName: 'template',
                                cellTemplateConfig: '{% if execution == "exactly" %}' +
                                    '{% set _minute = minute %}' +
                                    '{% set _hour = hour %}' +
                                    '{% set _dayofmonth = dayofmonth %}' +
                                    '{% if everynminute %}{% set _minute %}*/{{ minute }}{% endset %}{% endif %}' +
                                    '{% if everynhour %}{% set _hour %}*/{{ hour }}{% endset %}{% endif %}' +
                                    '{% if everyndayofmonth %}{% set _dayofmonth %}*/{{ dayofmonth }}{% endset %}{% endif %}' +
                                    '{{ [_minute, _hour, _dayofmonth, month, dayofweek] | join(" ") | cron2human }}' +
                                    '{% else %}' +
                                    '{{ execution | capitalize | translate }}' +
                                    '{% endif %}'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Command'),
                                prop: 'command',
                                cellTemplateName: 'text',
                                flexGrow: 1,
                                sortable: true,
                                hidden: true
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                                prop: 'comment',
                                cellTemplateName: 'chip',
                                cellTemplateConfig: {
                                    separator: ','
                                },
                                flexGrow: 1,
                                sortable: true
                            }
                        ],
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'enable'
                            }
                        ],
                        store: {
                            proxy: {
                                service: 'ShareMgmt',
                                get: {
                                    method: 'enumerateScheduledSnapshotTasks',
                                    params: {
                                        uuid: '{{ _routeParams.uuid }}'
                                    }
                                }
                            }
                        },
                        actions: [
                            {
                                type: 'menu',
                                icon: 'add',
                                tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                                actions: [
                                    {
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hourly'),
                                        execute: {
                                            type: 'request',
                                            request: {
                                                service: 'ShareMgmt',
                                                method: 'createScheduledSnapshotTask',
                                                params: {
                                                    uuid: '{{ _routeParams.uuid }}',
                                                    execution: 'hourly'
                                                },
                                                successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('A scheduled task to create a snapshot has been created.')
                                            }
                                        }
                                    },
                                    {
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Daily'),
                                        execute: {
                                            type: 'request',
                                            request: {
                                                service: 'ShareMgmt',
                                                method: 'createScheduledSnapshotTask',
                                                params: {
                                                    uuid: '{{ _routeParams.uuid }}',
                                                    execution: 'daily'
                                                },
                                                successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('A scheduled task to create a snapshot has been created.')
                                            }
                                        }
                                    },
                                    {
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Weekly'),
                                        execute: {
                                            type: 'request',
                                            request: {
                                                service: 'ShareMgmt',
                                                method: 'createScheduledSnapshotTask',
                                                params: {
                                                    uuid: '{{ _routeParams.uuid }}',
                                                    execution: 'weekly'
                                                },
                                                successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('A scheduled task to create a snapshot has been created.')
                                            }
                                        }
                                    },
                                    {
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monthly'),
                                        execute: {
                                            type: 'request',
                                            request: {
                                                service: 'ShareMgmt',
                                                method: 'createScheduledSnapshotTask',
                                                params: {
                                                    uuid: '{{ _routeParams.uuid }}',
                                                    execution: 'monthly'
                                                },
                                                successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('A scheduled task to create a snapshot has been created.')
                                            }
                                        }
                                    },
                                    {
                                        text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Yearly'),
                                        execute: {
                                            type: 'request',
                                            request: {
                                                service: 'ShareMgmt',
                                                method: 'createScheduledSnapshotTask',
                                                params: {
                                                    uuid: '{{ _routeParams.uuid }}',
                                                    execution: 'yearly'
                                                },
                                                successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('A scheduled task to create a snapshot has been created.')
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                template: 'edit',
                                execute: {
                                    type: 'url',
                                    url: '/system/cron/edit/{{ _selected[0].uuid }}'
                                }
                            },
                            {
                                template: 'delete',
                                execute: {
                                    type: 'request',
                                    request: {
                                        service: 'Cron',
                                        method: 'delete',
                                        params: {
                                            uuid: '{{ uuid }}'
                                        }
                                    }
                                }
                            }
                        ],
                        buttons: [
                            {
                                template: 'back',
                                url: '/storage/shared-folders'
                            }
                        ]
                    }
                }
            ]
        };
    }
}
SharedFolderSnapshotsTabsPageComponent.ɵfac = function SharedFolderSnapshotsTabsPageComponent_Factory(t) { return new (t || SharedFolderSnapshotsTabsPageComponent)(); };
SharedFolderSnapshotsTabsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SharedFolderSnapshotsTabsPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SharedFolderSnapshotsTabsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-tabs-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__.TabsPageComponent], encapsulation: 2 });


/***/ }),

/***/ 24472:
/*!******************************************************************************!*\
  !*** ./src/app/pages/storage/smart/smart-device-datatable-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartDeviceDatatablePageComponent": () => (/* binding */ SmartDeviceDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class SmartDeviceDatatablePageComponent {
    constructor() {
        this.config = {
            autoReload: false,
            stateId: '453b944e-4d7c-11ea-b897-2bd8eeecbd33',
            sorters: [
                {
                    dir: 'asc',
                    prop: 'devicefile'
                }
            ],
            store: {
                proxy: {
                    service: 'Smart',
                    get: {
                        method: 'getListBg',
                        task: true
                    }
                },
                transform: {
                    temperature: '{% if temperature %}{{ temperature }} °C{% endif %}'
                }
            },
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monitored'),
                    prop: 'monitor',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    prop: 'canonicaldevicefile',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device Symlinks'),
                    prop: 'devicelinks',
                    flexGrow: 2,
                    sortable: false,
                    hidden: true,
                    cellTemplateName: 'unsortedList'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Model'),
                    prop: 'model',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Vendor'),
                    prop: 'vendor',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Serial Number'),
                    prop: 'serialnumber',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('WWN'),
                    prop: 'wwn',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Capacity'),
                    prop: 'size',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'binaryUnit'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Temperature'),
                    prop: 'temperature',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Status'),
                    prop: 'overallstatus',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        /* eslint-disable @typescript-eslint/naming-convention */
                        map: {
                            GOOD: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Good'), class: 'omv-background-color-pair-success' },
                            BAD_STATUS: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Unknown') },
                            BAD_ATTRIBUTE_NOW: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bad'),
                                class: 'omv-background-color-pair-error',
                                tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device is being used outside design parameters.')
                            },
                            BAD_ATTRIBUTE_IN_THE_PAST: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bad'),
                                class: 'omv-background-color-pair-error',
                                tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device was used outside of design parameters in the past.')
                            },
                            BAD_SECTOR: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Warning'),
                                class: 'omv-background-color-pair-warning',
                                tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device has a few bad sectors.')
                            },
                            BAD_SECTOR_MANY: {
                                value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bad'),
                                class: 'omv-background-color-pair-error',
                                tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device has many bad sectors.')
                            }
                        }
                    }
                }
            ],
            actions: [
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: 
                        // eslint-disable-next-line max-len
                        '/storage/smart/devices/{{ "create" if _selected[0].uuid == newconfobjuuid else "edit" }}/{{ _selected[0].uuid }}/{{ _selected[0].devicefile | encodeuricomponent }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'details',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Show details'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'url',
                        url: '/storage/smart/devices/details/{{ _selected[0].devicefile | encodeuricomponent }}'
                    }
                }
            ]
        };
    }
}
SmartDeviceDatatablePageComponent.ɵfac = function SmartDeviceDatatablePageComponent_Factory(t) { return new (t || SmartDeviceDatatablePageComponent)(); };
SmartDeviceDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SmartDeviceDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmartDeviceDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 86665:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/storage/smart/smart-device-details-tabs-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartDeviceDetailsTabsPageComponent": () => (/* binding */ SmartDeviceDetailsTabsPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/tabs-page/tabs-page.component */ 84696);



class SmartDeviceDetailsTabsPageComponent {
    constructor() {
        this.config = {
            tabs: [
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device Information'),
                    type: 'form',
                    config: {
                        request: {
                            service: 'Smart',
                            get: {
                                method: 'getInformation',
                                params: {
                                    devicefile: '{{ _routeParams.devicefile }}'
                                },
                                transform: {
                                    poweronhours: '{% if poweronhours %}{{ (poweronhours / 24) | round(1) }} d{% endif %}',
                                    temperature: '{% if temperature %}{{ temperature }} °C{% endif %}'
                                }
                            }
                        },
                        fields: [
                            {
                                type: 'textInput',
                                name: 'devicefile',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                                disabled: true
                            },
                            {
                                type: 'textInput',
                                name: 'devicemodel',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Model'),
                                disabled: true
                            },
                            {
                                type: 'textInput',
                                name: 'serialnumber',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Serial number'),
                                disabled: true
                            },
                            {
                                type: 'textInput',
                                name: 'wwn',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('WWN'),
                                disabled: true
                            },
                            {
                                type: 'textInput',
                                name: 'firmwareversion',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Firmware version'),
                                disabled: true
                            },
                            {
                                type: 'textInput',
                                name: 'powercycles',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Power cycle count'),
                                disabled: true
                            },
                            {
                                type: 'textInput',
                                name: 'poweronhours',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Powered on'),
                                disabled: true
                            },
                            {
                                type: 'textInput',
                                name: 'temperature',
                                label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Temperature'),
                                disabled: true
                            }
                        ]
                    }
                },
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Attributes'),
                    type: 'datatable',
                    config: {
                        autoReload: false,
                        stateId: '7a0f3b78-4dc0-11ea-a8af-fb0e090c7ceb',
                        hasFooter: false,
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'id'
                            }
                        ],
                        store: {
                            proxy: {
                                service: 'Smart',
                                get: {
                                    method: 'getAttributes',
                                    params: {
                                        devicefile: '{{ _routeParams.devicefile }}'
                                    }
                                }
                            }
                        },
                        columns: [
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('ID'),
                                prop: 'id',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                                prop: 'attrname',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Flags'),
                                prop: 'flags',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Value'),
                                prop: 'value',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Worst'),
                                prop: 'worst',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Threshold'),
                                prop: 'threshold',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Failed'),
                                prop: 'whenfailed',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Raw value'),
                                prop: 'rawvalue',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                                prop: 'prefailure',
                                flexGrow: 1,
                                cellTemplateName: 'chip',
                                cellTemplateConfig: {
                                    map: {
                                        true: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefail') },
                                        false: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Old-age') }
                                    }
                                }
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Status'),
                                prop: 'assessment',
                                flexGrow: 1,
                                cellTemplateName: 'chip',
                                cellTemplateConfig: {
                                    map: {
                                        /* eslint-disable @typescript-eslint/naming-convention */
                                        GOOD: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Good'), class: 'omv-background-color-pair-success' },
                                        BAD_STATUS: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Unknown') },
                                        BAD_ATTRIBUTE_NOW: {
                                            value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bad'),
                                            class: 'omv-background-color-pair-error',
                                            tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device is being used outside design parameters.')
                                        },
                                        BAD_ATTRIBUTE_IN_THE_PAST: {
                                            value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bad'),
                                            class: 'omv-background-color-pair-error',
                                            tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device was used outside of design parameters in the past.')
                                        },
                                        BAD_SECTOR: {
                                            value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bad'),
                                            class: 'omv-background-color-pair-error',
                                            tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device has a few bad sectors.')
                                        },
                                        BAD_SECTOR_MANY: {
                                            value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bad'),
                                            class: 'omv-background-color-pair-error',
                                            tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device has many bad sectors.')
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Self-Test Logs'),
                    type: 'datatable',
                    config: {
                        autoReload: false,
                        stateId: '95a1f87e-4dc2-11ea-96be-0baa564da0f5',
                        hasFooter: false,
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'id'
                            }
                        ],
                        store: {
                            proxy: {
                                service: 'Smart',
                                get: {
                                    method: 'getSelfTestLogs',
                                    params: {
                                        devicefile: '{{ _routeParams.devicefile }}'
                                    }
                                }
                            }
                        },
                        columns: [
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Num'),
                                prop: 'num',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Description'),
                                prop: 'description',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Status'),
                                prop: 'status',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Remaining'),
                                prop: 'remaining',
                                flexGrow: 1,
                                cellTemplateName: 'template',
                                cellTemplateConfig: '{{ remaining  }}%'
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Lifetime'),
                                prop: 'lifetime',
                                flexGrow: 1
                            },
                            {
                                name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('LBA of first error'),
                                prop: 'lbaoffirsterror',
                                flexGrow: 1
                            }
                        ]
                    }
                },
                {
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extended Information'),
                    type: 'text',
                    config: {
                        hasCopyToClipboardButton: true,
                        hasReloadButton: true,
                        request: {
                            service: 'Smart',
                            get: {
                                method: 'getExtendedInformation',
                                params: {
                                    devicefile: '{{ _routeParams.devicefile }}'
                                }
                            }
                        }
                    }
                }
            ]
        };
    }
}
SmartDeviceDetailsTabsPageComponent.ɵfac = function SmartDeviceDetailsTabsPageComponent_Factory(t) { return new (t || SmartDeviceDetailsTabsPageComponent)(); };
SmartDeviceDetailsTabsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SmartDeviceDetailsTabsPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmartDeviceDetailsTabsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-tabs-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__.TabsPageComponent], encapsulation: 2 });


/***/ }),

/***/ 72662:
/*!*************************************************************************!*\
  !*** ./src/app/pages/storage/smart/smart-device-form-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartDeviceFormPageComponent": () => (/* binding */ SmartDeviceFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SmartDeviceFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Smart',
                get: {
                    method: 'getDeviceSettings',
                    params: {
                        devicefile: '{{ _routeParams.devicefile }}'
                    }
                },
                post: {
                    method: 'setDeviceSettings'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'hidden',
                    name: '_used'
                },
                {
                    type: 'select',
                    name: 'devicefile',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    valueField: 'devicefile',
                    textField: 'description',
                    disabled: true,
                    value: '{{ _routeParams.devicefile }}',
                    store: {
                        proxy: {
                            service: 'Smart',
                            get: {
                                method: 'enumerateDevices'
                            }
                        }
                    }
                },
                {
                    type: 'checkbox',
                    name: 'enable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monitoring enabled'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Activate S.M.A.R.T. monitoring for this device. Note that only monitored devices are listed in the scheduled tasks. Monitoring cannot be switched off as long as there are scheduled tasks for this device.'),
                    value: false,
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'truthy', arg0: { prop: '_used' } }
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Temperature monitoring')
                },
                {
                    type: 'select',
                    name: 'tempdiff',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Difference'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Report if the temperature had changed by at least N degrees Celsius since last report.'),
                    value: 0,
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Use global settings')],
                            [1, '1 °C'],
                            [2, '2 °C'],
                            [3, '3 °C'],
                            [4, '4 °C'],
                            [5, '5 °C'],
                            [6, '6 °C'],
                            [7, '7 °C'],
                            [8, '8 °C'],
                            [9, '9 °C'],
                            [10, '10 °C'],
                            [11, '11 °C'],
                            [12, '12 °C'],
                            [13, '13 °C'],
                            [14, '14 °C'],
                            [15, '15 °C']
                        ]
                    },
                    validators: {
                        min: 0,
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'tempmax',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Maximum'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Report if the temperature is greater than or equal to N degrees Celsius.'),
                    value: 0,
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Use global settings')],
                            [5, '5 °C'],
                            [10, '10 °C'],
                            [15, '15 °C'],
                            [20, '20 °C'],
                            [25, '25 °C'],
                            [30, '30 °C'],
                            [35, '35 °C'],
                            [40, '40 °C'],
                            [45, '45 °C'],
                            [50, '50 °C'],
                            [55, '55 °C'],
                            [60, '60 °C'],
                            [65, '65 °C'],
                            [70, '70 °C'],
                            [75, '75 °C'],
                            [80, '80 °C'],
                            [85, '85 °C'],
                            [90, '90 °C'],
                            [95, '95 °C'],
                            [100, '100 °C']
                        ]
                    },
                    validators: {
                        min: 0,
                        required: true
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/storage/smart/devices'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/storage/smart/devices'
                    }
                }
            ]
        };
    }
}
SmartDeviceFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSmartDeviceFormPageComponent_BaseFactory; return function SmartDeviceFormPageComponent_Factory(t) { return (ɵSmartDeviceFormPageComponent_BaseFactory || (ɵSmartDeviceFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SmartDeviceFormPageComponent)))(t || SmartDeviceFormPageComponent); }; }();
SmartDeviceFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmartDeviceFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmartDeviceFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 80191:
/*!***************************************************************************!*\
  !*** ./src/app/pages/storage/smart/smart-settings-form-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartSettingsFormPageComponent": () => (/* binding */ SmartSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SmartSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Smart',
                get: {
                    method: 'getSettings'
                },
                post: {
                    method: 'setSettings'
                }
            },
            fields: [
                /* eslint-disable max-len */
                {
                    type: 'checkbox',
                    name: 'enable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: false
                },
                {
                    type: 'numberInput',
                    name: 'interval',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Check interval'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sets the interval between disk checks to N seconds.') +
                        '&nbsp;' +
                        (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Take caution when setting this polling interval to more than sixty minutes. The poll times may fail to coincide with any of the scheduled test that have been specified. In this case the scheduled test will be run following the next device polling.'),
                    value: 1800,
                    validators: {
                        min: 10,
                        patternType: 'integer',
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'powermode',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Power mode'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prevent a disk from being spun-up when it is periodically polled.<ul><li>Never - Poll (check) the device regardless of its power mode. This may cause a disk which is spun-down to be spun-up when it is checked.</li><li>Sleep - Check the device unless it is in SLEEP mode.</li><li>Standby - Check the device unless it is in SLEEP or STANDBY mode. In these modes most disks are not spinning, so if you want to prevent a disk from spinning up each poll, this is probably what you want.</li><li>Idle - Check the device unless it is in SLEEP, STANDBY or IDLE mode. In the IDLE state, most disks are still spinning, so this is probably not what you want.</li></ul>'),
                    value: 'standby',
                    store: {
                        data: [
                            ['never', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Never')],
                            ['sleep', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sleep')],
                            ['standby', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Standby')],
                            ['idle', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Idle')]
                        ]
                    }
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Temperature monitoring')
                },
                {
                    type: 'select',
                    name: 'tempdiff',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Difference'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Report if the temperature had changed by at least N degrees Celsius since last report.'),
                    value: 0,
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            [1, '1 °C'],
                            [2, '2 °C'],
                            [3, '3 °C'],
                            [4, '4 °C'],
                            [5, '5 °C'],
                            [6, '6 °C'],
                            [7, '7 °C'],
                            [8, '8 °C'],
                            [9, '9 °C'],
                            [10, '10 °C'],
                            [11, '11 °C'],
                            [12, '12 °C'],
                            [13, '13 °C'],
                            [14, '14 °C'],
                            [15, '15 °C']
                        ]
                    },
                    validators: {
                        min: 0,
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'tempmax',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Maximum'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Report if the temperature is greater than or equal to N degrees Celsius.'),
                    value: 0,
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            [5, '5 °C'],
                            [10, '10 °C'],
                            [15, '15 °C'],
                            [20, '20 °C'],
                            [25, '25 °C'],
                            [30, '30 °C'],
                            [35, '35 °C'],
                            [40, '40 °C'],
                            [45, '45 °C'],
                            [50, '50 °C'],
                            [55, '55 °C'],
                            [60, '60 °C'],
                            [65, '65 °C'],
                            [70, '70 °C'],
                            [75, '75 °C'],
                            [80, '80 °C'],
                            [85, '85 °C'],
                            [90, '90 °C'],
                            [95, '95 °C'],
                            [100, '100 °C']
                        ]
                    },
                    validators: {
                        min: 0,
                        required: true
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
                        url: '/storage/smart'
                    }
                }
            ]
        };
    }
}
SmartSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSmartSettingsFormPageComponent_BaseFactory; return function SmartSettingsFormPageComponent_Factory(t) { return (ɵSmartSettingsFormPageComponent_BaseFactory || (ɵSmartSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SmartSettingsFormPageComponent)))(t || SmartSettingsFormPageComponent); }; }();
SmartSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmartSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmartSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 53650:
/*!****************************************************************************!*\
  !*** ./src/app/pages/storage/smart/smart-task-datatable-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartTaskDatatablePageComponent": () => (/* binding */ SmartTaskDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class SmartTaskDatatablePageComponent {
    constructor() {
        this.config = {
            autoReload: false,
            stateId: '97ec21be-4d8a-11ea-b4b9-e33289777918',
            sorters: [
                {
                    dir: 'asc',
                    prop: 'devicefile'
                }
            ],
            store: {
                proxy: {
                    service: 'Smart',
                    get: {
                        method: 'getScheduleList'
                    }
                }
            },
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    prop: 'enable',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    prop: 'devicefile',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    prop: 'type',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            /* eslint-disable @typescript-eslint/naming-convention */
                            S: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Short self-test') },
                            L: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Long self-test') },
                            C: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Conveyance self-test') },
                            O: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Offline immediate test') }
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduling'),
                    prop: '',
                    flexGrow: 1,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ hour }} {{ dayofmonth }} {{ month }} {{ dayofweek }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    prop: 'comment',
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        separator: ','
                    },
                    flexGrow: 1,
                    sortable: true
                }
            ],
            actions: [
                {
                    template: 'create',
                    execute: {
                        type: 'url',
                        url: '/storage/smart/tasks/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/storage/smart/tasks/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'start',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Run'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'taskDialog',
                        taskDialog: {
                            config: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Run scheduled task'),
                                startOnInit: true,
                                request: {
                                    service: 'Smart',
                                    method: 'executeScheduledTest',
                                    params: {
                                        uuid: '{{ _selected[0].uuid }}'
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'Smart',
                            method: 'deleteScheduledTest',
                            params: {
                                uuid: '{{ uuid }}'
                            }
                        }
                    }
                }
            ]
        };
    }
}
SmartTaskDatatablePageComponent.ɵfac = function SmartTaskDatatablePageComponent_Factory(t) { return new (t || SmartTaskDatatablePageComponent)(); };
SmartTaskDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SmartTaskDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmartTaskDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 94249:
/*!***********************************************************************!*\
  !*** ./src/app/pages/storage/smart/smart-task-form-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartTaskFormPageComponent": () => (/* binding */ SmartTaskFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SmartTaskFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Smart',
                get: {
                    method: 'getScheduledTest',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setScheduledTest'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'checkbox',
                    name: 'enable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: true
                },
                {
                    type: 'select',
                    name: 'devicefile',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a device ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('S.M.A.R.T. monitoring must be activated for the selected device.'),
                    valueField: 'devicefile',
                    textField: 'description',
                    store: {
                        proxy: {
                            service: 'Smart',
                            get: {
                                method: 'enumerateMonitoredDevices'
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'description'
                            }
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    value: 'S',
                    store: {
                        data: [
                            ['S', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Short self-test')],
                            ['L', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Long self-test')],
                            ['C', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Conveyance self-test')],
                            ['O', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Offline immediate test')]
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'hour',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hour'),
                    value: '{{ moment("H:mm:ss") | split(":") | get(0) }}',
                    store: {
                        data: [
                            ['*', '*'],
                            ['00', '0'],
                            ['01', '1'],
                            ['02', '2'],
                            ['03', '3'],
                            ['04', '4'],
                            ['05', '5'],
                            ['06', '6'],
                            ['07', '7'],
                            ['08', '8'],
                            ['09', '9'],
                            ['10', '10'],
                            ['11', '11'],
                            ['12', '12'],
                            ['13', '13'],
                            ['14', '14'],
                            ['15', '15'],
                            ['16', '16'],
                            ['17', '17'],
                            ['18', '18'],
                            ['19', '19'],
                            ['20', '20'],
                            ['21', '21'],
                            ['22', '22'],
                            ['23', '23']
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'dayofmonth',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Day of month'),
                    value: '*',
                    store: {
                        data: [
                            ['*', '*'],
                            ['01', '1'],
                            ['02', '2'],
                            ['03', '3'],
                            ['04', '4'],
                            ['05', '5'],
                            ['06', '6'],
                            ['07', '7'],
                            ['08', '8'],
                            ['09', '9'],
                            ['10', '10'],
                            ['11', '11'],
                            ['12', '12'],
                            ['13', '13'],
                            ['14', '14'],
                            ['15', '15'],
                            ['16', '16'],
                            ['17', '17'],
                            ['18', '18'],
                            ['19', '19'],
                            ['20', '20'],
                            ['21', '21'],
                            ['22', '22'],
                            ['23', '23'],
                            ['24', '24'],
                            ['25', '25'],
                            ['26', '26'],
                            ['27', '27'],
                            ['28', '28'],
                            ['29', '29'],
                            ['30', '30'],
                            ['31', '31']
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'month',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Month'),
                    value: '*',
                    store: {
                        data: [
                            ['*', '*'],
                            ['01', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('January')],
                            ['02', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('February')],
                            ['03', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('March')],
                            ['04', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('April')],
                            ['05', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('May')],
                            ['06', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('June')],
                            ['07', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('July')],
                            ['08', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('August')],
                            ['09', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('September')],
                            ['10', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('October')],
                            ['11', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('November')],
                            ['12', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('December')]
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'dayofweek',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Day of week'),
                    value: '*',
                    store: {
                        data: [
                            ['*', '*'],
                            ['1', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monday')],
                            ['2', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tuesday')],
                            ['3', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wednesday')],
                            ['4', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Thursday')],
                            ['5', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Friday')],
                            ['6', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Saturday')],
                            ['7', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sunday')]
                        ]
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/storage/smart/tasks'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/storage/smart/tasks'
                    }
                }
            ]
        };
    }
}
SmartTaskFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSmartTaskFormPageComponent_BaseFactory; return function SmartTaskFormPageComponent_Factory(t) { return (ɵSmartTaskFormPageComponent_BaseFactory || (ɵSmartTaskFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SmartTaskFormPageComponent)))(t || SmartTaskFormPageComponent); }; }();
SmartTaskFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmartTaskFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmartTaskFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 96820:
/*!*********************************************************!*\
  !*** ./src/app/pages/storage/storage-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageRoutingModule": () => (/* binding */ StorageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/pages/navigation-page/navigation-page.component */ 99076);
/* harmony import */ var _app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/route-config.service */ 23642);
/* harmony import */ var _app_pages_storage_disks_disk_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/storage/disks/disk-datatable-page.component */ 29817);
/* harmony import */ var _app_pages_storage_disks_disk_form_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/storage/disks/disk-form-page.component */ 44461);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_datatable_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-datatable-page.component */ 42936);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_details_text_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-details-text-page.component */ 15627);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_edit_form_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-edit-form-page.component */ 20608);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_mount_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-mount-form-page.component */ 28531);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_quota_datatable_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-quota-datatable-page.component */ 34893);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_quota_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-quota-form-page.component */ 13774);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_acl_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-acl-form-page.component */ 38808);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_all_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-all-snapshots-tabs-page.component */ 81808);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_datatable_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-datatable-page.component */ 65149);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-form-page.component */ 16632);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-permissions-datatable-page.component */ 20146);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-snapshots-tabs-page.component */ 12322);
/* harmony import */ var _app_pages_storage_smart_smart_device_datatable_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-device-datatable-page.component */ 24472);
/* harmony import */ var _app_pages_storage_smart_smart_device_details_tabs_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-device-details-tabs-page.component */ 86665);
/* harmony import */ var _app_pages_storage_smart_smart_device_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-device-form-page.component */ 72662);
/* harmony import */ var _app_pages_storage_smart_smart_settings_form_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-settings-form-page.component */ 80191);
/* harmony import */ var _app_pages_storage_smart_smart_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-task-datatable-page.component */ 53650);
/* harmony import */ var _app_pages_storage_smart_smart_task_form_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-task-form-page.component */ 94249);
/* harmony import */ var _app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ~/app/shared/services/is-dirty-guard.service */ 71885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);



























const routes = [
    {
        path: '',
        component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
    },
    {
        path: 'disks',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disks') },
        children: [
            { path: '', component: _app_pages_storage_disks_disk_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__.DiskDatatablePageComponent },
            {
                path: 'hdparm/create/:devicefile',
                component: _app_pages_storage_disks_disk_form_page_component__WEBPACK_IMPORTED_MODULE_4__.DiskFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'), editing: false }
            },
            {
                path: 'hdparm/edit/:uuid',
                component: _app_pages_storage_disks_disk_form_page_component__WEBPACK_IMPORTED_MODULE_4__.DiskFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'), editing: true }
            }
        ]
    },
    {
        path: 'smart',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('S.M.A.R.T.') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'settings',
                component: _app_pages_storage_smart_smart_settings_form_page_component__WEBPACK_IMPORTED_MODULE_20__.SmartSettingsFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'), editing: true }
            },
            {
                path: 'devices',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Devices') },
                children: [
                    { path: '', component: _app_pages_storage_smart_smart_device_datatable_page_component__WEBPACK_IMPORTED_MODULE_17__.SmartDeviceDatatablePageComponent },
                    {
                        path: 'details/:devicefile',
                        component: _app_pages_storage_smart_smart_device_details_tabs_page_component__WEBPACK_IMPORTED_MODULE_18__.SmartDeviceDetailsTabsPageComponent,
                        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Details'), editing: true }
                    },
                    {
                        path: 'create/:uuid/:devicefile',
                        component: _app_pages_storage_smart_smart_device_form_page_component__WEBPACK_IMPORTED_MODULE_19__.SmartDeviceFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'), editing: false }
                    },
                    {
                        path: 'edit/:uuid/:devicefile',
                        component: _app_pages_storage_smart_smart_device_form_page_component__WEBPACK_IMPORTED_MODULE_19__.SmartDeviceFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'), editing: true }
                    }
                ]
            },
            {
                path: 'tasks',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduled Tasks') },
                children: [
                    { path: '', component: _app_pages_storage_smart_smart_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_21__.SmartTaskDatatablePageComponent },
                    {
                        path: 'create',
                        component: _app_pages_storage_smart_smart_task_form_page_component__WEBPACK_IMPORTED_MODULE_22__.SmartTaskFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'), editing: false }
                    },
                    {
                        path: 'edit/:uuid',
                        component: _app_pages_storage_smart_smart_task_form_page_component__WEBPACK_IMPORTED_MODULE_22__.SmartTaskFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'), editing: true }
                    }
                ]
            }
        ]
    },
    {
        path: 'shared-folders',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared Folders') },
        children: [
            { path: '', component: _app_pages_storage_shared_folders_shared_folder_datatable_page_component__WEBPACK_IMPORTED_MODULE_13__.SharedFolderDatatablePageComponent },
            {
                path: 'create',
                component: _app_pages_storage_shared_folders_shared_folder_form_page_component__WEBPACK_IMPORTED_MODULE_14__.SharedFolderFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'), editing: false }
            },
            {
                path: 'edit/:uuid',
                component: _app_pages_storage_shared_folders_shared_folder_form_page_component__WEBPACK_IMPORTED_MODULE_14__.SharedFolderFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated shared folder.')
                }
            },
            {
                path: 'permissions/:uuid',
                component: _app_pages_storage_shared_folders_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_15__.SharedFolderPermissionsDatatablePageComponent,
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    breadcrumb: {
                        text: '{{ "Permissions" | translate }} @ {{ name }}',
                        request: {
                            service: 'ShareMgmt',
                            method: 'get',
                            params: { uuid: '{{ _routeParams.uuid }}' }
                        }
                    },
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated permissions of shared folder.')
                }
            },
            {
                path: 'acl/:uuid',
                component: _app_pages_storage_shared_folders_shared_folder_acl_form_page_component__WEBPACK_IMPORTED_MODULE_11__.SharedFolderAclFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('ACL'),
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated access control list of shared folder.')
                }
            },
            {
                path: 'snapshots',
                component: _app_pages_storage_shared_folders_shared_folder_all_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_12__.SharedFolderAllSnapshotsTabsPageComponent,
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('All Snapshots'),
                    editing: true
                }
            },
            {
                path: 'snapshots/:uuid',
                component: _app_pages_storage_shared_folders_shared_folder_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_16__.SharedFolderSnapshotsTabsPageComponent,
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Snapshots'),
                    breadcrumb: {
                        text: '{{ "Snapshots" | translate }} @ {{ name }}',
                        request: {
                            service: 'ShareMgmt',
                            method: 'get',
                            params: { uuid: '{{ _routeParams.uuid }}' }
                        }
                    }
                }
            }
        ]
    },
    {
        path: 'filesystems',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('File Systems') },
        children: [
            { path: '', component: _app_pages_storage_filesystems_filesystem_datatable_page_component__WEBPACK_IMPORTED_MODULE_5__.FilesystemDatatablePageComponent },
            {
                path: 'mount',
                component: _app_pages_storage_filesystems_filesystem_mount_form_page_component__WEBPACK_IMPORTED_MODULE_8__.FilesystemMountFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mount'), editing: false }
            },
            {
                path: 'edit/:fsname',
                component: _app_pages_storage_filesystems_filesystem_edit_form_page_component__WEBPACK_IMPORTED_MODULE_7__.FilesystemEditFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated file system settings.')
                }
            },
            {
                path: 'quota/:uuid',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Quota') },
                children: [
                    { path: '', component: _app_pages_storage_filesystems_filesystem_quota_datatable_page_component__WEBPACK_IMPORTED_MODULE_9__.FilesystemQuotaDatatablePageComponent },
                    {
                        path: 'edit/:type/:name',
                        component: _app_pages_storage_filesystems_filesystem_quota_form_page_component__WEBPACK_IMPORTED_MODULE_10__.FilesystemQuotaFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_23__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                            editing: true,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated quota.')
                        }
                    }
                ]
            },
            {
                path: 'details/:devicefile',
                component: _app_pages_storage_filesystems_filesystem_details_text_page_component__WEBPACK_IMPORTED_MODULE_6__.FilesystemDetailsTextPageComponent,
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Details'),
                    breadcrumb: {
                        text: '{{ "Details" | translate }} @ {{ _routeParams.devicefile }}'
                    }
                }
            }
        ]
    }
];
class StorageRoutingModule {
}
StorageRoutingModule.ɵfac = function StorageRoutingModule_Factory(t) { return new (t || StorageRoutingModule)(); };
StorageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: StorageRoutingModule });
StorageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.ROUTES,
            multi: true,
            useFactory: (routeConfigService) => {
                routeConfigService.inject('storage', routes);
                return routes;
            },
            deps: [_app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__.RouteConfigService]
        }
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](StorageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule] }); })();


/***/ }),

/***/ 2426:
/*!*************************************************!*\
  !*** ./src/app/pages/storage/storage.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageModule": () => (/* binding */ StorageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/core.module */ 40294);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/material.module */ 63806);
/* harmony import */ var _app_pages_storage_disks_disk_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/storage/disks/disk-datatable-page.component */ 29817);
/* harmony import */ var _app_pages_storage_disks_disk_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/storage/disks/disk-form-page.component */ 44461);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-datatable-page.component */ 42936);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_details_text_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-details-text-page.component */ 15627);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_edit_form_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-edit-form-page.component */ 20608);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_mount_form_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-mount-form-page.component */ 28531);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_quota_datatable_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-quota-datatable-page.component */ 34893);
/* harmony import */ var _app_pages_storage_filesystems_filesystem_quota_form_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/storage/filesystems/filesystem-quota-form-page.component */ 13774);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_acl_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-acl-form-page.component */ 38808);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_all_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-all-snapshots-tabs-page.component */ 81808);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-datatable-page.component */ 65149);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-form-page.component */ 16632);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-permissions-datatable-page.component */ 20146);
/* harmony import */ var _app_pages_storage_shared_folders_shared_folder_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/pages/storage/shared-folders/shared-folder-snapshots-tabs-page.component */ 12322);
/* harmony import */ var _app_pages_storage_smart_smart_device_datatable_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-device-datatable-page.component */ 24472);
/* harmony import */ var _app_pages_storage_smart_smart_device_details_tabs_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-device-details-tabs-page.component */ 86665);
/* harmony import */ var _app_pages_storage_smart_smart_device_form_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-device-form-page.component */ 72662);
/* harmony import */ var _app_pages_storage_smart_smart_settings_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-settings-form-page.component */ 80191);
/* harmony import */ var _app_pages_storage_smart_smart_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-task-datatable-page.component */ 53650);
/* harmony import */ var _app_pages_storage_smart_smart_task_form_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~/app/pages/storage/smart/smart-task-form-page.component */ 94249);
/* harmony import */ var _app_pages_storage_storage_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ~/app/pages/storage/storage-routing.module */ 96820);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);
/* eslint-disable max-len */


























class StorageModule {
}
StorageModule.ɵfac = function StorageModule_Factory(t) { return new (t || StorageModule)(); };
StorageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: StorageModule });
StorageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__.SharedModule, _app_pages_storage_storage_routing_module__WEBPACK_IMPORTED_MODULE_22__.StorageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](StorageModule, { declarations: [_app_pages_storage_disks_disk_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DiskDatatablePageComponent,
        _app_pages_storage_disks_disk_form_page_component__WEBPACK_IMPORTED_MODULE_3__.DiskFormPageComponent,
        _app_pages_storage_shared_folders_shared_folder_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__.SharedFolderDatatablePageComponent,
        _app_pages_storage_filesystems_filesystem_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.FilesystemDatatablePageComponent,
        _app_pages_storage_smart_smart_device_datatable_page_component__WEBPACK_IMPORTED_MODULE_16__.SmartDeviceDatatablePageComponent,
        _app_pages_storage_smart_smart_settings_form_page_component__WEBPACK_IMPORTED_MODULE_19__.SmartSettingsFormPageComponent,
        _app_pages_storage_smart_smart_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_20__.SmartTaskDatatablePageComponent,
        _app_pages_storage_smart_smart_task_form_page_component__WEBPACK_IMPORTED_MODULE_21__.SmartTaskFormPageComponent,
        _app_pages_storage_smart_smart_device_form_page_component__WEBPACK_IMPORTED_MODULE_18__.SmartDeviceFormPageComponent,
        _app_pages_storage_smart_smart_device_details_tabs_page_component__WEBPACK_IMPORTED_MODULE_17__.SmartDeviceDetailsTabsPageComponent,
        _app_pages_storage_shared_folders_shared_folder_form_page_component__WEBPACK_IMPORTED_MODULE_13__.SharedFolderFormPageComponent,
        _app_pages_storage_shared_folders_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_14__.SharedFolderPermissionsDatatablePageComponent,
        _app_pages_storage_shared_folders_shared_folder_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_15__.SharedFolderSnapshotsTabsPageComponent,
        _app_pages_storage_shared_folders_shared_folder_all_snapshots_tabs_page_component__WEBPACK_IMPORTED_MODULE_11__.SharedFolderAllSnapshotsTabsPageComponent,
        _app_pages_storage_filesystems_filesystem_details_text_page_component__WEBPACK_IMPORTED_MODULE_5__.FilesystemDetailsTextPageComponent,
        _app_pages_storage_filesystems_filesystem_edit_form_page_component__WEBPACK_IMPORTED_MODULE_6__.FilesystemEditFormPageComponent,
        _app_pages_storage_filesystems_filesystem_mount_form_page_component__WEBPACK_IMPORTED_MODULE_7__.FilesystemMountFormPageComponent,
        _app_pages_storage_filesystems_filesystem_quota_datatable_page_component__WEBPACK_IMPORTED_MODULE_8__.FilesystemQuotaDatatablePageComponent,
        _app_pages_storage_filesystems_filesystem_quota_form_page_component__WEBPACK_IMPORTED_MODULE_9__.FilesystemQuotaFormPageComponent,
        _app_pages_storage_shared_folders_shared_folder_acl_form_page_component__WEBPACK_IMPORTED_MODULE_10__.SharedFolderAclFormPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__.SharedModule, _app_pages_storage_storage_routing_module__WEBPACK_IMPORTED_MODULE_22__.StorageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_storage_storage_module_ts.js.map