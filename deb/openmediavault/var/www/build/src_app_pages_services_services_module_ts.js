"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["src_app_pages_services_services_module_ts"],{

/***/ 43517:
/*!************************************************************************!*\
  !*** ./src/app/pages/services/nfs/nfs-settings-form-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NfsSettingsFormPageComponent": () => (/* binding */ NfsSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class NfsSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'NFS',
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
                    value: false
                },
                {
                    type: 'select',
                    name: 'versions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Versions'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The NFS versions provided by the service.'),
                    value: [],
                    multiple: true,
                    validators: {
                        required: true
                    },
                    store: {
                        data: [
                            ['2', 'NFSv2'],
                            ['3', 'NFSv3'],
                            ['4', 'NFSv4'],
                            ['4.1', 'NFSv4.1'],
                            ['4.2', 'NFSv4.2']
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
                        url: '/services/nfs'
                    }
                }
            ]
        };
    }
}
NfsSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵNfsSettingsFormPageComponent_BaseFactory; return function NfsSettingsFormPageComponent_Factory(t) { return (ɵNfsSettingsFormPageComponent_BaseFactory || (ɵNfsSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](NfsSettingsFormPageComponent)))(t || NfsSettingsFormPageComponent); }; }();
NfsSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NfsSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function NfsSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 87861:
/*!**************************************************************************!*\
  !*** ./src/app/pages/services/nfs/nfs-share-datatable-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NfsShareDatatablePageComponent": () => (/* binding */ NfsShareDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class NfsShareDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: '4aa1756c-c761-403d-91fe-d67985cd8133',
            autoReload: false,
            remoteSorting: true,
            remotePaging: true,
            rowEnumFmt: '{{ sharedfoldername }}',
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'), prop: 'sharedfoldername', flexGrow: 1, sortable: true },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Client'), prop: 'client', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Options'),
                    prop: 'options',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ extraoptions | split(",") | union(options | split(",")) | uniq() | sort() | join(", ") }}'
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
                    prop: 'sharedfoldername'
                }
            ],
            store: {
                proxy: {
                    service: 'NFS',
                    get: {
                        method: 'getShareList'
                    }
                }
            },
            actions: [
                {
                    template: 'create',
                    execute: {
                        type: 'url',
                        url: '/services/nfs/shares/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/services/nfs/shares/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'NFS',
                            method: 'deleteShare',
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
NfsShareDatatablePageComponent.ɵfac = function NfsShareDatatablePageComponent_Factory(t) { return new (t || NfsShareDatatablePageComponent)(); };
NfsShareDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NfsShareDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function NfsShareDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 13415:
/*!*********************************************************************!*\
  !*** ./src/app/pages/services/nfs/nfs-share-form-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NfsShareFormPageComponent": () => (/* binding */ NfsShareFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class NfsShareFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'NFS',
                get: {
                    method: 'getShare',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setShare'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'sharedFolderSelect',
                    name: 'sharedfolderref',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The location of the files to share. The share will be accessible at /export/<name>.'),
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'uuid' }, arg1: '{{ newconfobjuuid }}' }
                        }
                    ],
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'client',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Client'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Clients allowed to mount the file system, e.g. 192.168.178.0/24.') +
                        ' ' +
                        (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)(
                        // eslint-disable-next-line max-len
                        "Please check the <a href='https://manpages.debian.org/nfs-kernel-server/exports.5.html' target='_blank'>manual page</a> for more details."),
                    value: '',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'options',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permission'),
                    value: 'ro',
                    store: {
                        data: [
                            ['ro', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read-only')],
                            ['rw', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read/Write')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)(
                    // eslint-disable-next-line max-len
                    "Please check the <a href='https://manpages.debian.org/nfs-kernel-server/exports.5.html' target='_blank'>manual page</a> for more details."),
                    value: 'subtree_check,insecure'
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                },
                {
                    type: 'hidden',
                    name: 'mntentref',
                    value: '{{ newconfobjuuid }}'
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/services/nfs/shares'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/services/nfs/shares'
                    }
                }
            ]
        };
    }
}
NfsShareFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵNfsShareFormPageComponent_BaseFactory; return function NfsShareFormPageComponent_Factory(t) { return (ɵNfsShareFormPageComponent_BaseFactory || (ɵNfsShareFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](NfsShareFormPageComponent)))(t || NfsShareFormPageComponent); }; }();
NfsShareFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NfsShareFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function NfsShareFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 28754:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/services/rsync/rsync-module-datatable-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RsyncModuleDatatablePageComponent": () => (/* binding */ RsyncModuleDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class RsyncModuleDatatablePageComponent {
    constructor() {
        this.config = {
            autoReload: false,
            stateId: '5b146d0b-2250-4ea2-a16d-bddb7e66724e',
            sorters: [
                {
                    dir: 'asc',
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'Rsyncd',
                    get: {
                        method: 'getModuleList'
                    }
                }
            },
            rowEnumFmt: '{{ sharedfoldername }}',
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    prop: 'enable',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'),
                    prop: 'sharedfoldername',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    prop: 'name',
                    cellTemplateName: 'text',
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
                    sortable: true
                }
            ],
            actions: [
                {
                    template: 'create',
                    execute: {
                        type: 'url',
                        url: '/services/rsync/server/modules/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/services/rsync/server/modules/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'Rsyncd',
                            method: 'deleteModule',
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
RsyncModuleDatatablePageComponent.ɵfac = function RsyncModuleDatatablePageComponent_Factory(t) { return new (t || RsyncModuleDatatablePageComponent)(); };
RsyncModuleDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RsyncModuleDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function RsyncModuleDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 93208:
/*!**************************************************************************!*\
  !*** ./src/app/pages/services/rsync/rsync-module-form-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RsyncModuleFormPageComponent": () => (/* binding */ RsyncModuleFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class RsyncModuleFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Rsyncd',
                get: {
                    method: 'getModule',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setModule'
                }
            },
            fields: [
                /* eslint-disable max-len */
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
                    type: 'sharedFolderSelect',
                    name: 'sharedfolderref',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The location of the files to share.'),
                    validators: {
                        requiredIf: { operator: 'eq', arg0: { prop: 'enable' }, arg1: true }
                    }
                },
                {
                    type: 'textInput',
                    name: 'name',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    value: '',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The name of the share.'),
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'uid',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select an user ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option specifies the user name that file transfers to and from that module should take place.'),
                    value: 'nobody',
                    valueField: 'name',
                    textField: 'name',
                    store: {
                        proxy: {
                            service: 'UserMgmt',
                            get: {
                                method: 'enumerateAllUsers',
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
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'gid',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Group'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a group ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option specifies the group name that file transfers to and from that module should take place.'),
                    value: 'users',
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
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'datatable',
                    name: 'users',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Users'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The users that are allowed to access this module.'),
                    columns: [
                        {
                            name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                            prop: 'name',
                            flexGrow: 1
                        },
                        {
                            name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                            prop: 'password',
                            flexGrow: 1,
                            cellTemplateName: 'template',
                            cellTemplateConfig: '{{ "*" | repeat(5) }}'
                        }
                    ],
                    actions: [
                        {
                            template: 'add',
                            formDialogConfig: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User'),
                                fields: [
                                    {
                                        type: 'textInput',
                                        name: 'name',
                                        value: '',
                                        monospace: true,
                                        label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                                        validators: {
                                            required: true
                                        }
                                    },
                                    {
                                        type: 'passwordInput',
                                        name: 'password',
                                        label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                                        value: '',
                                        autocomplete: 'new-password',
                                        validators: {
                                            required: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            template: 'delete'
                        }
                    ],
                    valueType: 'object',
                    value: []
                },
                {
                    type: 'checkbox',
                    name: 'usechroot',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Use chroot'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('If this option is set, the daemon will chroot to the shared folder path before starting the file transfer with the client. Then it is not possible to map users and groups by name and the daemon is not being able to follow symbolic links that are either absolute or outside of the new root path.'),
                    value: true
                },
                {
                    type: 'checkbox',
                    name: 'authusers',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Authenticate users'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('If set then the client will be prompted to supply a user name and password to connect to the module.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'readonly',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read-only'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('If this option is set, then any attempted uploads will fail.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'writeonly',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Write-only'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('If this option is set, then any attempted downloads will fail.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'list',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('List module'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option determines if this module should be listed when the client asks for a listing of available modules.'),
                    value: true
                },
                {
                    type: 'numberInput',
                    name: 'maxconnections',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Max. connections'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option specifies the maximum number of simultaneous connections. 0 means no limit.'),
                    value: 0,
                    validators: {
                        min: 0,
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'hostsallow',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hosts allow'),
                    value: '',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option is a comma, space, or tab delimited set of hosts which are permitted to access this module. You can specify the hosts by name or IP number. Leave this field empty to use default settings.')
                },
                {
                    type: 'textInput',
                    name: 'hostsdeny',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hosts deny'),
                    value: '',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option is a comma, space, or tab delimited set of host which are NOT permitted to access this module. Where the lists conflict, the allow list takes precedence. In the event that it is necessary to deny all by default, use the keyword ALL (or the netmask 0.0.0.0/0) and then explicitly specify to the hosts allow parameter those hosts that should be permitted access. Leave this field empty to use default settings.')
                },
                {
                    type: 'textarea',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please check the <a href="http://www.samba.org/ftp/rsync/rsyncd.conf.html" target="_blank">manual page</a> for more details.'),
                    value: ''
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
                        url: '/services/rsync/server/modules'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/services/rsync/server/modules'
                    }
                }
            ]
        };
    }
}
RsyncModuleFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵRsyncModuleFormPageComponent_BaseFactory; return function RsyncModuleFormPageComponent_Factory(t) { return (ɵRsyncModuleFormPageComponent_BaseFactory || (ɵRsyncModuleFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](RsyncModuleFormPageComponent)))(t || RsyncModuleFormPageComponent); }; }();
RsyncModuleFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RsyncModuleFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function RsyncModuleFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 98138:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/services/rsync/rsync-module-settings-form-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RsyncModuleSettingsFormPageComponent": () => (/* binding */ RsyncModuleSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class RsyncModuleSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Rsyncd',
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
                    value: false
                },
                {
                    type: 'numberInput',
                    name: 'port',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 873,
                    validators: {
                        min: 1,
                        max: 65535,
                        required: true,
                        patternType: 'port'
                    }
                },
                {
                    type: 'textarea',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please check the <a href="http://www.samba.org/ftp/rsync/rsyncd.conf.html" target="_blank">manual page</a> for more details.'),
                    value: ''
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
                        url: '/services/rsync/server'
                    }
                }
            ]
        };
    }
}
RsyncModuleSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵRsyncModuleSettingsFormPageComponent_BaseFactory; return function RsyncModuleSettingsFormPageComponent_Factory(t) { return (ɵRsyncModuleSettingsFormPageComponent_BaseFactory || (ɵRsyncModuleSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](RsyncModuleSettingsFormPageComponent)))(t || RsyncModuleSettingsFormPageComponent); }; }();
RsyncModuleSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RsyncModuleSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function RsyncModuleSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 16391:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/services/rsync/rsync-task-datatable-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RsyncTaskDatatablePageComponent": () => (/* binding */ RsyncTaskDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class RsyncTaskDatatablePageComponent {
    constructor() {
        this.config = {
            autoReload: false,
            stateId: 'cf6a2c62-fdf5-4c6e-b315-25b06a756668',
            sorters: [
                {
                    dir: 'asc',
                    prop: 'srcname'
                }
            ],
            store: {
                proxy: {
                    service: 'Rsync',
                    get: {
                        method: 'getList'
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
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduling'),
                    prop: '',
                    flexGrow: 1,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{% set _minute = minute %}' +
                        '{% set _hour = hour %}' +
                        '{% set _dayofmonth = dayofmonth %}' +
                        '{% if everynminute %}{% set _minute %}*/{{ minute }}{% endset %}{% endif %}' +
                        '{% if everynhour %}{% set _hour %}*/{{ hour }}{% endset %}{% endif %}' +
                        '{% if everyndayofmonth %}{% set _dayofmonth %}*/{{ dayofmonth }}{% endset %}{% endif %}' +
                        '{{ [_minute, _hour, _dayofmonth, month, dayofweek] | join(" ") | cron2human }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    prop: 'type',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            local: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Local') },
                            remote: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Remote') }
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source'),
                    prop: 'srcname',
                    cellTemplateName: 'text',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination'),
                    prop: 'destname',
                    cellTemplateName: 'text',
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
                    sortable: true
                }
            ],
            actions: [
                {
                    template: 'create',
                    execute: {
                        type: 'url',
                        url: '/services/rsync/tasks/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/services/rsync/tasks/edit/{{ _selected[0].uuid }}'
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
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Run rsync task'),
                                startOnInit: true,
                                request: {
                                    service: 'Rsync',
                                    method: 'execute',
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
                            service: 'Rsync',
                            method: 'delete',
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
RsyncTaskDatatablePageComponent.ɵfac = function RsyncTaskDatatablePageComponent_Factory(t) { return new (t || RsyncTaskDatatablePageComponent)(); };
RsyncTaskDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RsyncTaskDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function RsyncTaskDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 85664:
/*!************************************************************************!*\
  !*** ./src/app/pages/services/rsync/rsync-task-form-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RsyncTaskFormPageComponent": () => (/* binding */ RsyncTaskFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class RsyncTaskFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Rsync',
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
                /* eslint-disable max-len */
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
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    value: 'local',
                    store: {
                        data: [
                            ['local', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Local')],
                            ['remote', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Remote')]
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'mode',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mode'),
                    value: 'push',
                    store: {
                        data: [
                            ['push', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Push')],
                            ['pull', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Pull')]
                        ]
                    },
                    modifiers: [
                        {
                            type: 'visible',
                            constraint: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' }
                        }
                    ]
                },
                {
                    type: 'sharedFolderSelect',
                    name: 'srcsharedfolderref',
                    hasEmptyOption: true,
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source shared folder'),
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: {
                                operator: 'not',
                                arg0: {
                                    operator: 'or',
                                    arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' },
                                    arg1: {
                                        operator: 'and',
                                        arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                                        arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'push' }
                                    }
                                }
                            }
                        }
                    ],
                    validators: {
                        requiredIf: {
                            operator: 'or',
                            arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' },
                            arg1: {
                                operator: 'and',
                                arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                                arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'push' }
                            }
                        }
                    }
                },
                {
                    type: 'textInput',
                    name: 'srcuri',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source server'),
                    value: '',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The source remote server, e.g. [USER@]HOST:SRC, [USER@]HOST::SRC or rsync://[USER@]HOST[:PORT]/SRC.'),
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: {
                                operator: 'not',
                                arg0: {
                                    operator: 'and',
                                    arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                                    arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'pull' }
                                }
                            }
                        }
                    ],
                    validators: {
                        requiredIf: {
                            operator: 'and',
                            arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                            arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'pull' }
                        }
                    }
                },
                {
                    type: 'sharedFolderSelect',
                    name: 'destsharedfolderref',
                    hasEmptyOption: true,
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination shared folder'),
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: {
                                operator: 'not',
                                arg0: {
                                    operator: 'or',
                                    arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' },
                                    arg1: {
                                        operator: 'and',
                                        arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                                        arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'pull' }
                                    }
                                }
                            }
                        }
                    ],
                    validators: {
                        requiredIf: {
                            operator: 'or',
                            arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' },
                            arg1: {
                                operator: 'and',
                                arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                                arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'pull' }
                            }
                        }
                    }
                },
                {
                    type: 'textInput',
                    name: 'desturi',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination server'),
                    value: '',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The destination remote server, e.g. [USER@]HOST:DEST, [USER@]HOST::DEST or rsync://[USER@]HOST[:PORT]/DEST.'),
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: {
                                operator: 'not',
                                arg0: {
                                    operator: 'and',
                                    arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                                    arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'push' }
                                }
                            }
                        }
                    ],
                    validators: {
                        requiredIf: {
                            operator: 'and',
                            arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                            arg1: { operator: 'eq', arg0: { prop: 'mode' }, arg1: 'push' }
                        }
                    }
                },
                {
                    type: 'select',
                    name: 'authentication',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Authentication'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select an authentication mode ...'),
                    value: 'password',
                    store: {
                        data: [
                            ['password', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password')],
                            ['pubkey', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Public key')]
                        ]
                    },
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' }
                        }
                    ]
                },
                {
                    type: 'numberInput',
                    name: 'sshport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSH port'),
                    value: 22,
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: {
                                operator: 'or',
                                arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' },
                                arg1: { operator: 'eq', arg0: { prop: 'authentication' }, arg1: 'password' }
                            }
                        }
                    ],
                    validators: {
                        min: 1,
                        max: 65535,
                        requiredIf: {
                            operator: 'and',
                            arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                            arg1: { operator: 'eq', arg0: { prop: 'authentication' }, arg1: 'pubkey' }
                        }
                    }
                },
                {
                    type: 'sshCertSelect',
                    name: 'sshcertificateref',
                    hasEmptyOption: true,
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSH certificate'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The SSH certificate used for authentication.'),
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: {
                                operator: 'or',
                                arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' },
                                arg1: { operator: 'eq', arg0: { prop: 'authentication' }, arg1: 'password' }
                            }
                        }
                    ],
                    validators: {
                        requiredIf: {
                            operator: 'and',
                            arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                            arg1: { operator: 'eq', arg0: { prop: 'authentication' }, arg1: 'pubkey' }
                        }
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'password',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The password that is used for access via rsync daemon. Note, this is not used for remote shell transport such as SSH.'),
                    value: '',
                    autocomplete: 'new-password',
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: {
                                operator: 'or',
                                arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'local' },
                                arg1: { operator: 'eq', arg0: { prop: 'authentication' }, arg1: 'pubkey' }
                            }
                        }
                    ],
                    validators: {
                        requiredIf: {
                            operator: 'and',
                            arg0: { operator: 'eq', arg0: { prop: 'type' }, arg1: 'remote' },
                            arg1: { operator: 'eq', arg0: { prop: 'authentication' }, arg1: 'password' }
                        }
                    }
                },
                {
                    type: 'textInput',
                    name: 'cronexprdesc',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Time of execution'),
                    disabled: true,
                    submitValue: false,
                    value: '',
                    modifiers: [
                        {
                            type: 'value',
                            typeConfig: '{% set _minute = minute %}' +
                                '{% set _hour = hour %}' +
                                '{% set _dayofmonth = dayofmonth %}' +
                                '{% if everynminute %}{% set _minute %}*/{{ minute }}{% endset %}{% endif %}' +
                                '{% if everynhour %}{% set _hour %}*/{{ hour }}{% endset %}{% endif %}' +
                                '{% if everyndayofmonth %}{% set _dayofmonth %}*/{{ dayofmonth }}{% endset %}{% endif %}' +
                                '{{ [_minute, _hour, _dayofmonth, month, dayofweek] | join(" ") | cron2human }}',
                            deps: [
                                'minute',
                                'everynminute',
                                'hour',
                                'everynhour',
                                'dayofmonth',
                                'everyndayofmonth',
                                'month',
                                'dayofweek'
                            ]
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'select',
                            name: 'minute',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Minute'),
                            value: ['{{ moment("m") }}'],
                            store: {
                                data: [
                                    ['*', '*'],
                                    ['0', '0'],
                                    ['1', '1'],
                                    ['2', '2'],
                                    ['3', '3'],
                                    ['4', '4'],
                                    ['5', '5'],
                                    ['6', '6'],
                                    ['7', '7'],
                                    ['8', '8'],
                                    ['9', '9'],
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
                                    ['31', '31'],
                                    ['32', '32'],
                                    ['33', '33'],
                                    ['34', '34'],
                                    ['35', '35'],
                                    ['36', '36'],
                                    ['37', '37'],
                                    ['38', '38'],
                                    ['39', '39'],
                                    ['40', '40'],
                                    ['41', '41'],
                                    ['42', '42'],
                                    ['43', '43'],
                                    ['44', '44'],
                                    ['45', '45'],
                                    ['46', '46'],
                                    ['47', '47'],
                                    ['48', '48'],
                                    ['49', '49'],
                                    ['50', '50'],
                                    ['51', '51'],
                                    ['52', '52'],
                                    ['53', '53'],
                                    ['54', '54'],
                                    ['55', '55'],
                                    ['56', '56'],
                                    ['57', '57'],
                                    ['58', '58'],
                                    ['59', '59']
                                ]
                            },
                            multiple: true,
                            validators: {
                                required: true,
                                pattern: {
                                    pattern: '^(\\*|(([0-9]|[1-5][0-9]),)*([0-9]|[1-5][0-9]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everynminute',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N minute'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'unchecked',
                                    opposite: false,
                                    constraint: {
                                        operator: '<>',
                                        arg0: {
                                            operator: 'length',
                                            arg0: { prop: 'minute' }
                                        },
                                        arg1: 1
                                    }
                                },
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: {
                                            operator: '<>',
                                            arg0: {
                                                operator: 'length',
                                                arg0: { prop: 'minute' }
                                            },
                                            arg1: 1
                                        },
                                        arg1: {
                                            operator: 'in',
                                            arg0: { value: '*' },
                                            arg1: { prop: 'minute' }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'select',
                            name: 'hour',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hour'),
                            value: ['{{ moment("H") }}'],
                            store: {
                                data: [
                                    ['*', '*'],
                                    ['0', '0'],
                                    ['1', '1'],
                                    ['2', '2'],
                                    ['3', '3'],
                                    ['4', '4'],
                                    ['5', '5'],
                                    ['6', '6'],
                                    ['7', '7'],
                                    ['8', '8'],
                                    ['9', '9'],
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
                            },
                            multiple: true,
                            validators: {
                                required: true,
                                pattern: {
                                    pattern: '^(\\*|(([0-9]|1[0-9]|2[0-3]),)*([0-9]|1[0-9]|2[0-3]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everynhour',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N hour'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'unchecked',
                                    opposite: false,
                                    constraint: {
                                        operator: '<>',
                                        arg0: {
                                            operator: 'length',
                                            arg0: { prop: 'hour' }
                                        },
                                        arg1: 1
                                    }
                                },
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: {
                                            operator: '<>',
                                            arg0: {
                                                operator: 'length',
                                                arg0: { prop: 'hour' }
                                            },
                                            arg1: 1
                                        },
                                        arg1: {
                                            operator: 'in',
                                            arg0: { value: '*' },
                                            arg1: { prop: 'hour' }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'select',
                            name: 'dayofmonth',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Day of month'),
                            value: ['*'],
                            store: {
                                data: [
                                    ['*', '*'],
                                    ['1', '1'],
                                    ['2', '2'],
                                    ['3', '3'],
                                    ['4', '4'],
                                    ['5', '5'],
                                    ['6', '6'],
                                    ['7', '7'],
                                    ['8', '8'],
                                    ['9', '9'],
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
                            },
                            multiple: true,
                            validators: {
                                required: true,
                                pattern: {
                                    pattern: '^(\\*|(([1-9]|[12][0-9]|3[01]),)*([1-9]|[12][0-9]|3[01]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everyndayofmonth',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N day of month'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'unchecked',
                                    opposite: false,
                                    constraint: {
                                        operator: '<>',
                                        arg0: {
                                            operator: 'length',
                                            arg0: { prop: 'dayofmonth' }
                                        },
                                        arg1: 1
                                    }
                                },
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: {
                                            operator: '<>',
                                            arg0: {
                                                operator: 'length',
                                                arg0: { prop: 'dayofmonth' }
                                            },
                                            arg1: 1
                                        },
                                        arg1: {
                                            operator: 'in',
                                            arg0: { value: '*' },
                                            arg1: { prop: 'dayofmonth' }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'select',
                    name: 'month',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Month'),
                    value: ['*'],
                    store: {
                        data: [
                            ['*', '*'],
                            ['1', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('January')],
                            ['2', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('February')],
                            ['3', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('March')],
                            ['4', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('April')],
                            ['5', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('May')],
                            ['6', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('June')],
                            ['7', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('July')],
                            ['8', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('August')],
                            ['9', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('September')],
                            ['10', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('October')],
                            ['11', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('November')],
                            ['12', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('December')]
                        ]
                    },
                    multiple: true,
                    validators: {
                        required: true,
                        pattern: {
                            pattern: '^(\\*|(([1-9]|1[0-2]),)*([1-9]|1[0-2]))$',
                            errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                        }
                    }
                },
                {
                    type: 'select',
                    name: 'dayofweek',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Day of week'),
                    value: ['*'],
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
                    },
                    multiple: true,
                    validators: {
                        required: true,
                        pattern: {
                            pattern: '^(\\*|([1-7],)*[1-7])$',
                            errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                        }
                    }
                },
                {
                    type: 'checkbox',
                    name: 'sendemail',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Send command output via email'),
                    value: false,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('An email message with the command output (if any produced) is send to the administrator.')
                },
                {
                    type: 'checkbox',
                    name: 'optiondryrun',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Trial run'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Perform a trial run with no changes made'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'optionquiet',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Suppress non-error messages'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'optionarchive',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Archive mode'),
                    value: true,
                    modifiers: [
                        {
                            type: 'unchecked',
                            opposite: false,
                            constraint: { operator: 'falsy', arg0: { prop: 'optionrecursive' } }
                        },
                        {
                            type: 'unchecked',
                            opposite: false,
                            constraint: { operator: 'falsy', arg0: { prop: 'optionperms' } }
                        },
                        {
                            type: 'unchecked',
                            opposite: false,
                            constraint: { operator: 'falsy', arg0: { prop: 'optiontimes' } }
                        },
                        {
                            type: 'unchecked',
                            opposite: false,
                            constraint: { operator: 'falsy', arg0: { prop: 'optiongroup' } }
                        },
                        {
                            type: 'unchecked',
                            opposite: false,
                            constraint: { operator: 'falsy', arg0: { prop: 'optionowner' } }
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    name: 'optionrecursive',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Recurse into directories'),
                    value: true,
                    modifiers: [
                        {
                            type: 'checked',
                            opposite: false,
                            constraint: { operator: 'truthy', arg0: { prop: 'optionarchive' } }
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    name: 'optionperms',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Preserve permissions'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Set the destination permissions to be the same as the source permissions.'),
                    value: true,
                    modifiers: [
                        {
                            type: 'checked',
                            opposite: false,
                            constraint: { operator: 'truthy', arg0: { prop: 'optionarchive' } }
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    name: 'optiontimes',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Preserve modification times'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Transfer modification times along with the files and update them on the remote system.'),
                    value: true,
                    modifiers: [
                        {
                            type: 'checked',
                            opposite: false,
                            constraint: { operator: 'truthy', arg0: { prop: 'optionarchive' } }
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    name: 'optiongroup',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Preserve group'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Set the group of the destination file to be the same as the source file.'),
                    value: true,
                    modifiers: [
                        {
                            type: 'checked',
                            opposite: false,
                            constraint: { operator: 'truthy', arg0: { prop: 'optionarchive' } }
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    name: 'optionowner',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Preserve owner'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Set the owner of the destination file to be the same as the source file, but only if the receiving rsync is being run as the super-user.'),
                    value: true,
                    modifiers: [
                        {
                            type: 'checked',
                            opposite: false,
                            constraint: { operator: 'truthy', arg0: { prop: 'optionarchive' } }
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    name: 'optioncompress',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Compress'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Compress file data during the transfer.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'optionacls',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Preserve ACLs'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Update the destination ACLs to be the same as the source ACLs.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'optionxattrs',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Preserve extended attributes'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Update the destination extended attributes to be the same as the local ones.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'optionpartial',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Keep partially transferred files'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable this option to keep partially transferred files, otherwise they will be deleted if the transfer is interrupted.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'optiondelete',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Delete'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("Delete files on the receiving side that don't exist on sender."),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please check the <a href="http://www.samba.org/ftp/rsync/rsync.html" target="_blank">manual page</a> for more details.'),
                    value: ''
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
                        url: '/services/rsync/tasks'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/services/rsync/tasks'
                    }
                }
            ]
        };
    }
}
RsyncTaskFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵRsyncTaskFormPageComponent_BaseFactory; return function RsyncTaskFormPageComponent_Factory(t) { return (ɵRsyncTaskFormPageComponent_BaseFactory || (ɵRsyncTaskFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](RsyncTaskFormPageComponent)))(t || RsyncTaskFormPageComponent); }; }();
RsyncTaskFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RsyncTaskFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function RsyncTaskFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 29761:
/*!***********************************************************!*\
  !*** ./src/app/pages/services/services-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesRoutingModule": () => (/* binding */ ServicesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/pages/navigation-page/navigation-page.component */ 99076);
/* harmony import */ var _app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/route-config.service */ 23642);
/* harmony import */ var _app_pages_services_nfs_nfs_settings_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/services/nfs/nfs-settings-form-page.component */ 43517);
/* harmony import */ var _app_pages_services_nfs_nfs_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/services/nfs/nfs-share-datatable-page.component */ 87861);
/* harmony import */ var _app_pages_services_nfs_nfs_share_form_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/services/nfs/nfs-share-form-page.component */ 13415);
/* harmony import */ var _app_pages_services_rsync_rsync_module_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-module-datatable-page.component */ 28754);
/* harmony import */ var _app_pages_services_rsync_rsync_module_form_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-module-form-page.component */ 93208);
/* harmony import */ var _app_pages_services_rsync_rsync_module_settings_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-module-settings-form-page.component */ 98138);
/* harmony import */ var _app_pages_services_rsync_rsync_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-task-datatable-page.component */ 16391);
/* harmony import */ var _app_pages_services_rsync_rsync_task_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-task-form-page.component */ 85664);
/* harmony import */ var _app_pages_services_smb_smb_settings_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/services/smb/smb-settings-form-page.component */ 15788);
/* harmony import */ var _app_pages_services_smb_smb_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/services/smb/smb-share-datatable-page.component */ 41533);
/* harmony import */ var _app_pages_services_smb_smb_share_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/services/smb/smb-share-form-page.component */ 88158);
/* harmony import */ var _app_pages_services_ssh_ssh_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/services/ssh/ssh-form-page.component */ 10385);
/* harmony import */ var _app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/services/is-dirty-guard.service */ 71885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);



















