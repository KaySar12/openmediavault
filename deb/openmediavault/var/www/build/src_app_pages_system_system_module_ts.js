"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["src_app_pages_system_system_module_ts"],{

/***/ 26098:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssh/ssh-certificate-create-form-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SshCertificateCreateFormPageComponent": () => (/* binding */ SshCertificateCreateFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SshCertificateCreateFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'CertificateMgmt',
                post: {
                    method: 'createSsh'
                }
            },
            fields: [
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies the type of key to create.'),
                    value: 'rsa',
                    store: {
                        data: [
                            ['rsa', 'RSA (3072b)'],
                            ['ed25519', 'Ed25519 (256b)']
                        ]
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    validators: {
                        required: true
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssh'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssh'
                    }
                }
            ]
        };
    }
}
SshCertificateCreateFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSshCertificateCreateFormPageComponent_BaseFactory; return function SshCertificateCreateFormPageComponent_Factory(t) { return (ɵSshCertificateCreateFormPageComponent_BaseFactory || (ɵSshCertificateCreateFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SshCertificateCreateFormPageComponent)))(t || SshCertificateCreateFormPageComponent); }; }();
SshCertificateCreateFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SshCertificateCreateFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SshCertificateCreateFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 12066:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssh/ssh-certificate-datatable-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SshCertificateDatatablePageComponent": () => (/* binding */ SshCertificateDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class SshCertificateDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: '85efa226-1c32-11ea-8f7a-67b9a1e57494',
            columns: [
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
                    prop: 'comment'
                }
            ],
            store: {
                proxy: {
                    service: 'CertificateMgmt',
                    get: {
                        method: 'getSshList'
                    }
                }
            },
            actions: [
                {
                    type: 'menu',
                    icon: 'add',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create | Import'),
                    actions: [
                        {
                            template: 'create',
                            execute: {
                                type: 'url',
                                url: '/system/certificate/ssh/create'
                            }
                        },
                        {
                            type: 'iconButton',
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                            icon: 'import',
                            execute: {
                                type: 'url',
                                url: '/system/certificate/ssh/import'
                            }
                        }
                    ]
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssh/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'copy',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'formDialog',
                        formDialog: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy public SSH key'),
                            fields: [
                                {
                                    type: 'hint',
                                    hintType: 'info',
                                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Installs the public SSH key on a remote system as an authorized key. Make sure password authentication is enabled on that remote system.')
                                },
                                {
                                    type: 'hidden',
                                    name: 'uuid',
                                    value: '{{ _selected[0].uuid }}'
                                },
                                {
                                    type: 'textInput',
                                    name: 'hostname',
                                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hostname'),
                                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The hostname of the remote system.'),
                                    value: '',
                                    validators: {
                                        required: true
                                    }
                                },
                                {
                                    type: 'numberInput',
                                    name: 'port',
                                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The port on which SSH is running on the remote system.'),
                                    value: 22,
                                    validators: {
                                        required: true,
                                        patternType: 'port'
                                    }
                                },
                                {
                                    type: 'textInput',
                                    name: 'username',
                                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User name'),
                                    value: '',
                                    autocomplete: 'username',
                                    validators: {
                                        required: true
                                    }
                                },
                                {
                                    type: 'passwordInput',
                                    name: 'password',
                                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                                    value: '',
                                    autocomplete: 'new-password'
                                }
                            ],
                            buttons: {
                                submit: {
                                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copy'),
                                    execute: {
                                        type: 'request',
                                        request: {
                                            service: 'CertificateMgmt',
                                            method: 'copySshId',
                                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, installing public SSH key on remote system ...'),
                                            successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Copied SSH certificate to {{ hostname }}.')
                                        }
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
                            service: 'CertificateMgmt',
                            method: 'deleteSsh',
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
SshCertificateDatatablePageComponent.ɵfac = function SshCertificateDatatablePageComponent_Factory(t) { return new (t || SshCertificateDatatablePageComponent)(); };
SshCertificateDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SshCertificateDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SshCertificateDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 38021:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssh/ssh-certificate-edit-form-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SshCertificateEditFormPageComponent": () => (/* binding */ SshCertificateEditFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SshCertificateEditFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'CertificateMgmt',
                get: {
                    method: 'getSsh',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setSsh'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'textInput',
                    name: 'publickey',
                    value: '',
                    monospace: true,
                    hasCopyToClipboardButton: true,
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Public key'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The public key in OpenSSH format.'),
                    disabled: true
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    validators: {
                        required: true
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssh'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssh'
                    }
                }
            ]
        };
    }
}
SshCertificateEditFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSshCertificateEditFormPageComponent_BaseFactory; return function SshCertificateEditFormPageComponent_Factory(t) { return (ɵSshCertificateEditFormPageComponent_BaseFactory || (ɵSshCertificateEditFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SshCertificateEditFormPageComponent)))(t || SshCertificateEditFormPageComponent); }; }();
SshCertificateEditFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SshCertificateEditFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SshCertificateEditFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 11539:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssh/ssh-certificate-import-form-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SshCertificateImportFormPageComponent": () => (/* binding */ SshCertificateImportFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SshCertificateImportFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'CertificateMgmt',
                post: {
                    method: 'setSsh'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'fileInput',
                    name: 'privatekey',
                    value: '',
                    monospace: true,
                    accept: '.key,.pem',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Private key'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The private key in PEM format.'),
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'fileInput',
                    name: 'publickey',
                    value: '',
                    monospace: true,
                    rows: 1,
                    accept: '.pub',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Public key'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The public key in OpenSSH format.'),
                    validators: {
                        required: true,
                        patternType: 'sshPubKeyOpenSsh'
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    validators: {
                        required: true
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssh'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssh'
                    }
                }
            ]
        };
    }
}
SshCertificateImportFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSshCertificateImportFormPageComponent_BaseFactory; return function SshCertificateImportFormPageComponent_Factory(t) { return (ɵSshCertificateImportFormPageComponent_BaseFactory || (ɵSshCertificateImportFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SshCertificateImportFormPageComponent)))(t || SshCertificateImportFormPageComponent); }; }();
SshCertificateImportFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SshCertificateImportFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SshCertificateImportFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 74405:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssl/ssl-certificate-datatable-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SslCertificateDatatablePageComponent": () => (/* binding */ SslCertificateDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class SslCertificateDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: '9fe3e818-1c32-11ea-bde4-5f0ce98b6927',
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Valid from'),
                    prop: 'validfrom',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'localeDateTime'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Valid to'),
                    prop: 'validto',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'localeDateTime'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Fingerprint (SHA-1)'),
                    prop: 'fingerprintsha1',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'copyToClipboard'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Fingerprint (SHA-256)'),
                    prop: 'fingerprintsha256',
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
                    prop: 'comment'
                }
            ],
            store: {
                proxy: {
                    service: 'CertificateMgmt',
                    get: {
                        method: 'getList'
                    }
                }
            },
            actions: [
                {
                    type: 'menu',
                    icon: 'add',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create | Import'),
                    actions: [
                        {
                            template: 'create',
                            execute: {
                                type: 'url',
                                url: '/system/certificate/ssl/create'
                            }
                        },
                        {
                            type: 'iconButton',
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                            icon: 'import',
                            execute: {
                                type: 'url',
                                url: '/system/certificate/ssl/import'
                            }
                        }
                    ]
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
                        url: '/system/certificate/ssl/detail/{{ _selected[0].uuid }}'
                    }
                },
                {
                    template: 'delete',
                    enabledConstraints: {
                        constraint: [
                            // Disable button if a selected SSL certificate is in use.
                            { operator: 'falsy', arg0: { prop: '_used' } }
                        ]
                    },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'CertificateMgmt',
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
SslCertificateDatatablePageComponent.ɵfac = function SslCertificateDatatablePageComponent_Factory(t) { return new (t || SslCertificateDatatablePageComponent)(); };
SslCertificateDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SslCertificateDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SslCertificateDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 97145:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssl/ssl-certificate-details-text-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SslCertificateDetailsTextPageComponent": () => (/* binding */ SslCertificateDetailsTextPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/components/intuition/text-page/text-page.component */ 43145);


class SslCertificateDetailsTextPageComponent {
    constructor() {
        this.config = {
            request: {
                service: 'CertificateMgmt',
                get: {
                    method: 'getDetail',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                }
            },
            buttons: [
                {
                    template: 'back',
                    url: '/system/certificate/ssl'
                }
            ]
        };
    }
}
SslCertificateDetailsTextPageComponent.ɵfac = function SslCertificateDetailsTextPageComponent_Factory(t) { return new (t || SslCertificateDetailsTextPageComponent)(); };
SslCertificateDetailsTextPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SslCertificateDetailsTextPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SslCertificateDetailsTextPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "omv-intuition-text-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_text_page_text_page_component__WEBPACK_IMPORTED_MODULE_0__.TextPageComponent], encapsulation: 2 });


/***/ }),