const routes = [
    {
        path: '',
        component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
    },
    {
        path: 'ssh',
        component: _app_pages_services_ssh_ssh_form_page_component__WEBPACK_IMPORTED_MODULE_14__.SshFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSH'),
            editing: true,
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated SSH settings.')
        }
    },
    {
        path: 'rsync',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Rsync') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'tasks',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tasks') },
                children: [
                    { path: '', component: _app_pages_services_rsync_rsync_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_9__.RsyncTaskDatatablePageComponent },
                    {
                        path: 'create',
                        component: _app_pages_services_rsync_rsync_task_form_page_component__WEBPACK_IMPORTED_MODULE_10__.RsyncTaskFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                            editing: false,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created Rsync task.')
                        }
                    },
                    {
                        path: 'edit/:uuid',
                        component: _app_pages_services_rsync_rsync_task_form_page_component__WEBPACK_IMPORTED_MODULE_10__.RsyncTaskFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                            editing: true,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated Rsync task.')
                        }
                    }
                ]
            },
            {
                path: 'server',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Server') },
                children: [
                    { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
                    {
                        path: 'settings',
                        component: _app_pages_services_rsync_rsync_module_settings_form_page_component__WEBPACK_IMPORTED_MODULE_8__.RsyncModuleSettingsFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
                            editing: true,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated Rsync Server settings.')
                        }
                    },
                    {
                        path: 'modules',
                        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Modules') },
                        children: [
                            { path: '', component: _app_pages_services_rsync_rsync_module_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__.RsyncModuleDatatablePageComponent },
                            {
                                path: 'create',
                                component: _app_pages_services_rsync_rsync_module_form_page_component__WEBPACK_IMPORTED_MODULE_7__.RsyncModuleFormPageComponent,
                                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                                data: {
                                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                                    editing: false,
                                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created Rsync server module "{{ name }}".')
                                }
                            },
                            {
                                path: 'edit/:uuid',
                                component: _app_pages_services_rsync_rsync_module_form_page_component__WEBPACK_IMPORTED_MODULE_7__.RsyncModuleFormPageComponent,
                                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                                data: {
                                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                                    editing: true,
                                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated Rsync server module "{{ name }}".')
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: 'smb',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SMB/CIFS') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'settings',
                component: _app_pages_services_smb_smb_settings_form_page_component__WEBPACK_IMPORTED_MODULE_11__.SmbSettingsFormPageComponent,
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated SMB/CIFS settings.')
                }
            },
            {
                path: 'shares',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shares') },
                children: [
                    { path: '', component: _app_pages_services_smb_smb_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__.SmbShareDatatablePageComponent },
                    {
                        path: 'create',
                        component: _app_pages_services_smb_smb_share_form_page_component__WEBPACK_IMPORTED_MODULE_13__.SmbShareFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                            editing: false,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created SMB/CIFS share.')
                        }
                    },
                    {
                        path: 'edit/:uuid',
                        component: _app_pages_services_smb_smb_share_form_page_component__WEBPACK_IMPORTED_MODULE_13__.SmbShareFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                            editing: true,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated SMB/CIFS share.')
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'nfs',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('NFS') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'settings',
                component: _app_pages_services_nfs_nfs_settings_form_page_component__WEBPACK_IMPORTED_MODULE_3__.NfsSettingsFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated NFS settings.')
                }
            },
            {
                path: 'shares',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shares') },
                children: [
                    { path: '', component: _app_pages_services_nfs_nfs_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.NfsShareDatatablePageComponent },
                    {
                        path: 'create',
                        component: _app_pages_services_nfs_nfs_share_form_page_component__WEBPACK_IMPORTED_MODULE_5__.NfsShareFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                            editing: false,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created NFS share.')
                        }
                    },
                    {
                        path: 'edit/:uuid',
                        component: _app_pages_services_nfs_nfs_share_form_page_component__WEBPACK_IMPORTED_MODULE_5__.NfsShareFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_15__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                            editing: true,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated NFS share.')
                        }
                    }
                ]
            }
        ]
    }
];
class ServicesRoutingModule {
}
ServicesRoutingModule.ɵfac = function ServicesRoutingModule_Factory(t) { return new (t || ServicesRoutingModule)(); };
ServicesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: ServicesRoutingModule });
ServicesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ROUTES,
            multi: true,
            useFactory: (routeConfigService) => {
                routeConfigService.inject('services', routes);
                return routes;
            },
            deps: [_app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__.RouteConfigService]
        }
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 72493:
/*!***************************************************!*\
  !*** ./src/app/pages/services/services.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesModule": () => (/* binding */ ServicesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/core.module */ 40294);