/***/ 87672:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssl/ssl-certificate-form-page.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SslCertificateFormPageComponent": () => (/* binding */ SslCertificateFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SslCertificateFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'CertificateMgmt',
                post: {
                    method: 'create'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'select',
                    name: 'size',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Key size'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The RSA key length.'),
                    value: 4096,
                    store: {
                        data: [
                            {
                                text: '2048b',
                                value: 2048
                            },
                            {
                                text: '4096b',
                                value: 4096
                            }
                        ],
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'value'
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'days',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Period of validity'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The number of days the certificate is valid for.'),
                    value: 365,
                    store: {
                        data: [
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 day'),
                                value: 1
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('2 days'),
                                value: 2
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('3 days'),
                                value: 3
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('4 days'),
                                value: 4
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('5 days'),
                                value: 5
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('6 days'),
                                value: 6
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 week'),
                                value: 7
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('2 weeks'),
                                value: 14
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('3 weeks'),
                                value: 21
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 month'),
                                value: 30
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('3 months'),
                                value: 90
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('6 months'),
                                value: 180
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('9 months'),
                                value: 270
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 year'),
                                value: 365
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('2 years'),
                                value: 740
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('3 years'),
                                value: 1095
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('4 years'),
                                value: 1460
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('5 years'),
                                value: 1825
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('10 years'),
                                value: 3650
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('15 years'),
                                value: 5475
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('20 years'),
                                value: 7300
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('25 years'),
                                value: 9125
                            }
                        ],
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'value'
                            }
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'cn',
                    value: '{{ location() | get("hostname") }}',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Common Name'),
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'o',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Organization Name')
                },
                {
                    type: 'textInput',
                    name: 'ou',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Organization Unit')
                },
                {
                    type: 'textInput',
                    name: 'l',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('City')
                },
                {
                    type: 'textInput',
                    name: 'st',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('State/Province')
                },
                {
                    type: 'select',
                    name: 'c',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Country'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a country ...'),
                    store: {
                        data: [
                            { value: 'AF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Afghanistan') },
                            { value: 'AX', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Aland Islands') },
                            { value: 'AL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Albania') },
                            { value: 'DZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Algeria') },
                            { value: 'AS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('American Samoa') },
                            { value: 'AD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Andorra') },
                            { value: 'AO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Angola') },
                            { value: 'AI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Anguilla') },
                            { value: 'AQ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Antarctica') },
                            { value: 'AG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Antigua and Barbuda') },
                            { value: 'AR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Argentina') },
                            { value: 'AM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Armenia') },
                            { value: 'AW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Aruba') },
                            { value: 'AU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Australia') },
                            { value: 'AT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Austria') },
                            { value: 'AZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Azerbaijan') },
                            { value: 'BS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bahamas') },
                            { value: 'BH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bahrain') },
                            { value: 'BD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bangladesh') },
                            { value: 'BB', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Barbados') },
                            { value: 'BY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Belarus') },
                            { value: 'BE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Belgium') },
                            { value: 'BZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Belize') },
                            { value: 'BJ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Benin') },
                            { value: 'BM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bermuda') },
                            { value: 'BT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bhutan') },
                            { value: 'BO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bolivia') },
                            { value: 'BA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bosnia and Herzegovina') },
                            { value: 'BW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Botswana') },
                            { value: 'BV', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bouvet Island') },
                            { value: 'BR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Brazil') },
                            { value: 'BQ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('British Antarctic Territory') },
                            { value: 'IO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('British Indian Ocean Territory') },
                            { value: 'VG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('British Virgin Islands') },
                            { value: 'BN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Brunei') },
                            { value: 'BG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bulgaria') },
                            { value: 'BF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Burkina Faso') },
                            { value: 'BI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Burundi') },
                            { value: 'KH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cambodia') },
                            { value: 'CM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cameroon') },
                            { value: 'CA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Canada') },
                            { value: 'CT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Canton and Enderbury Islands') },
                            { value: 'CV', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cape Verde') },
                            { value: 'KY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cayman Islands') },
                            { value: 'CF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Central African Republic') },
                            { value: 'TD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Chad') },
                            { value: 'CL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Chile') },
                            { value: 'CN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('China') },
                            { value: 'CX', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Christmas Island') },
                            { value: 'CC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cocos (Keeling) Islands') },
                            { value: 'CO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Colombia') },
                            { value: 'KM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Comoros') },
                            { value: 'CG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Congo (Brazzaville)') },
                            { value: 'CD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Congo (Kinshasa)') },
                            { value: 'CK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cook Islands') },
                            { value: 'CR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Costa Rica') },
                            { value: 'HR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Croatia') },
                            { value: 'CU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cuba') },
                            { value: 'CY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Cyprus') },
                            { value: 'CZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Czech Republic') },
                            { value: 'DK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Denmark') },
                            { value: 'DJ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Djibouti') },
                            { value: 'DM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Dominica') },
                            { value: 'DO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Dominican Republic') },
                            { value: 'NQ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Dronning Maud Land') },
                            { value: 'TL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('East Timor') },
                            { value: 'EC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ecuador') },
                            { value: 'EG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Egypt') },
                            { value: 'SV', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('El Salvador') },
                            { value: 'GQ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Equatorial Guinea') },
                            { value: 'ER', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Eritrea') },
                            { value: 'EE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Estonia') },
                            { value: 'ET', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethiopia') },
                            { value: 'FK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Falkland Islands') },
                            { value: 'FO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Faroe Islands') },
                            { value: 'FJ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Fiji') },
                            { value: 'FI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Finland') },
                            { value: 'FR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('France') },
                            { value: 'GF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('French Guiana') },
                            { value: 'PF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('French Polynesia') },
                            { value: 'TF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('French Southern Territories') },
                            { value: 'FQ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('French Southern and Antarctic Territories') },
                            { value: 'GA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gabon') },
                            { value: 'GM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gambia') },
                            { value: 'GE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Georgia') },
                            { value: 'DE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Germany') },
                            { value: 'GH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ghana') },
                            { value: 'GI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gibraltar') },
                            { value: 'GR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Greece') },
                            { value: 'GL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Greenland') },
                            { value: 'GD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Grenada') },
                            { value: 'GP', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guadeloupe') },
                            { value: 'GU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guam') },
                            { value: 'GT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guatemala') },
                            { value: 'GN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guinea') },
                            { value: 'GW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guinea-Bissau') },
                            { value: 'GY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Guyana') },
                            { value: 'HT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Haiti') },
                            { value: 'HM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Heard Island and McDonald Islands') },
                            { value: 'HN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Honduras') },
                            { value: 'HK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hong Kong S.A.R., China') },
                            { value: 'HU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hungary') },
                            { value: 'IS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Iceland') },
                            { value: 'IN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('India') },
                            { value: 'ID', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Indonesia') },
                            { value: 'IR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Iran') },
                            { value: 'IQ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Iraq') },
                            { value: 'IE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ireland') },
                            { value: 'IL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Israel') },
                            { value: 'IT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Italy') },
                            { value: 'CI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ivory Coast') },
                            { value: 'JM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Jamaica') },
                            { value: 'JP', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Japan') },
                            { value: 'JT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Johnston Island') },
                            { value: 'JO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Jordan') },
                            { value: 'KZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Kazakhstan') },
                            { value: 'KE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Kenya') },
                            { value: 'KI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Kiribati') },
                            { value: 'KW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Kuwait') },
                            { value: 'KG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Kyrgyzstan') },
                            { value: 'LA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Laos') },
                            { value: 'LV', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Latvia') },
                            { value: 'LB', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Lebanon') },
                            { value: 'LS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Lesotho') },
                            { value: 'LR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Liberia') },
                            { value: 'LY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Libya') },
                            { value: 'LI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Liechtenstein') },
                            { value: 'LT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Lithuania') },
                            { value: 'LU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Luxembourg') },
                            { value: 'MO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Macao S.A.R., China') },
                            { value: 'MK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Macedonia') },
                            { value: 'MG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Madagascar') },
                            { value: 'MW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Malawi') },
                            { value: 'MY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Malaysia') },
                            { value: 'MV', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Maldives') },
                            { value: 'ML', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mali') },
                            { value: 'MT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Malta') },
                            { value: 'MH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Marshall Islands') },
                            { value: 'MQ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Martinique') },
                            { value: 'MR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mauritania') },
                            { value: 'MU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mauritius') },
                            { value: 'YT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mayotte') },
                            { value: 'FX', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metropolitan France') },
                            { value: 'MX', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mexico') },
                            { value: 'FM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Micronesia') },
                            { value: 'MI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Midway Islands') },
                            { value: 'MD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Moldova') },
                            { value: 'MC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monaco') },
                            { value: 'MN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mongolia') },
                            { value: 'MS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Montserrat') },
                            { value: 'MA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Morocco') },
                            { value: 'MZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mozambique') },
                            { value: 'MM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Myanmar') },
                            { value: 'NA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Namibia') },
                            { value: 'NR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Nauru') },
                            { value: 'NP', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Nepal') },
                            { value: 'NL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netherlands') },
                            { value: 'AN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netherlands Antilles') },
                            { value: 'NT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Neutral Zone') },
                            { value: 'NC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('New Caledonia') },
                            { value: 'NZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('New Zealand') },
                            { value: 'NI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Nicaragua') },
                            { value: 'NE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Niger') },
                            { value: 'NG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Nigeria') },
                            { value: 'NU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Niue') },
                            { value: 'NF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Norfolk Island') },
                            { value: 'KP', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('North Korea') },
                            { value: 'VD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('North Vietnam') },
                            { value: 'MP', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Northern Mariana Islands') },
                            { value: 'NO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Norway') },
                            { value: 'OM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Oman') },
                            { value: 'QO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Outlying Oceania') },
                            { value: 'PC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Pacific Islands Trust Territory') },
                            { value: 'PK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Pakistan') },
                            { value: 'PW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Palau') },
                            { value: 'PS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Palestinian Territory') },
                            { value: 'PA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Panama') },
                            { value: 'PZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Panama Canal Zone') },
                            { value: 'PG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Papua New Guinea') },
                            { value: 'PY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Paraguay') },
                            { value: 'YD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("People's Democratic Republic of Yemen") },
                            { value: 'PE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Peru') },
                            { value: 'PH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Philippines') },
                            { value: 'PN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Pitcairn') },
                            { value: 'PL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Poland') },
                            { value: 'PT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Portugal') },
                            { value: 'PR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Puerto Rico') },
                            { value: 'QA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Qatar') },
                            { value: 'RE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Reunion') },
                            { value: 'RO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Romania') },
                            { value: 'RU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Russia') },
                            { value: 'RW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Rwanda') },
                            { value: 'SH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Saint Helena') },
                            { value: 'KN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Saint Kitts and Nevis') },
                            { value: 'LC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Saint Lucia') },
                            { value: 'PM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Saint Pierre and Miquelon') },
                            { value: 'VC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Saint Vincent and the Grenadines') },
                            { value: 'WS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Samoa') },
                            { value: 'SM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('San Marino') },
                            { value: 'ST', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sao Tome and Principe') },
                            { value: 'SA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Saudi Arabia') },
                            { value: 'SN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Senegal') },
                            { value: 'CS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Serbia And Montenegro') },
                            { value: 'SC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Seychelles') },
                            { value: 'SL', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sierra Leone') },
                            { value: 'SG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Singapore') },
                            { value: 'SK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Slovakia') },
                            { value: 'SI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Slovenia') },
                            { value: 'SB', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Solomon Islands') },
                            { value: 'SO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Somalia') },
                            { value: 'ZA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('South Africa') },
                            { value: 'GS', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('South Georgia and the South Sandwich Islands') },
                            { value: 'KR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('South Korea') },
                            { value: 'ES', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Spain') },
                            { value: 'LK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sri Lanka') },
                            { value: 'SD', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sudan') },
                            { value: 'SR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Suriname') },
                            { value: 'SJ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Svalbard and Jan Mayen') },
                            { value: 'SZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Swaziland') },
                            { value: 'SE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sweden') },
                            { value: 'CH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Switzerland') },
                            { value: 'SY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Syria') },
                            { value: 'TW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Taiwan') },
                            { value: 'TJ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tajikistan') },
                            { value: 'TZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tanzania') },
                            { value: 'TH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Thailand') },
                            { value: 'TG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Togo') },
                            { value: 'TK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tokelau') },
                            { value: 'TO', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tonga') },
                            { value: 'TT', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Trinidad and Tobago') },
                            { value: 'TN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tunisia') },
                            { value: 'TR', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Turkey') },
                            { value: 'TM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Turkmenistan') },
                            { value: 'TC', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Turks and Caicos Islands') },
                            { value: 'TV', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tuvalu') },
                            { value: 'PU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('U.S. Miscellaneous Pacific Islands') },
                            { value: 'VI', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('U.S. Virgin Islands') },
                            { value: 'UG', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Uganda') },
                            { value: 'UA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ukraine') },
                            { value: 'SU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Union of Soviet Socialist Republics') },
                            { value: 'AE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('United Arab Emirates') },
                            { value: 'GB', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('United Kingdom') },
                            { value: 'US', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('United States') },
                            { value: 'UM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('United States Minor Outlying Islands') },
                            { value: 'UY', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Uruguay') },
                            { value: 'UZ', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Uzbekistan') },
                            { value: 'VU', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Vanuatu') },
                            { value: 'VA', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Vatican') },
                            { value: 'VE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Venezuela') },
                            { value: 'VN', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Vietnam') },
                            { value: 'WK', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wake Island') },
                            { value: 'WF', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wallis and Futuna') },
                            { value: 'EH', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Western Sahara') },
                            { value: 'YE', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Yemen') },
                            { value: 'ZM', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Zambia') },
                            { value: 'ZW', text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Zimbabwe') }
                        ],
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'label'
                            }
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'email',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Email'),
                    validators: {
                        patternType: 'email'
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This field is automatically filled with the subject of the certificate if left blank.')
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssl'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssl'
                    }
                }
            ]
        };
    }
}
SslCertificateFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSslCertificateFormPageComponent_BaseFactory; return function SslCertificateFormPageComponent_Factory(t) { return (ɵSslCertificateFormPageComponent_BaseFactory || (ɵSslCertificateFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SslCertificateFormPageComponent)))(t || SslCertificateFormPageComponent); }; }();
SslCertificateFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SslCertificateFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SslCertificateFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 99564:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/system/certificates/ssl/ssl-certificate-import-form-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SslCertificateImportFormPageComponent": () => (/* binding */ SslCertificateImportFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class SslCertificateImportFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'CertificateMgmt',
                post: {
                    method: 'set'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'fileInput',
                    name: 'privatekey',
                    value: '',
                    monospace: true,
                    accept: '.key,.pem',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Private key'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Paste a RSA or ECC private key in X.509 PEM format here.'),
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'fileInput',
                    name: 'certificate',
                    value: '',
                    monospace: true,
                    accept: '.crt,.pem',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Certificate'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Paste a RSA or ECC certificate in X.509 PEM format here.'),
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    value: '',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    validators: {
                        required: true
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssl'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/certificate/ssl'
                    }
                }
            ]
        };
    }
}
SslCertificateImportFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵSslCertificateImportFormPageComponent_BaseFactory; return function SslCertificateImportFormPageComponent_Factory(t) { return (ɵSslCertificateImportFormPageComponent_BaseFactory || (ɵSslCertificateImportFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SslCertificateImportFormPageComponent)))(t || SslCertificateImportFormPageComponent); }; }();
SslCertificateImportFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SslCertificateImportFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SslCertificateImportFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 65989:
/*!*************************************************************************!*\
  !*** ./src/app/pages/system/cron/cron-task-datatable-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronTaskDatatablePageComponent": () => (/* binding */ CronTaskDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class CronTaskDatatablePageComponent {
    constructor() {
        this.config = {
            autoReload: false,
            stateId: '43b8eb04-2594-11ea-8bd6-fb7a107fca0e',
            sorters: [
                {
                    dir: 'asc',
                    prop: 'enable'
                }
            ],
            store: {
                proxy: {
                    service: 'Cron',
                    get: {
                        method: 'getList',
                        params: {
                            type: ['userdefined']
                        }
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
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User'),
                    prop: 'username',
                    flexGrow: 1,
                    sortable: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Command'),
                    prop: 'command',
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
                        url: '/system/cron/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/system/cron/edit/{{ _selected[0].uuid }}'
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
                                    service: 'Cron',
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
                            service: 'Cron',
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
CronTaskDatatablePageComponent.ɵfac = function CronTaskDatatablePageComponent_Factory(t) { return new (t || CronTaskDatatablePageComponent)(); };
CronTaskDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CronTaskDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function CronTaskDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 35752:
/*!********************************************************************!*\
  !*** ./src/app/pages/system/cron/cron-task-form-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronTaskFormPageComponent": () => (/* binding */ CronTaskFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class CronTaskFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Cron',
                get: {
                    method: 'get',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'set',
                    params: {
                        type: 'userdefined'
                    }
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
                    name: 'execution',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Time of execution'),
                    value: 'exactly',
                    store: {
                        data: [
                            ['exactly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Certain date')],
                            ['hourly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hourly')],
                            ['daily', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Daily')],
                            ['weekly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Weekly')],
                            ['monthly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monthly')],
                            ['yearly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Yearly')],
                            ['reboot', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('At reboot')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'cronexprdesc',
                    disabled: true,
                    submitValue: false,
                    value: '',
                    modifiers: [
                        {
                            type: 'visible',
                            constraint: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' }
                        },
                        {
                            type: 'value',
                            typeConfig: '{% if execution == "exactly" %}' +
                                '{% set _minute = minute %}' +
                                '{% set _hour = hour %}' +
                                '{% set _dayofmonth = dayofmonth %}' +
                                '{% if everynminute %}{% set _minute %}*/{{ minute }}{% endset %}{% endif %}' +
                                '{% if everynhour %}{% set _hour %}*/{{ hour }}{% endset %}{% endif %}' +
                                '{% if everyndayofmonth %}{% set _dayofmonth %}*/{{ dayofmonth }}{% endset %}{% endif %}' +
                                '{{ [_minute, _hour, _dayofmonth, month, dayofweek] | join(" ") | cron2human }}' +
                                '{% endif %}',
                            deps: [
                                'execution',
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
                            value: ['{{ moment("H:m:ss") | split(":") | get(1) }}'],
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                                }
                            ],
                            validators: {
                                requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                pattern: {
                                    pattern: '^(\\*|(([0-9]|[1-5][0-9]),)*([0-9]|[1-5][0-9]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            },
                            multiple: true,
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
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everynminute',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N minute'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                        arg1: {
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
                                },
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
                            value: ['{{ moment("H:m:ss") | split(":") | get(0) }}'],
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                                }
                            ],
                            validators: {
                                requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                pattern: {
                                    pattern: '^(\\*|(([0-9]|1[0-9]|2[0-3]),)*([0-9]|1[0-9]|2[0-3]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            },
                            multiple: true,
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
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everynhour',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N hour'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                        arg1: {
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
                                },
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
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                                }
                            ],
                            validators: {
                                requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                pattern: {
                                    pattern: '^(\\*|(([1-9]|[12][0-9]|3[01]),)*([1-9]|[12][0-9]|3[01]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            },
                            multiple: true,
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
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everyndayofmonth',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N day of month'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                        arg1: {
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
                                },
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
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                        pattern: {
                            pattern: '^(\\*|(([1-9]|1[0-2]),)*([1-9]|1[0-2]))$',
                            errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                        }
                    },
                    multiple: true,
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
                    }
                },
                {
                    type: 'select',
                    name: 'dayofweek',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Day of week'),
                    value: ['*'],
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                        pattern: {
                            pattern: '^(\\*|([1-7],)*[1-7])$',
                            errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                        }
                    },
                    multiple: true,
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
                    type: 'select',
                    name: 'username',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select an user ...'),
                    value: 'root',
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
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'command',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Command'),
                    value: '',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'checkbox',
                    name: 'sendemail',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Send command output via email'),
                    value: false,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('An email message with the command output (if any produced) is send to the user who performs the job.')
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
                        url: '/system/cron'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/cron'
                    }
                }
            ]
        };
    }
}
CronTaskFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵCronTaskFormPageComponent_BaseFactory; return function CronTaskFormPageComponent_Factory(t) { return (ɵCronTaskFormPageComponent_BaseFactory || (ɵCronTaskFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](CronTaskFormPageComponent)))(t || CronTaskFormPageComponent); }; }();
CronTaskFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CronTaskFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function CronTaskFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 89681:
/*!*************************************************************************!*\
  !*** ./src/app/pages/system/date-time/date-time-form-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeFormPageComponent": () => (/* binding */ DateTimeFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class DateTimeFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'System',
                get: {
                    method: 'getTimeSettings',
                    params: {}
                },
                post: {
                    method: 'setTimeSettings',
                    params: {}
                }
            },
            fields: [
                {
                    type: 'select',
                    name: 'timezone',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Time zone'),
                    store: {
                        proxy: {
                            service: 'System',
                            get: {
                                method: 'getTimeZoneList',
                                params: {}
                            }
                        }
                    },
                    textField: 'value',
                    value: 'UTC'
                },
                {
                    type: 'checkbox',
                    name: 'ntpenable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Use NTP server'),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'ntptimeservers',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Time servers'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('NTP time servers, separated by comma.'),
                    value: 'pool.ntp.org',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'ntpenable' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'ntpenable' } },
                        patternType: 'domainNameIpList'
                    }
                },
                {
                    type: 'textInput',
                    name: 'ntpclients',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Allowed clients'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IP addresses in CIDR notation or host names of clients that are allowed to access the NTP server.'),
                    value: '',
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'falsy', arg0: { prop: 'ntpenable' } }
                        }
                    ],
                    validators: {
                        patternType: 'hostNameIpNetCidrList'
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
                        url: '/system'
                    }
                }
            ]
        };
    }
}
DateTimeFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵDateTimeFormPageComponent_BaseFactory; return function DateTimeFormPageComponent_Factory(t) { return (ɵDateTimeFormPageComponent_BaseFactory || (ɵDateTimeFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DateTimeFormPageComponent)))(t || DateTimeFormPageComponent); }; }();
DateTimeFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DateTimeFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function DateTimeFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 97740:
/*!***************************************************************************!*\
  !*** ./src/app/pages/system/monitoring/monitoring-form-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoringFormPageComponent": () => (/* binding */ MonitoringFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class MonitoringFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'PerfStats',
                get: {
                    method: 'get',
                    params: {},
                },
                post: {
                    method: 'set',
                    params: {}
                }
            },
            fields: [
                {
                    type: 'checkbox',
                    name: 'enable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: true,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies whether the system performance statistics are collected periodically.')
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
                        url: '/system'
                    }
                }
            ]
        };
    }
}
MonitoringFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵMonitoringFormPageComponent_BaseFactory; return function MonitoringFormPageComponent_Factory(t) { return (ɵMonitoringFormPageComponent_BaseFactory || (ɵMonitoringFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MonitoringFormPageComponent)))(t || MonitoringFormPageComponent); }; }();
MonitoringFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MonitoringFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function MonitoringFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 10071:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/system/notification/notification-selection-list-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSelectionListPageComponent": () => (/* binding */ NotificationSelectionListPageComponent)
/* harmony export */ });
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_selection_list_page_selection_list_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/selection-list-page/selection-list-page.component */ 35939);



class NotificationSelectionListPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_0__.BaseSelectionListPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            hasSelectAllButton: true,
            multiple: true,
            textProp: 'title',
            valueProp: 'uuid',
            selectedProp: 'enable',
            updateStoreOnSelectionChange: true,
            store: {
                proxy: {
                    service: 'Notification',
                    get: {
                        method: 'getList',
                        params: {}
                    },
                    post: {
                        method: 'setList',
                        params: {},
                        filter: {
                            mode: 'pick',
                            props: ['uuid', 'id', 'enable']
                        }
                    }
                },
                sorters: [
                    {
                        dir: 'asc',
                        prop: 'title'
                    }
                ]
            },
            buttons: [
                {
                    template: 'submit'
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/notification'
                    }
                }
            ]
        };
    }
}
NotificationSelectionListPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵNotificationSelectionListPageComponent_BaseFactory; return function NotificationSelectionListPageComponent_Factory(t) { return (ɵNotificationSelectionListPageComponent_BaseFactory || (ɵNotificationSelectionListPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NotificationSelectionListPageComponent)))(t || NotificationSelectionListPageComponent); }; }();
NotificationSelectionListPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotificationSelectionListPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function NotificationSelectionListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-selection-list-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_selection_list_page_selection_list_page_component__WEBPACK_IMPORTED_MODULE_1__.SelectionListPageComponent], encapsulation: 2 });