/* harmony import */ var _app_pages_services_nfs_nfs_settings_form_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/services/nfs/nfs-settings-form-page.component */ 43517);
/* harmony import */ var _app_pages_services_nfs_nfs_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/services/nfs/nfs-share-datatable-page.component */ 87861);
/* harmony import */ var _app_pages_services_nfs_nfs_share_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/services/nfs/nfs-share-form-page.component */ 13415);
/* harmony import */ var _app_pages_services_rsync_rsync_module_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-module-datatable-page.component */ 28754);
/* harmony import */ var _app_pages_services_rsync_rsync_module_form_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-module-form-page.component */ 93208);
/* harmony import */ var _app_pages_services_rsync_rsync_module_settings_form_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-module-settings-form-page.component */ 98138);
/* harmony import */ var _app_pages_services_rsync_rsync_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-task-datatable-page.component */ 16391);
/* harmony import */ var _app_pages_services_rsync_rsync_task_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/services/rsync/rsync-task-form-page.component */ 85664);
/* harmony import */ var _app_pages_services_services_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/services/services-routing.module */ 29761);
/* harmony import */ var _app_pages_services_smb_smb_settings_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/services/smb/smb-settings-form-page.component */ 15788);
/* harmony import */ var _app_pages_services_smb_smb_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/services/smb/smb-share-datatable-page.component */ 41533);
/* harmony import */ var _app_pages_services_smb_smb_share_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/services/smb/smb-share-form-page.component */ 88158);
/* harmony import */ var _app_pages_services_ssh_ssh_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/services/ssh/ssh-form-page.component */ 10385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
















class ServicesModule {
}
ServicesModule.ɵfac = function ServicesModule_Factory(t) { return new (t || ServicesModule)(); };
ServicesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_pages_services_services_routing_module__WEBPACK_IMPORTED_MODULE_9__.ServicesRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_app_pages_services_ssh_ssh_form_page_component__WEBPACK_IMPORTED_MODULE_13__.SshFormPageComponent,
        _app_pages_services_smb_smb_settings_form_page_component__WEBPACK_IMPORTED_MODULE_10__.SmbSettingsFormPageComponent,
        _app_pages_services_smb_smb_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_11__.SmbShareDatatablePageComponent,
        _app_pages_services_smb_smb_share_form_page_component__WEBPACK_IMPORTED_MODULE_12__.SmbShareFormPageComponent,
        _app_pages_services_nfs_nfs_settings_form_page_component__WEBPACK_IMPORTED_MODULE_1__.NfsSettingsFormPageComponent,
        _app_pages_services_nfs_nfs_share_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.NfsShareDatatablePageComponent,
        _app_pages_services_nfs_nfs_share_form_page_component__WEBPACK_IMPORTED_MODULE_3__.NfsShareFormPageComponent,
        _app_pages_services_rsync_rsync_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__.RsyncTaskDatatablePageComponent,
        _app_pages_services_rsync_rsync_task_form_page_component__WEBPACK_IMPORTED_MODULE_8__.RsyncTaskFormPageComponent,
        _app_pages_services_rsync_rsync_module_settings_form_page_component__WEBPACK_IMPORTED_MODULE_6__.RsyncModuleSettingsFormPageComponent,
        _app_pages_services_rsync_rsync_module_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.RsyncModuleDatatablePageComponent,
        _app_pages_services_rsync_rsync_module_form_page_component__WEBPACK_IMPORTED_MODULE_5__.RsyncModuleFormPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_pages_services_services_routing_module__WEBPACK_IMPORTED_MODULE_9__.ServicesRoutingModule] }); })();