/***/ }),

/***/ 38102:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/system/notification/notification-settings-form-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingsFormPageComponent": () => (/* binding */ NotificationSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class NotificationSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'EmailNotification',
                get: {
                    method: 'get',
                    params: {},
                },
                post: {
                    method: 'set',
                    params: {}
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
                    type: 'textInput',
                    name: 'server',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SMTP server'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Outgoing SMTP mail server address, e.g. smtp.mycorp.com.'),
                    value: '',
                    validators: {
                        requiredIf: { operator: 'eq', arg0: { prop: 'enable' }, arg1: true },
                        patternType: 'domainNameIp'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'port',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SMTP port'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The default SMTP mail server port, e.g. 25, 465 or 587.'),
                    value: 25,
                    validators: {
                        min: 1,
                        max: 65535,
                        required: true,
                        patternType: 'port'
                    }
                },
                {
                    type: 'select',
                    name: 'tls',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Encryption mode'),
                    value: 'none',
                    store: {
                        data: [
                            ['none', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('None')],
                            ['ssl', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSL/TLS')],
                            ['starttls', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('STARTTLS')],
                            ['auto', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Auto')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'sender',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Sender email'),
                    value: '',
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'enable' } },
                        patternType: 'email'
                    }
                },
                {
                    type: 'checkbox',
                    name: 'authenable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Authentication required'),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'username',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User name'),
                    value: '',
                    autocomplete: 'off',
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'falsy', arg0: { prop: 'authenable' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'authenable' } }
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'password',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                    value: '',
                    autocomplete: 'new-password',
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'falsy', arg0: { prop: 'authenable' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'authenable' } }
                    }
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Recipient')
                },
                {
                    type: 'textInput',
                    name: 'primaryemail',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Primary email'),
                    value: '',
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'enable' } },
                        patternType: 'email'
                    }
                },
                {
                    type: 'textInput',
                    name: 'secondaryemail',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Secondary email'),
                    value: '',
                    validators: {
                        patternType: 'email'
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
                        url: '/system/notification'
                    }
                },
                {
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Test'),
                    enabledConstraint: { operator: 'truthy', arg0: { prop: 'enable' } },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'EmailNotification',
                            method: 'sendTestEmail',
                            params: {},
                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, sending a test email ...'),
                            successNotification: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)(
                            // eslint-disable-next-line max-len
                            'An attempt to send the test email has been made. Please check your mailbox. If the email does not arrive, check any spam folders and also check there are no Postfix related errors in the system log.')
                        }
                    }
                }
            ]
        };
    }
}
NotificationSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵNotificationSettingsFormPageComponent_BaseFactory; return function NotificationSettingsFormPageComponent_Factory(t) { return (ɵNotificationSettingsFormPageComponent_BaseFactory || (ɵNotificationSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](NotificationSettingsFormPageComponent)))(t || NotificationSettingsFormPageComponent); }; }();
NotificationSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotificationSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function NotificationSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 17351:
/*!**************************************************************************!*\
  !*** ./src/app/pages/system/plugins/plugins-datatable-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginsDatatablePageComponent": () => (/* binding */ PluginsDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _app_shared_directives_external_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/directives/external-link.directive */ 56824);
/* harmony import */ var _app_shared_pipes_binary_unit_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/pipes/binary-unit.pipe */ 64561);
/* harmony import */ var _app_shared_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/pipes/sort.pipe */ 63010);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 40668);
/**
 * This file is part of OpenMediaVault.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Volker Theile <volker.theile@openmediavault.org>
 * @copyright Copyright (c) 2009-2024 Volker Theile
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */










const _c0 = ["pluginInfoTpl"];
function PluginsDatatablePageComponent_ng_template_1_mat_chip_list_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip-list", 10)(1, "mat-chip", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectable", false)("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "Installed"), " ");
} }
function PluginsDatatablePageComponent_ng_template_1_div_8_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectable", false)("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r12, " ");
} }
function PluginsDatatablePageComponent_ng_template_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PluginsDatatablePageComponent_ng_template_1_div_8_mat_chip_2_Template, 2, 3, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, row_r2.pluginarchitecture));
} }
function PluginsDatatablePageComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br")(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r2.extendeddescription);
} }
function PluginsDatatablePageComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Section"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, row_r2.pluginsection), "");
} }
function PluginsDatatablePageComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Maintainer"), ": ", row_r2.maintainer, "");
} }
function PluginsDatatablePageComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "Homepage"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", row_r2.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r2.homepage);
} }
function PluginsDatatablePageComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Repository"), ": ", row_r2.repository, "");
} }
function PluginsDatatablePageComponent_ng_template_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "binaryUnit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Size"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, row_r2.size), "");
} }
function PluginsDatatablePageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PluginsDatatablePageComponent_ng_template_1_mat_chip_list_7_Template, 4, 5, "mat-chip-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PluginsDatatablePageComponent_ng_template_1_div_8_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PluginsDatatablePageComponent_ng_template_1_ng_container_10_Template, 5, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PluginsDatatablePageComponent_ng_template_1_ng_container_11_Template, 6, 6, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PluginsDatatablePageComponent_ng_template_1_ng_container_12_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PluginsDatatablePageComponent_ng_template_1_ng_container_13_Template, 7, 5, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PluginsDatatablePageComponent_ng_template_1_ng_container_14_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PluginsDatatablePageComponent_ng_template_1_ng_container_15_Template, 6, 6, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", row_r2.name, " ", row_r2.version, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.installed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.pluginarchitecture.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.extendeddescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.pluginsection);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.maintainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.repository);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r2.size);
} }
class PluginsDatatablePageComponent {
    constructor() {
        this.config = {
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Installed'),
                    prop: 'installed',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'checkIcon'
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'), prop: 'name', flexGrow: 1, sortable: true, hidden: true },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Version'), prop: 'version', flexGrow: 1, sortable: true, hidden: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Section'),
                    prop: 'pluginsection',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        template: '{{ pluginsection | title }}'
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Architecture'),
                    prop: 'pluginarchitecture',
                    flexGrow: 1,
                    sortable: false,
                    hidden: true,
                    cellTemplateName: 'chip'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Repository'),
                    prop: 'repository',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Abstract'), prop: 'abstract', flexGrow: 1, sortable: true, hidden: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Description'),
                    prop: 'extendeddescription',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Summary'),
                    prop: 'summary',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Size'),
                    prop: 'size',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'binaryUnit'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Maintainer'),
                    prop: 'maintainer',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Homepage'), prop: 'homepage', flexGrow: 1, sortable: true, hidden: true }
            ],
            selectionType: 'single',
            remoteSearching: true,
            hasSearchField: true,
            limit: 0,
            sorters: [
                {
                    dir: 'asc',
                    prop: 'name'
                },
                {
                    dir: 'asc',
                    prop: 'pluginsection'
                }
            ],
            store: {
                proxy: {
                    service: 'Plugin',
                    get: {
                        method: 'getList'
                    }
                }
            },
            stateId: 'df5e9c26-202f-11ea-9edc-6b253103fe43',
            actions: [
                {
                    type: 'iconButton',
                    icon: 'search',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Check for new plugins'),
                    execute: {
                        type: 'request',
                        request: {
                            service: 'Apt',
                            method: 'update',
                            task: true,
                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Checking for new plugins ...')
                        }
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:download',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Install'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [{ operator: 'falsy', arg0: { prop: 'installed' } }]
                    },
                    confirmationDialogConfig: {
                        template: 'confirmation-critical',
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Do you really want to install the plugin?')
                    },
                    execute: {
                        type: 'taskDialog',
                        taskDialog: {
                            config: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Install plugin'),
                                startOnInit: true,
                                buttons: {
                                    start: {
                                        hidden: true
                                    },
                                    stop: {
                                        hidden: true
                                    }
                                },
                                request: {
                                    service: 'Plugin',
                                    method: 'install',
                                    params: {
                                        packages: ['{{ _selected[0].name }}']
                                    }
                                }
                            },
                            successUrl: '/reload'
                        }
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'delete',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Uninstall'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [{ operator: 'truthy', arg0: { prop: 'installed' } }]
                    },
                    confirmationDialogConfig: {
                        template: 'confirmation-critical',
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Do you really want to uninstall the plugin?')
                    },
                    execute: {
                        type: 'taskDialog',
                        taskDialog: {
                            config: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Uninstall plugin'),
                                startOnInit: true,
                                buttons: {
                                    start: {
                                        hidden: true
                                    },
                                    stop: {
                                        hidden: true
                                    }
                                },
                                request: {
                                    service: 'Plugin',
                                    method: 'remove',
                                    params: {
                                        packages: ['{{ _selected[0].name }}']
                                    }
                                }
                            },
                            successUrl: '/reload'
                        }
                    }
                }
            ]
        };
    }
    ngOnInit() {
        // Append the column that uses a custom template.
        this.config.columns.unshift({
            name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Package Information'),
            prop: 'name',
            flexGrow: 3,
            cellTemplate: this.pluginInfoTpl
        });
    }
}
PluginsDatatablePageComponent.ɵfac = function PluginsDatatablePageComponent_Factory(t) { return new (t || PluginsDatatablePageComponent)(); };
PluginsDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PluginsDatatablePageComponent, selectors: [["ng-component"]], viewQuery: function PluginsDatatablePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.pluginInfoTpl = _t.first);
    } }, decls: 3, vars: 1, consts: [[3, "config"], ["pluginInfoTpl", ""], [1, "omv-datatable-cell-package-info"], [1, "omv-datatable-cell-header"], [1, "omv-datatable-cell-header-text"], [1, "omv-font-weight-title", "omv-font-size-title"], [1, "omv-font-size-subheading-2"], ["class", "installed", 4, "ngIf"], ["class", "architecture", 4, "ngIf"], [4, "ngIf"], [1, "installed"], [1, "omv-background-color-pair-green", 3, "selectable", "disableRipple"], [1, "architecture"], [3, "selectable", "disableRipple", 4, "ngFor", "ngForOf"], [3, "selectable", "disableRipple"], [3, "href"]], template: function PluginsDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PluginsDatatablePageComponent_ng_template_1_Template, 16, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _app_shared_directives_external_link_directive__WEBPACK_IMPORTED_MODULE_2__.ExternalLinkDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _app_shared_pipes_binary_unit_pipe__WEBPACK_IMPORTED_MODULE_3__.BinaryUnitPipe, _app_shared_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoPipe], styles: [".omv-datatable-cell-package-info[_ngcontent-%COMP%]   .omv-datatable-cell-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.omv-datatable-cell-package-info[_ngcontent-%COMP%]   .omv-datatable-cell-header[_ngcontent-%COMP%]   .installed[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n}\n.omv-datatable-cell-package-info[_ngcontent-%COMP%]   .architecture[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMtZGF0YXRhYmxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zY3NzL2RlZmF1bHRzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG1CQUFBO0FBRko7QUFJSTtFQUNFLG1CQ1FPO0FEVmI7QUFNRTtFQUNFLGtCQUFBO0FBSkoiLCJmaWxlIjoicGx1Z2lucy1kYXRhdGFibGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Njc3MvZGVmYXVsdHMvdmFyaWFibGVzJyBhcyBkdjtcblxuLm9tdi1kYXRhdGFibGUtY2VsbC1wYWNrYWdlLWluZm8ge1xuICAub212LWRhdGF0YWJsZS1jZWxsLWhlYWRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5pbnN0YWxsZWQge1xuICAgICAgbWFyZ2luLWxlZnQ6IGR2LiRvbXYtbWFyZ2luO1xuICAgIH1cbiAgfVxuXG4gIC5hcmNoaXRlY3R1cmUge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxufVxuIiwiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgT3Blbk1lZGlhVmF1bHQuXG4vL1xuLy8gQGxpY2Vuc2UgICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLmh0bWwgR1BMIFZlcnNpb24gM1xuLy8gQGF1dGhvciAgICBWb2xrZXIgVGhlaWxlIDx2b2xrZXIudGhlaWxlQG9wZW5tZWRpYXZhdWx0Lm9yZz5cbi8vIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDA5LTIwMjQgVm9sa2VyIFRoZWlsZVxuLy9cbi8vIE9wZW5NZWRpYVZhdWx0IGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gT3Blbk1lZGlhVmF1bHQgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuJG9tdi1tYXJnaW46IDEuNXJlbTsgLy8gMjRweFxuJG9tdi1tYXJnaW4taWNvbi10ZXh0OiAwLjYyNXJlbTsgLy8gMTBweFxuJG9tdi1wYWRkaW5nOiAxcmVtOyAvLyAxNnB4XG4kb212LXRvcC1iYXItaGVpZ2h0OiA0cmVtOyAvLyA2NHB4XG4kb212LW5hdmlnYXRpb24tYmFyLXdpZHRoOiAxOC43NXJlbTsgLy8gMzAwcHhcbiRvbXYtbm90aWZpY2F0aW9uLWJhci13aWR0aDogMjEuODc1cmVtOyAvLyAzNTBweFxuIl19 */"] });


/***/ }),