/***/ }),

/***/ 15788:
/*!************************************************************************!*\
  !*** ./src/app/pages/services/smb/smb-settings-form-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmbSettingsFormPageComponent": () => (/* binding */ SmbSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SmbSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'SMB',
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
                    type: 'textInput',
                    name: 'workgroup',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Workgroup'),
                    value: 'WORKGROUP',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The workgroup the server will appear to be in when queried by clients.'),
                    validators: {
                        required: true,
                        patternType: 'netbiosName'
                    }
                },
                {
                    type: 'textInput',
                    name: 'serverstring',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Description'),
                    value: '%h server',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The NT description field.'),
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'checkbox',
                    name: 'timeserver',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Time server'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Allow this server to advertise itself as a time server to Windows clients.'),
                    value: false
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Home directories')
                },
                {
                    type: 'checkbox',
                    name: 'homesenable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable user home directories.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'homesbrowseable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Browseable'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This controls whether this share is seen in the list of available shares in a net view and in the browse list.'),
                    value: true
                },
                {
                    type: 'checkbox',
                    name: 'homesinheritacls',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Inherit ACLs'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This parameter can be used to ensure that if default acls exist on parent directories, they are always honored when creating a new file or subdirectory in these parent directories.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'homesinheritpermissions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Inherit permissions'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The permissions on new files and directories are normally governed by create mask and directory mask but the inherit permissions parameter overrides this. This can be particularly useful on systems with many users to allow a single share to be used flexibly by each user.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'homesrecyclebin',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable recycle bin'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This will create a recycle bin for each user home directory.'),
                    value: false
                },
                {
                    type: 'textarea',
                    name: 'homesextraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("Please check the <a href='http://www.samba.org/samba/docs/man/manpages-3/smb.conf.5.html' target='_blank'>manual page</a> for more details." // eslint-disable-line @typescript-eslint/quotes
                    ),
                    value: ''
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced settings')
                },
                {
                    type: 'select',
                    name: 'minprotocol',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Minimum protocol version'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This setting controls the minimum protocol version that the server will allow the client to use.') +
                        ' ' +
                        (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Note that SMB1 is deprecated and should only be used in mandatory cases.'),
                    value: 'SMB2',
                    store: {
                        data: [
                            ['SMB1', 'SMB1'],
                            ['SMB2', 'SMB2'],
                            ['SMB3', 'SMB3']
                        ]
                    }
                },
                {
                    type: 'checkbox',
                    name: 'netbios',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable NetBIOS'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Support name resolution and network discovery for legacy systems.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'winssupport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable WINS server'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Act as a WINS server.'),
                    value: false,
                    validators: {
                        custom: [
                            {
                                constraint: {
                                    operator: 'or',
                                    arg0: { operator: 'empty', arg0: { prop: 'winsserver' } },
                                    arg1: { operator: 'falsy', arg0: { prop: 'winssupport' } }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Acting as a WINS server and using a WINS server are mutually exclusive.')
                            }
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'winsserver',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('WINS server'),
                    value: '',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Use the specified WINS server.'),
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'winssupport' } }
                        }
                    ],
                    validators: {
                        custom: [
                            {
                                constraint: {
                                    operator: 'or',
                                    arg0: { operator: 'empty', arg0: { prop: 'winsserver' } },
                                    arg1: { operator: 'falsy', arg0: { prop: 'winssupport' } }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Acting as a WINS server and using a WINS server are mutually exclusive.')
                            }
                        ]
                    }
                },
                {
                    type: 'checkbox',
                    name: 'usesendfile',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Use sendfile'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("Use the more efficient sendfile system call for files that are exclusively oplocked. This may make more efficient use of the system CPU's and cause Samba to be faster. Samba automatically turns this off for clients that use protocol levels lower than NT LM 0.12 and when it detects a client is Windows 9x."),
                    value: true
                },
                {
                    type: 'checkbox',
                    name: 'aio',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Asynchronous I/O'),
                    value: true
                },
                {
                    type: 'select',
                    name: 'loglevel',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Log level'),
                    value: 0,
                    store: {
                        data: [
                            [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('None')],
                            [1, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Minimum')],
                            [2, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Normal')],
                            [3, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Full')],
                            [10, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Debug')]
                        ]
                    }
                },
                {
                    type: 'textarea',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("Please check the <a href='http://www.samba.org/samba/docs/man/manpages-3/smb.conf.5.html' target='_blank'>manual page</a> for more details."),
                    value: ''
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
                        url: '/services/smb'
                    }
                }
            ]
        };
    }
}
SmbSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSmbSettingsFormPageComponent_BaseFactory; return function SmbSettingsFormPageComponent_Factory(t) { return (ɵSmbSettingsFormPageComponent_BaseFactory || (ɵSmbSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SmbSettingsFormPageComponent)))(t || SmbSettingsFormPageComponent); }; }();
SmbSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmbSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmbSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 41533:
/*!**************************************************************************!*\
  !*** ./src/app/pages/services/smb/smb-share-datatable-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmbShareDatatablePageComponent": () => (/* binding */ SmbShareDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class SmbShareDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: '14ee24b4-330a-11ea-b3fb-eb6c148bc874',
            autoReload: false,
            remoteSorting: true,
            remotePaging: true,
            rowEnumFmt: '{{ sharedfoldername }}',
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    prop: 'enable',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'), prop: 'sharedfoldername', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Comment'),
                    prop: 'comment',
                    cellTemplateName: 'text',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Public'),
                    prop: 'guest',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            no: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('No') },
                            allow: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guests allowed') },
                            only: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guests only') }
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read-only'),
                    prop: 'readonly',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Browseable'),
                    prop: 'browseable',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'checkIcon'
                }
            ],
            sorters: [
                {
                    dir: 'asc',
                    prop: 'sharedfoldername'
                }
            ],
            store: {
                proxy: {
                    service: 'SMB',
                    get: {
                        method: 'getShareList'
                    }
                }
            },
            actions: [
                {
                    template: 'create',
                    execute: {
                        type: 'url',
                        url: '/services/smb/shares/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/services/smb/shares/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'SMB',
                            method: 'deleteShare',
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
SmbShareDatatablePageComponent.ɵfac = function SmbShareDatatablePageComponent_Factory(t) { return new (t || SmbShareDatatablePageComponent)(); };
SmbShareDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SmbShareDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmbShareDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 88158:
/*!*********************************************************************!*\
  !*** ./src/app/pages/services/smb/smb-share-form-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmbShareFormPageComponent": () => (/* binding */ SmbShareFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SmbShareFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'SMB',
                get: {
                    method: 'getShare',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setShare'
                }
            },
            fields: [
                /* eslint-disable max-len */
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
                    type: 'sharedFolderSelect',
                    name: 'sharedfolderref',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The location of the files to share.'),
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Comment'),
                    value: '',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This is a text field that is seen next to a share when a client queries the server.')
                },
                {
                    type: 'select',
                    name: 'guest',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Public'),
                    hint: [
                        (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("If 'Guests allowed' is selected and no login credential is provided, then access as guest. Always access as guest when 'Guests only' is selecting; in this case no password is required to connect to the share." // eslint-disable-line @typescript-eslint/quotes
                        ),
                        (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Make sure that the guest user <em>nobody</em> can access the files.')
                    ].join(' '),
                    value: 'no',
                    store: {
                        data: [
                            ['no', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('No')],
                            ['allow', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guests allowed')],
                            ['only', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guests only')]
                        ]
                    }
                },
                {
                    type: 'checkbox',
                    name: 'readonly',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Read-only'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('If this parameter is set, then users may not create or modify files in the share.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'browseable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Browseable'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This controls whether this share is seen in the list of available shares in a net view and in the browse list.'),
                    value: true
                },
                {
                    type: 'checkbox',
                    name: 'timemachine',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Time Machine support'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable Time Machine support for this share.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'transportencryption',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Transport encryption'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enforce transport encryption for this share. Clients that do not support encryption will be denied access to the share.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'inheritacls',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Inherit ACLs'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This parameter can be used to ensure that if default acls exist on parent directories, they are always honored when creating a new file or subdirectory in these parent directories.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'inheritpermissions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Inherit permissions'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The permissions on new files and directories are normally governed by create mask and directory mask but the inherit permissions parameter overrides this. This can be particularly useful on systems with many users to allow a single share to be used flexibly by each user.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'recyclebin',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable recycle bin'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This will create a recycle bin for the share.'),
                    value: false
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'select',
                            name: 'recyclemaxsize',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Maximum file size'),
                            hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Files that are larger than the specified number will not be put into the recycle bin.'),
                            value: 0,
                            store: {
                                data: [
                                    [0, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Unrestricted')],
                                    [1048576, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 MiB')],
                                    [2097152, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('2 MiB')],
                                    [5242880, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('5 MiB')],
                                    [10485760, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('10 MiB')],
                                    [26214400, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('25 MiB')],
                                    [52428800, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('50 MiB')],
                                    [78643200, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('75 MiB')],
                                    [104857600, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('100 MiB')],
                                    [262144000, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('250 MiB')],
                                    [524288000, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('500 MiB')],
                                    [786432000, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('750 MiB')],
                                    [1073741824, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 GiB')],
                                    [2147483648, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('2 GiB')],
                                    [4294967296, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('4 GiB')]
                                ]
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'falsy', arg0: { prop: 'recyclebin' } }
                                }
                            ],
                            validators: {
                                min: 0,
                                patternType: 'integer',
                                required: true
                            },
                            flex: 45
                        },
                        {
                            type: 'numberInput',
                            name: 'recyclemaxage',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Retention time'),
                            hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Files in the recycle bin will be deleted automatically after the specified number of days. Set to 0 for manual deletion.'),
                            value: 0,
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'falsy', arg0: { prop: 'recyclebin' } }
                                }
                            ],
                            validators: {
                                min: 0,
                                patternType: 'integer',
                                required: true
                            },
                            flex: 45
                        },
                        {
                            type: 'iconButton',
                            name: 'recyclenow',
                            tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Empty now'),
                            icon: 'eraser',
                            submitValue: false,
                            request: {
                                service: 'SMB',
                                method: 'emptyRecycleBin',
                                params: {
                                    uuid: '{{ _routeParams.uuid }}'
                                },
                                successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cleaning up recycle bin on the share.')
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: {
                                            operator: 'falsy',
                                            arg0: { value: '{{ _routeConfig.data.editing | toboolean }}' }
                                        },
                                        arg1: { operator: 'falsy', arg0: { prop: 'recyclebin' } }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    name: 'hidedotfiles',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hide dot files'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This parameter controls whether files starting with a dot appear as hidden files'),
                    value: true
                },
                {
                    type: 'checkbox',
                    name: 'easupport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extended attributes'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Allow clients to attempt to store OS/2 state extended attributes on a share.'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'storedosattributes',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Store DOS attributes'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('If this parameter is set, Samba attempts to first read DOS attributes (SYSTEM, HIDDEN, ARCHIVE or READ-ONLY) from a file system extended attribute, before mapping DOS attributes to UNIX permission bits. When set, DOS attributes will be stored onto an extended attribute in the UNIX file system, associated with the file or directory.'),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'hostsallow',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hosts allow'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option is a comma, space, or tab delimited set of hosts which are permitted to access this share. You can specify the hosts by name or IP number. Leave this field empty to use default settings.'),
                    value: ''
                },
                {
                    type: 'textInput',
                    name: 'hostsdeny',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hosts deny'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This option is a comma, space, or tab delimited set of host which are NOT permitted to access this share. Where the lists conflict, the allow list takes precedence. In the event that it is necessary to deny all by default, use the keyword ALL (or the netmask 0.0.0.0/0) and then explicitly specify to the hosts allow parameter those hosts that should be permitted access. Leave this field empty to use default settings.'),
                    value: ''
                },
                {
                    type: 'checkbox',
                    name: 'audit',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Audit file operations'),
                    value: false
                },
                {
                    type: 'textarea',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("Please check the <a href='http://www.samba.org/samba/docs/man/manpages-3/smb.conf.5.html' target='_blank'>manual page</a> for more details." // eslint-disable-line @typescript-eslint/quotes
                    ),
                    value: ''
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/services/smb/shares'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/services/smb/shares'
                    }
                }
            ]
        };
    }
}
SmbShareFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSmbShareFormPageComponent_BaseFactory; return function SmbShareFormPageComponent_Factory(t) { return (ɵSmbShareFormPageComponent_BaseFactory || (ɵSmbShareFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SmbShareFormPageComponent)))(t || SmbShareFormPageComponent); }; }();
SmbShareFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmbShareFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SmbShareFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 10385:
/*!***************************************************************!*\
  !*** ./src/app/pages/services/ssh/ssh-form-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SshFormPageComponent": () => (/* binding */ SshFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SshFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'SSH',
                get: {
                    method: 'get'
                },
                post: {
                    method: 'set'
                }
            },
            hints: [
                {
                    type: 'info',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Users must be assigned to the <em>_ssh</em> group to be able to log in via SSH.'),
                    dismissible: true,
                    stateId: '1f7e0754-e049-4578-9272-8cbb365fad97'
                }
            ],
            fields: [
                {
                    type: 'checkbox',
                    name: 'enable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: false
                },
                {
                    type: 'numberInput',
                    name: 'port',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 22,
                    validators: {
                        min: 0,
                        max: 65535,
                        patternType: 'port',
                        requiredIf: { operator: 'eq', arg0: { prop: 'enable' }, arg1: true }
                    }
                },
                {
                    type: 'checkbox',
                    name: 'permitrootlogin',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permit root login'),
                    value: true,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies whether it is allowed to login as superuser.')
                },
                {
                    type: 'checkbox',
                    name: 'passwordauthentication',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password authentication'),
                    value: true,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable keyboard-interactive authentication.')
                },
                {
                    type: 'checkbox',
                    name: 'pubkeyauthentication',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Public key authentication'),
                    value: true,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enable public key authentication.')
                },
                {
                    type: 'checkbox',
                    name: 'tcpforwarding',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('TCP forwarding'),
                    value: true,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permit to do SSH tunneling.')
                },
                {
                    type: 'checkbox',
                    name: 'compression',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Compression'),
                    value: true,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Compression is worth using if your connection is slow. The efficiency of the compression depends on the type of the file, and varies widely. Useful for internet transfer only.')
                },
                {
                    type: 'textarea',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please check the <a href="https://man.openbsd.org/sshd_config.5" target="_blank">manual page</a> for more details.'),
                    value: ''
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
                        url: '/services'
                    }
                }
            ]
        };
    }
}
SshFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSshFormPageComponent_BaseFactory; return function SshFormPageComponent_Factory(t) { return (ɵSshFormPageComponent_BaseFactory || (ɵSshFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SshFormPageComponent)))(t || SshFormPageComponent); }; }();
SshFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SshFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SshFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_services_services_module_ts.js.map