/***/ 91398:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/system/powermgmt/powermgmt-settings-form-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowermgmtSettingsFormPageComponent": () => (/* binding */ PowermgmtSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class PowermgmtSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'PowerMgmt',
                get: {
                    method: 'get',
                    params: {}
                },
                post: {
                    method: 'set',
                    params: {}
                }
            },
            fields: [
                {
                    type: 'checkbox',
                    name: 'cpufreq',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monitoring'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies whether to monitor the system status and select the most appropriate CPU level.'),
                    value: false
                },
                {
                    type: 'select',
                    name: 'powerbtn',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Power button'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The action to be done when pressing the power button.'),
                    value: 'nothing',
                    store: {
                        data: [
                            ['nothing', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Nothing')],
                            ['shutdown', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Power Off')],
                            ['standby', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Standby')]
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'standbymode',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Standby mode'),
                    value: 'poweroff',
                    store: {
                        proxy: {
                            service: 'PowerMgmt',
                            get: {
                                method: 'enumerateStandbyModes',
                                params: {}
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'text'
                            }
                        ],
                        assign: {
                            key: 'value',
                            sources: {
                                poweroff: { text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Power Off') },
                                suspend: { text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Suspend') },
                                hibernate: { text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hibernate') },
                                suspendhybrid: { text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hybrid sleep') }
                            }
                        }
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
                        url: '/system/powermgmt'
                    }
                }
            ]
        };
    }
}
PowermgmtSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵPowermgmtSettingsFormPageComponent_BaseFactory; return function PowermgmtSettingsFormPageComponent_Factory(t) { return (ɵPowermgmtSettingsFormPageComponent_BaseFactory || (ɵPowermgmtSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](PowermgmtSettingsFormPageComponent)))(t || PowermgmtSettingsFormPageComponent); }; }();
PowermgmtSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PowermgmtSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PowermgmtSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 80762:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/system/powermgmt/powermgmt-task-datatable-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowermgmtTaskDatatablePageComponent": () => (/* binding */ PowermgmtTaskDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class PowermgmtTaskDatatablePageComponent {
    constructor() {
        this.config = {
            autoReload: false,
            stateId: '49d0980c-2594-11ea-a805-bfcb34ee0962',
            sorters: [
                {
                    dir: 'asc',
                    prop: 'enable'
                }
            ],
            store: {
                proxy: {
                    service: 'PowerMgmt',
                    get: {
                        method: 'getScheduleList',
                        params: {
                            type: ['reboot', 'shutdown', 'standby']
                        }
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
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    prop: 'type',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            reboot: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Reboot') },
                            standby: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Standby') },
                            shutdown: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shutdown') }
                        }
                    }
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
                        url: '/system/powermgmt/tasks/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/system/powermgmt/tasks/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'PowerMgmt',
                            method: 'deleteScheduledJob',
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
PowermgmtTaskDatatablePageComponent.ɵfac = function PowermgmtTaskDatatablePageComponent_Factory(t) { return new (t || PowermgmtTaskDatatablePageComponent)(); };
PowermgmtTaskDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PowermgmtTaskDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PowermgmtTaskDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 33205:
/*!******************************************************************************!*\
  !*** ./src/app/pages/system/powermgmt/powermgmt-task-form-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowermgmtTaskFormPageComponent": () => (/* binding */ PowermgmtTaskFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class PowermgmtTaskFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'PowerMgmt',
                get: {
                    method: 'getScheduledJob',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setScheduledJob'
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
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    value: 'reboot',
                    store: {
                        data: [
                            ['standby', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Standby')],
                            ['shutdown', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shutdown')],
                            ['reboot', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Reboot')]
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'execution',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Time of execution'),
                    value: 'exactly',
                    store: {
                        data: [
                            ['exactly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Certain date')],
                            ['hourly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hourly')],
                            ['daily', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Daily')],
                            ['weekly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Weekly')],
                            ['monthly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monthly')],
                            ['yearly', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Yearly')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'cronexprdesc',
                    disabled: true,
                    submitValue: false,
                    value: '',
                    modifiers: [
                        {
                            type: 'visible',
                            constraint: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' }
                        },
                        {
                            type: 'value',
                            typeConfig: '{% if execution == "exactly" %}' +
                                '{% set _minute = minute %}' +
                                '{% set _hour = hour %}' +
                                '{% set _dayofmonth = dayofmonth %}' +
                                '{% if everynminute %}{% set _minute %}*/{{ minute }}{% endset %}{% endif %}' +
                                '{% if everynhour %}{% set _hour %}*/{{ hour }}{% endset %}{% endif %}' +
                                '{% if everyndayofmonth %}{% set _dayofmonth %}*/{{ dayofmonth }}{% endset %}{% endif %}' +
                                '{{ [_minute, _hour, _dayofmonth, month, dayofweek] | join(" ") | cron2human }}' +
                                '{% endif %}',
                            deps: [
                                'execution',
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
                            value: ['{{ moment("H:m:ss") | split(":") | get(1) }}'],
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                                }
                            ],
                            validators: {
                                requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                pattern: {
                                    pattern: '^(\\*|(([0-9]|[1-5][0-9]),)*([0-9]|[1-5][0-9]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            },
                            multiple: true,
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
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everynminute',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N minute'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                        arg1: {
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
                                },
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
                            value: ['{{ moment("H:m:ss") | split(":") | get(0) }}'],
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                                }
                            ],
                            validators: {
                                requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                pattern: {
                                    pattern: '^(\\*|(([0-9]|1[0-9]|2[0-3]),)*([0-9]|1[0-9]|2[0-3]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            },
                            multiple: true,
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
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everynhour',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N hour'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                        arg1: {
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
                                },
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
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                                }
                            ],
                            validators: {
                                requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                pattern: {
                                    pattern: '^(\\*|(([1-9]|[12][0-9]|3[01]),)*([1-9]|[12][0-9]|3[01]))$',
                                    errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                                }
                            },
                            multiple: true,
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
                            }
                        },
                        {
                            type: 'checkbox',
                            name: 'everyndayofmonth',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Every N day of month'),
                            value: false,
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: {
                                        operator: 'or',
                                        arg0: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' },
                                        arg1: {
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
                                },
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
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                        pattern: {
                            pattern: '^(\\*|(([1-9]|1[0-2]),)*([1-9]|1[0-2]))$',
                            errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                        }
                    },
                    multiple: true,
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
                    }
                },
                {
                    type: 'select',
                    name: 'dayofweek',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Day of week'),
                    value: ['*'],
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'execution' }, arg1: 'exactly' }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'eq', arg0: { prop: 'execution' }, arg1: 'exactly' },
                        pattern: {
                            pattern: '^(\\*|([1-7],)*[1-7])$',
                            errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The field should only contain * or a comma separated list of values.')
                        }
                    },
                    multiple: true,
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
                        url: '/system/powermgmt/tasks'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/powermgmt/tasks'
                    }
                }
            ]
        };
    }
}
PowermgmtTaskFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵPowermgmtTaskFormPageComponent_BaseFactory; return function PowermgmtTaskFormPageComponent_Factory(t) { return (ɵPowermgmtTaskFormPageComponent_BaseFactory || (ɵPowermgmtTaskFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](PowermgmtTaskFormPageComponent)))(t || PowermgmtTaskFormPageComponent); }; }();
PowermgmtTaskFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PowermgmtTaskFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function PowermgmtTaskFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 49448:
/*!*******************************************************!*\
  !*** ./src/app/pages/system/system-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemRoutingModule": () => (/* binding */ SystemRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/pages/navigation-page/navigation-page.component */ 99076);
/* harmony import */ var _app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/route-config.service */ 23642);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_create_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-create-form-page.component */ 26098);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-datatable-page.component */ 12066);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_edit_form_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-edit-form-page.component */ 38021);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-import-form-page.component */ 11539);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-datatable-page.component */ 74405);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_details_text_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-details-text-page.component */ 97145);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_form_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-form-page.component */ 87672);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-import-form-page.component */ 99564);
/* harmony import */ var _app_pages_system_cron_cron_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/system/cron/cron-task-datatable-page.component */ 65989);
/* harmony import */ var _app_pages_system_cron_cron_task_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/system/cron/cron-task-form-page.component */ 35752);
/* harmony import */ var _app_pages_system_date_time_date_time_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/system/date-time/date-time-form-page.component */ 89681);
/* harmony import */ var _app_pages_system_monitoring_monitoring_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/system/monitoring/monitoring-form-page.component */ 97740);
/* harmony import */ var _app_pages_system_notification_notification_selection_list_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/pages/system/notification/notification-selection-list-page.component */ 10071);
/* harmony import */ var _app_pages_system_notification_notification_settings_form_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/pages/system/notification/notification-settings-form-page.component */ 38102);
/* harmony import */ var _app_pages_system_plugins_plugins_datatable_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/pages/system/plugins/plugins-datatable-page.component */ 17351);
/* harmony import */ var _app_pages_system_powermgmt_powermgmt_settings_form_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/pages/system/powermgmt/powermgmt-settings-form-page.component */ 91398);
/* harmony import */ var _app_pages_system_powermgmt_powermgmt_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/pages/system/powermgmt/powermgmt-task-datatable-page.component */ 80762);
/* harmony import */ var _app_pages_system_powermgmt_powermgmt_task_form_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~/app/pages/system/powermgmt/powermgmt-task-form-page.component */ 33205);
/* harmony import */ var _app_pages_system_updates_update_datatable_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~/app/pages/system/updates/update-datatable-page.component */ 8111);
/* harmony import */ var _app_pages_system_updates_update_settings_form_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ~/app/pages/system/updates/update-settings-form-page.component */ 18354);
/* harmony import */ var _app_pages_system_workbench_workbench_form_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ~/app/pages/system/workbench/workbench-form-page.component */ 89956);
/* harmony import */ var _app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ~/app/shared/services/is-dirty-guard.service */ 71885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);




























const routes = [
    {
        path: '',
        component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
    },
    {
        path: 'workbench',
        component: _app_pages_system_workbench_workbench_form_page_component__WEBPACK_IMPORTED_MODULE_23__.WorkbenchFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Workbench'),
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated workbench settings.'),
            editing: true
        }
    },
    {
        path: 'certificate',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Certificates') },
        children: [
            {
                path: '',
                component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
            },
            {
                path: 'ssl',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSL') },
                children: [
                    { path: '', component: _app_pages_system_certificates_ssl_ssl_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__.SslCertificateDatatablePageComponent },
                    {
                        path: 'create',
                        component: _app_pages_system_certificates_ssl_ssl_certificate_form_page_component__WEBPACK_IMPORTED_MODULE_9__.SslCertificateFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created SSL certificate.')
                        }
                    },
                    {
                        path: 'detail/:uuid',
                        component: _app_pages_system_certificates_ssl_ssl_certificate_details_text_page_component__WEBPACK_IMPORTED_MODULE_8__.SslCertificateDetailsTextPageComponent,
                        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Details') }
                    },
                    {
                        path: 'import',
                        component: _app_pages_system_certificates_ssl_ssl_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_10__.SslCertificateImportFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Imported SSL certificate.')
                        }
                    }
                ]
            },
            {
                path: 'ssh',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSH') },
                children: [
                    { path: '', component: _app_pages_system_certificates_ssh_ssh_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.SshCertificateDatatablePageComponent },
                    {
                        path: 'create',
                        component: _app_pages_system_certificates_ssh_ssh_certificate_create_form_page_component__WEBPACK_IMPORTED_MODULE_3__.SshCertificateCreateFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created SSH certificate.')
                        }
                    },
                    {
                        path: 'edit/:uuid',
                        component: _app_pages_system_certificates_ssh_ssh_certificate_edit_form_page_component__WEBPACK_IMPORTED_MODULE_5__.SshCertificateEditFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated SSH certificate.'),
                            editing: true
                        }
                    },
                    {
                        path: 'import',
                        component: _app_pages_system_certificates_ssh_ssh_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_6__.SshCertificateImportFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Imported SSH certificate.')
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'monitoring',
        component: _app_pages_system_monitoring_monitoring_form_page_component__WEBPACK_IMPORTED_MODULE_14__.MonitoringFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Monitoring'),
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated monitoring settings.'),
            editing: true
        }
    },
    {
        path: 'notification',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Notification') },
        children: [
            {
                path: '',
                component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
            },
            {
                path: 'settings',
                component: _app_pages_system_notification_notification_settings_form_page_component__WEBPACK_IMPORTED_MODULE_16__.NotificationSettingsFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated notification settings.'),
                    editing: true
                }
            },
            {
                path: 'events',
                component: _app_pages_system_notification_notification_selection_list_page_component__WEBPACK_IMPORTED_MODULE_15__.NotificationSelectionListPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Events'),
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated notification event settings.')
                }
            }
        ]
    },
    {
        path: 'date-time',
        component: _app_pages_system_date_time_date_time_form_page_component__WEBPACK_IMPORTED_MODULE_13__.DateTimeFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Date & Time'),
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated date & time settings.'),
            editing: true
        }
    },
    {
        path: 'powermgmt',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Power Management') },
        children: [
            {
                path: '',
                component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
            },
            {
                path: 'settings',
                component: _app_pages_system_powermgmt_powermgmt_settings_form_page_component__WEBPACK_IMPORTED_MODULE_18__.PowermgmtSettingsFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated power management settings.'),
                    editing: true
                }
            },
            {
                path: 'tasks',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduled Tasks') },
                children: [
                    { path: '', component: _app_pages_system_powermgmt_powermgmt_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_19__.PowermgmtTaskDatatablePageComponent },
                    {
                        path: 'create',
                        component: _app_pages_system_powermgmt_powermgmt_task_form_page_component__WEBPACK_IMPORTED_MODULE_20__.PowermgmtTaskFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created scheduled task.'),
                            editing: false
                        }
                    },
                    {
                        path: 'edit/:uuid',
                        component: _app_pages_system_powermgmt_powermgmt_task_form_page_component__WEBPACK_IMPORTED_MODULE_20__.PowermgmtTaskFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated scheduled task.'),
                            editing: true
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'cron',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Scheduled Tasks') },
        children: [
            { path: '', component: _app_pages_system_cron_cron_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_11__.CronTaskDatatablePageComponent },
            {
                path: 'create',
                component: _app_pages_system_cron_cron_task_form_page_component__WEBPACK_IMPORTED_MODULE_12__.CronTaskFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created scheduled task.')
                }
            },
            {
                path: 'edit/:uuid',
                component: _app_pages_system_cron_cron_task_form_page_component__WEBPACK_IMPORTED_MODULE_12__.CronTaskFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated scheduled task.')
                }
            }
        ]
    },
    {
        path: 'updatemgmt',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Update Management') },
        children: [
            {
                path: '',
                component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
            },
            {
                path: 'updates',
                component: _app_pages_system_updates_update_datatable_page_component__WEBPACK_IMPORTED_MODULE_21__.UpdateDatatablePageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updates') }
            },
            {
                path: 'settings',
                component: _app_pages_system_updates_update_settings_form_page_component__WEBPACK_IMPORTED_MODULE_22__.UpdateSettingsFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_24__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated update management settings.'),
                    editing: true
                }
            }
        ]
    },
    {
        path: 'plugins',
        component: _app_pages_system_plugins_plugins_datatable_page_component__WEBPACK_IMPORTED_MODULE_17__.PluginsDatatablePageComponent,
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Plugins') }
    }
];
class SystemRoutingModule {
}
SystemRoutingModule.ɵfac = function SystemRoutingModule_Factory(t) { return new (t || SystemRoutingModule)(); };
SystemRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: SystemRoutingModule });
SystemRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_26__.ROUTES,
            multi: true,
            useFactory: (routeConfigService) => {
                routeConfigService.inject('system', routes);
                return routes;
            },
            deps: [_app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__.RouteConfigService]
        }
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](SystemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule] }); })();


/***/ }),

/***/ 46330:
/*!***********************************************!*\
  !*** ./src/app/pages/system/system.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemModule": () => (/* binding */ SystemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngneat/transloco */ 40668);
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/core.module */ 40294);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/material.module */ 63806);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_create_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-create-form-page.component */ 26098);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-datatable-page.component */ 12066);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_edit_form_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-edit-form-page.component */ 38021);
/* harmony import */ var _app_pages_system_certificates_ssh_ssh_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssh/ssh-certificate-import-form-page.component */ 11539);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-datatable-page.component */ 74405);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_details_text_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-details-text-page.component */ 97145);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-form-page.component */ 87672);
/* harmony import */ var _app_pages_system_certificates_ssl_ssl_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/system/certificates/ssl/ssl-certificate-import-form-page.component */ 99564);
/* harmony import */ var _app_pages_system_cron_cron_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/system/cron/cron-task-datatable-page.component */ 65989);
/* harmony import */ var _app_pages_system_cron_cron_task_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/system/cron/cron-task-form-page.component */ 35752);
/* harmony import */ var _app_pages_system_date_time_date_time_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/system/date-time/date-time-form-page.component */ 89681);
/* harmony import */ var _app_pages_system_monitoring_monitoring_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/system/monitoring/monitoring-form-page.component */ 97740);
/* harmony import */ var _app_pages_system_notification_notification_selection_list_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/system/notification/notification-selection-list-page.component */ 10071);
/* harmony import */ var _app_pages_system_notification_notification_settings_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/pages/system/notification/notification-settings-form-page.component */ 38102);
/* harmony import */ var _app_pages_system_plugins_plugins_datatable_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/pages/system/plugins/plugins-datatable-page.component */ 17351);
/* harmony import */ var _app_pages_system_powermgmt_powermgmt_settings_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/pages/system/powermgmt/powermgmt-settings-form-page.component */ 91398);
/* harmony import */ var _app_pages_system_powermgmt_powermgmt_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/pages/system/powermgmt/powermgmt-task-datatable-page.component */ 80762);
/* harmony import */ var _app_pages_system_powermgmt_powermgmt_task_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/pages/system/powermgmt/powermgmt-task-form-page.component */ 33205);
/* harmony import */ var _app_pages_system_system_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~/app/pages/system/system-routing.module */ 49448);
/* harmony import */ var _app_pages_system_updates_update_datatable_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~/app/pages/system/updates/update-datatable-page.component */ 8111);
/* harmony import */ var _app_pages_system_updates_update_settings_form_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ~/app/pages/system/updates/update-settings-form-page.component */ 18354);
/* harmony import */ var _app_pages_system_workbench_workbench_form_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ~/app/pages/system/workbench/workbench-form-page.component */ 89956);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);




























class SystemModule {
}
SystemModule.ɵfac = function SystemModule_Factory(t) { return new (t || SystemModule)(); };
SystemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: SystemModule });
SystemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
        _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_24__.SharedModule,
        _app_pages_system_system_routing_module__WEBPACK_IMPORTED_MODULE_20__.SystemRoutingModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_27__.TranslocoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](SystemModule, { declarations: [_app_pages_system_workbench_workbench_form_page_component__WEBPACK_IMPORTED_MODULE_23__.WorkbenchFormPageComponent,
        _app_pages_system_certificates_ssh_ssh_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__.SshCertificateDatatablePageComponent,
        _app_pages_system_certificates_ssl_ssl_certificate_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__.SslCertificateDatatablePageComponent,
        _app_pages_system_monitoring_monitoring_form_page_component__WEBPACK_IMPORTED_MODULE_13__.MonitoringFormPageComponent,
        _app_pages_system_date_time_date_time_form_page_component__WEBPACK_IMPORTED_MODULE_12__.DateTimeFormPageComponent,
        _app_pages_system_certificates_ssl_ssl_certificate_form_page_component__WEBPACK_IMPORTED_MODULE_8__.SslCertificateFormPageComponent,
        _app_pages_system_certificates_ssl_ssl_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_9__.SslCertificateImportFormPageComponent,
        _app_pages_system_certificates_ssl_ssl_certificate_details_text_page_component__WEBPACK_IMPORTED_MODULE_7__.SslCertificateDetailsTextPageComponent,
        _app_pages_system_certificates_ssh_ssh_certificate_create_form_page_component__WEBPACK_IMPORTED_MODULE_2__.SshCertificateCreateFormPageComponent,
        _app_pages_system_certificates_ssh_ssh_certificate_edit_form_page_component__WEBPACK_IMPORTED_MODULE_4__.SshCertificateEditFormPageComponent,
        _app_pages_system_certificates_ssh_ssh_certificate_import_form_page_component__WEBPACK_IMPORTED_MODULE_5__.SshCertificateImportFormPageComponent,
        _app_pages_system_notification_notification_settings_form_page_component__WEBPACK_IMPORTED_MODULE_15__.NotificationSettingsFormPageComponent,
        _app_pages_system_notification_notification_selection_list_page_component__WEBPACK_IMPORTED_MODULE_14__.NotificationSelectionListPageComponent,
        _app_pages_system_updates_update_datatable_page_component__WEBPACK_IMPORTED_MODULE_21__.UpdateDatatablePageComponent,
        _app_pages_system_plugins_plugins_datatable_page_component__WEBPACK_IMPORTED_MODULE_16__.PluginsDatatablePageComponent,
        _app_pages_system_updates_update_settings_form_page_component__WEBPACK_IMPORTED_MODULE_22__.UpdateSettingsFormPageComponent,
        _app_pages_system_powermgmt_powermgmt_settings_form_page_component__WEBPACK_IMPORTED_MODULE_17__.PowermgmtSettingsFormPageComponent,
        _app_pages_system_powermgmt_powermgmt_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_18__.PowermgmtTaskDatatablePageComponent,
        _app_pages_system_powermgmt_powermgmt_task_form_page_component__WEBPACK_IMPORTED_MODULE_19__.PowermgmtTaskFormPageComponent,
        _app_pages_system_cron_cron_task_datatable_page_component__WEBPACK_IMPORTED_MODULE_10__.CronTaskDatatablePageComponent,
        _app_pages_system_cron_cron_task_form_page_component__WEBPACK_IMPORTED_MODULE_11__.CronTaskFormPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule,
        _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_24__.SharedModule,
        _app_pages_system_system_routing_module__WEBPACK_IMPORTED_MODULE_20__.SystemRoutingModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_27__.TranslocoModule] }); })();


/***/ }),

/***/ 8111:
/*!*************************************************************************!*\
  !*** ./src/app/pages/system/updates/update-datatable-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDatatablePageComponent": () => (/* binding */ UpdateDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class UpdateDatatablePageComponent {
    constructor() {
        this.config = {
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Package Information'),
                    prop: '',
                    flexGrow: 1,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '<div>' +
                        '  <div class="omv-display-flex omv-flex-column">' +
                        '    <div class="omv-font-weight-title omv-font-size-title">{{ name }} {{ version }}</div>' +
                        '    <div class="omv-font-size-subheading-2">{{ summary }}</div>' +
                        '  </div>' +
                        '  <br>' +
                        '{% if extendeddescription %}  <span>{{ extendeddescription }}</span><br><br>{% endif %}' +
                        '{% if maintainer %}  <span>{{ "Maintainer" | translate }}: {{ maintainer }}</span><br>{% endif %}' +
                        // eslint-disable-next-line max-len
                        '{% if homepage %}  <span>{{ "Homepage" | translate }}: <a href="{{ homepage }}">{{ homepage }}</a></span><br>{% endif %}' +
                        '{% if repository %}  <span>{{ "Repository" | translate }}: {{ repository }}</span><br>{% endif %}' +
                        '{% if size %}  <span>{{ "Size" | translate }}: {{ size | binaryunit }}</span><br>{% endif %}' +
                        '</div>'
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'), prop: 'name', flexGrow: 1, sortable: true, hidden: true },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Version'), prop: 'version', flexGrow: 1, sortable: true, hidden: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Repository'),
                    prop: 'repository',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Abstract'), prop: 'abstract', flexGrow: 1, sortable: true, hidden: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Description'),
                    prop: 'extendeddescription',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Size'),
                    prop: 'size',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'binaryUnit'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Maintainer'),
                    prop: 'maintainer',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Homepage'), prop: 'homepage', flexGrow: 1, sortable: true, hidden: true }
            ],
            selectionType: 'single',
            limit: 0,
            sorters: [
                {
                    dir: 'asc',
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'Apt',
                    get: {
                        method: 'enumerateUpgraded'
                    }
                }
            },
            stateId: '6b78ea5a-1fda-11ea-a62d-23f52be9bf23',
            actions: [
                {
                    type: 'iconButton',
                    icon: 'search',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Check for new updates'),
                    execute: {
                        type: 'request',
                        request: {
                            service: 'Apt',
                            method: 'update',
                            task: true,
                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The repository will be checked for new, removed or upgraded software packages.')
                        }
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:download',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Install updates'),
                    hasBadge: 'numDataItems',
                    enabledConstraints: {
                        hasData: true
                    },
                    confirmationDialogConfig: {
                        template: 'confirmation-critical',
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('All packages will be upgraded. Do you want to proceed?')
                    },
                    execute: {
                        type: 'taskDialog',
                        taskDialog: {
                            config: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Upgrade system'),
                                startOnInit: true,
                                buttons: {
                                    start: {
                                        hidden: true
                                    },
                                    stop: {
                                        hidden: true
                                    },
                                    close: {
                                        dialogResult: true
                                    }
                                },
                                request: {
                                    service: 'Apt',
                                    method: 'upgrade'
                                }
                            },
                            successUrl: '/reload'
                        }
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'details',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Show changelog'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'taskDialog',
                        taskDialog: {
                            config: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Changelog'),
                                autoScroll: false,
                                startOnInit: true,
                                showCompletion: false,
                                buttons: {
                                    start: {
                                        hidden: true
                                    },
                                    stop: {
                                        hidden: true
                                    }
                                },
                                request: {
                                    service: 'Apt',
                                    method: 'getChangeLog',
                                    params: {
                                        filename: '{{ _selected[0].filename }}'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };
    }
}
UpdateDatatablePageComponent.ɵfac = function UpdateDatatablePageComponent_Factory(t) { return new (t || UpdateDatatablePageComponent)(); };
UpdateDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UpdateDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 18354:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/system/updates/update-settings-form-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSettingsFormPageComponent": () => (/* binding */ UpdateSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class UpdateSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Apt',
                get: {
                    method: 'getSettings',
                    params: {}
                },
                post: {
                    method: 'setSettings',
                    params: {}
                }
            },
            fields: [
                {
                    type: 'paragraph',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Install updates from')
                },
                {
                    type: 'checkbox',
                    name: 'proposed',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Pre-release updates'),
                    value: false
                },
                {
                    type: 'checkbox',
                    name: 'partner',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Community-maintained updates'),
                    value: false
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    confirmationDialogConfig: {
                        template: 'confirmation',
                        message: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The information about available software is out-of-date. Do you want to reload this information?')
                    },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'Apt',
                            method: 'update',
                            task: true,
                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The repository will be checked for new, removed or upgraded software packages.'),
                            successUrl: '/system/updatemgmt/updates'
                        }
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/system/updatemgmt'
                    }
                }
            ]
        };
    }
}
UpdateSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵUpdateSettingsFormPageComponent_BaseFactory; return function UpdateSettingsFormPageComponent_Factory(t) { return (ɵUpdateSettingsFormPageComponent_BaseFactory || (ɵUpdateSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UpdateSettingsFormPageComponent)))(t || UpdateSettingsFormPageComponent); }; }();
UpdateSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UpdateSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 89956:
/*!*************************************************************************!*\
  !*** ./src/app/pages/system/workbench/workbench-form-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkbenchFormPageComponent": () => (/* binding */ WorkbenchFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class WorkbenchFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'WebGui',
                get: {
                    method: 'getSettings',
                    params: {}
                },
                post: {
                    method: 'setSettings',
                    params: {}
                }
            },
            fields: [
                {
                    type: 'numberInput',
                    name: 'port',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 80,
                    validators: {
                        min: 0,
                        max: 65535,
                        required: true,
                        patternType: 'port'
                    }
                },
                {
                    type: 'select',
                    name: 'timeout',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Auto logout'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Close the session on inactivity after the specified time.'),
                    value: 5,
                    store: {
                        data: [
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled'),
                                value: 0
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 minute'),
                                value: 1
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('2 minutes'),
                                value: 2
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('3 minutes'),
                                value: 3
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('4 minutes'),
                                value: 4
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('5 minutes'),
                                value: 5
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('10 minutes'),
                                value: 10
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('15 minutes'),
                                value: 15
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('30 minutes'),
                                value: 30
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('60 minutes'),
                                value: 60
                            },
                            {
                                text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('1 day'),
                                value: 1440
                            }
                        ]
                    }
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Secure connection')
                },
                {
                    type: 'checkbox',
                    name: 'enablessl',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSL/TLS enabled'),
                    value: false
                },
                {
                    type: 'sslCertSelect',
                    name: 'sslcertificateref',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Certificate'),
                    hasEmptyOption: true,
                    value: '',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'enablessl' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'enablessl' } }
                    }
                },
                {
                    type: 'numberInput',
                    name: 'sslport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 443,
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'enablessl' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'enablessl' } },
                        min: 0,
                        max: 65535,
                        patternType: 'port'
                    }
                },
                {
                    type: 'checkbox',
                    name: 'forcesslonly',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Force SSL/TLS'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Force secure connection only.'),
                    value: false,
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'enablessl' } }
                        }
                    ]
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
                        url: '/system'
                    }
                }
            ]
        };
    }
}
WorkbenchFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵWorkbenchFormPageComponent_BaseFactory; return function WorkbenchFormPageComponent_Factory(t) { return (ɵWorkbenchFormPageComponent_BaseFactory || (ɵWorkbenchFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](WorkbenchFormPageComponent)))(t || WorkbenchFormPageComponent); }; }();
WorkbenchFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WorkbenchFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function WorkbenchFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_system_system_module_ts.js.map