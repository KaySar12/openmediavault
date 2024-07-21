"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["src_app_pages_network_network_module_ts"],{

/***/ 17068:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/network/firewall/rules/firewall-rule-form-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirewallRuleFormPageComponent": () => (/* binding */ FirewallRuleFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class FirewallRuleFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Iptables',
                get: {
                    method: 'getRule',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setRule'
                }
            },
            fields: [
                /* eslint-disable max-len */
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'hidden',
                    name: 'rulenum',
                    value: -1
                },
                {
                    type: 'select',
                    name: 'family',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Family'),
                    disabled: true,
                    value: '{{ _routeParams.family }}',
                    store: {
                        data: [
                            ['inet', 'IPv4'],
                            ['inet6', 'IPv6']
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'chain',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Direction'),
                    value: 'INPUT',
                    store: {
                        data: [
                            ['INPUT', 'INPUT'],
                            ['OUTPUT', 'OUTPUT']
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'action',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Action'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This specifies what to do if the packet matches.'),
                    value: 'REJECT',
                    store: {
                        data: [
                            ['ACCEPT', 'ACCEPT'],
                            ['REJECT', 'REJECT'],
                            ['DROP', 'DROP'],
                            ['LOG', 'LOG'],
                            ['', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Nothing')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'source',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source address can be either a network IP address (with /mask), a IP range or a plain IP address. A "!" argument before the address specification inverts the sense of the address.'),
                    value: ''
                },
                {
                    type: 'textInput',
                    name: 'sport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source port'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Match if the source port is one of the given ports, e.g. 21 or !443 or 1024-65535.'),
                    value: '',
                    validators: {
                        custom: [
                            {
                                constraint: {
                                    operator: 'if',
                                    arg0: {
                                        operator: 'notEmpty',
                                        arg0: { prop: 'sport' }
                                    },
                                    arg1: {
                                        operator: 'regex',
                                        arg0: {
                                            prop: 'sport'
                                        },
                                        arg1: '^!?(([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])([-:]([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])){0,1})$'
                                    }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This field should be a port or port range (e.g. 21 or !443 or 1024-65535).')
                            }
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'destination',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination address can be either a network IP address (with /mask), a IP range or a plain IP address. A "!" argument before the address specification inverts the sense of the address.'),
                    value: ''
                },
                {
                    type: 'textInput',
                    name: 'dport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination port'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Match if the destination port is one of the given ports, e.g. 21 or !443 or 1024-65535.'),
                    value: '',
                    validators: {
                        custom: [
                            {
                                constraint: {
                                    operator: 'if',
                                    arg0: {
                                        operator: 'notEmpty',
                                        arg0: { prop: 'dport' }
                                    },
                                    arg1: {
                                        operator: 'regex',
                                        arg0: {
                                            prop: 'dport'
                                        },
                                        arg1: '^!?(([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])([-:]([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])){0,1})$'
                                    }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('This field should be a port or port range (e.g. 21 or !443 or 1024-65535).')
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'protocol',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Protocol'),
                    value: 'tcp',
                    store: {
                        data: [
                            ['tcp', 'TCP'],
                            ['udp', 'UDP'],
                            ['icmp', 'ICMP'],
                            ['icmpv6', 'ICMPv6'],
                            ['all', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('All')],
                            ['!tcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not TCP')],
                            ['!udp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not UDP')],
                            ['!icmp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not ICMP')],
                            ['!icmpv6', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not ICMPv6')]
                        ]
                    },
                    validators: {
                        custom: [
                            // The protocol 'All' is not supported in conjunction with
                            // the source/destination port option.
                            {
                                constraint: {
                                    operator: 'if',
                                    arg0: {
                                        operator: 'or',
                                        arg0: {
                                            operator: 'notEmpty',
                                            arg0: { prop: 'sport' }
                                        },
                                        arg1: {
                                            operator: 'notEmpty',
                                            arg0: { prop: 'dport' }
                                        }
                                    },
                                    arg1: {
                                        operator: 'ne',
                                        arg0: { prop: 'protocol' },
                                        arg1: 'all'
                                    }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The protocol is not supported in conjunction with a source/destination port.')
                            }
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'extraoptions',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
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
                        url: '/network/firewall/rules/{{ _routeParams.family }}'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/network/firewall/rules/{{ _routeParams.family }}'
                    }
                }
            ]
        };
    }
}
FirewallRuleFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵFirewallRuleFormPageComponent_BaseFactory; return function FirewallRuleFormPageComponent_Factory(t) { return (ɵFirewallRuleFormPageComponent_BaseFactory || (ɵFirewallRuleFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FirewallRuleFormPageComponent)))(t || FirewallRuleFormPageComponent); }; }();
FirewallRuleFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FirewallRuleFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FirewallRuleFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 48848:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/network/firewall/rules/firewall-rule-inet-datatable-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirewallRuleInetDatatablePageComponent": () => (/* binding */ FirewallRuleInetDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/rpc.service */ 24358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);










class FirewallRuleInetDatatablePageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_2__.BaseDatatablePageComponent {
    constructor(rpcService, notificationService) {
        super();
        this.rpcService = rpcService;
        this.notificationService = notificationService;
        this.config = {
            stateId: '9cee722c-7c04-11ea-a3e8-37671db9f618',
            autoReload: false,
            limit: 0,
            remoteSorting: false,
            remotePaging: false,
            hasSearchField: false,
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Direction'),
                    prop: 'chain',
                    flexGrow: 1,
                    sortable: false,
                    cellTemplateName: 'chip'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Action'),
                    prop: 'action',
                    flexGrow: 1,
                    sortable: false,
                    cellTemplateName: 'chip'
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source'), prop: 'source', flexGrow: 1, sortable: false },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'), prop: 'sport', flexGrow: 1, sortable: false },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination'), prop: 'destination', flexGrow: 1, sortable: false },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'), prop: 'dport', flexGrow: 1, sortable: false },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Protocol'),
                    prop: 'protocol',
                    flexGrow: 1,
                    sortable: false,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            /* eslint-disable @typescript-eslint/naming-convention */
                            tcp: { value: 'TCP' },
                            udp: { value: 'UDP' },
                            icmp: { value: 'ICMP' },
                            icmpv6: { value: 'ICMPv6' },
                            all: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('All') },
                            '!tcp': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not TCP') },
                            '!udp': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not UDP') },
                            '!icmp': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not ICMP') },
                            '!icmpv6': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not ICMPv6') }
                            /* eslint-enable @typescript-eslint/naming-convention */
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    prop: 'extraoptions',
                    cellTemplateName: 'text',
                    flexGrow: 1,
                    sortable: false
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
                    prop: 'rulenum'
                }
            ],
            store: {
                proxy: {
                    service: 'Iptables',
                    get: {
                        method: 'getRules',
                        params: {
                            type: ['userdefined']
                        }
                    }
                }
            },
            actions: [
                {
                    type: 'iconButton',
                    icon: 'save',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Save'),
                    click: this.onSave.bind(this),
                    enabledConstraints: {
                        callback: () => this.dirty
                    }
                },
                {
                    type: 'divider'
                },
                {
                    template: 'add',
                    execute: {
                        type: 'url',
                        url: '/network/firewall/rules/inet/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/network/firewall/rules/inet/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'arrowUp',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Up'),
                    click: this.onUp.bind(this),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'arrowDown',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Down'),
                    click: this.onDown.bind(this),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'Iptables',
                            method: 'deleteRule',
                            params: {
                                uuid: '{{ uuid }}'
                            }
                        }
                    }
                }
            ]
        };
    }
    onSave(action, table) {
        this.rpcService.request('Iptables', 'setRules', table.data).subscribe(() => {
            this.dirty = false;
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__.NotificationType.success, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated firewall rules.'));
        });
    }
    onUp(action, table) {
        const selected = table.selection.first();
        const index = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(table.data, selected);
        if (index <= 0) {
            return;
        }
        // Create a working copy.
        const modifiedData = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(table.data);
        // Relocate rule.
        lodash__WEBPACK_IMPORTED_MODULE_1__.pullAt(modifiedData, index);
        modifiedData.splice(index - 1, 0, selected);
        this.updateRuleNumbers(modifiedData);
        // Update the table data and redraw table content.
        table.updateData(modifiedData);
        // Mark the data as dirty.
        this.dirty = true;
    }
    onDown(action, table) {
        const selected = table.selection.first();
        const index = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(table.data, selected);
        if (index + 1 >= table.data.length) {
            return;
        }
        // Create a working copy.
        const modifiedData = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(table.data);
        // Relocate rule.
        lodash__WEBPACK_IMPORTED_MODULE_1__.pullAt(modifiedData, index);
        modifiedData.splice(index + 1, 0, selected);
        this.updateRuleNumbers(modifiedData);
        // Update the table data and redraw table content.
        table.updateData(modifiedData);
        // Mark the data as dirty.
        this.dirty = true;
    }
    updateRuleNumbers(rules) {
        lodash__WEBPACK_IMPORTED_MODULE_1__.forEach(rules, (value, key) => {
            lodash__WEBPACK_IMPORTED_MODULE_1__.set(value, 'rulenum', key);
        });
    }
}
FirewallRuleInetDatatablePageComponent.ɵfac = function FirewallRuleInetDatatablePageComponent_Factory(t) { return new (t || FirewallRuleInetDatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_5__.RpcService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService)); };
FirewallRuleInetDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FirewallRuleInetDatatablePageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FirewallRuleInetDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 15220:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/network/firewall/rules/firewall-rule-inet6-datatable-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirewallRuleInet6DatatablePageComponent": () => (/* binding */ FirewallRuleInet6DatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/rpc.service */ 24358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);










class FirewallRuleInet6DatatablePageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_2__.BaseDatatablePageComponent {
    constructor(rpcService, notificationService) {
        super();
        this.rpcService = rpcService;
        this.notificationService = notificationService;
        this.config = {
            stateId: 'da278886-7c09-11ea-a477-a7d7e6d13d1d',
            autoReload: false,
            limit: 0,
            remoteSorting: false,
            remotePaging: false,
            hasSearchField: false,
            columns: [
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Direction'),
                    prop: 'chain',
                    flexGrow: 1,
                    sortable: false,
                    cellTemplateName: 'chip'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Action'),
                    prop: 'action',
                    flexGrow: 1,
                    sortable: false,
                    cellTemplateName: 'chip'
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Source'), prop: 'source', flexGrow: 1, sortable: false },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'), prop: 'sport', flexGrow: 1, sortable: false },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Destination'), prop: 'destination', flexGrow: 1, sortable: false },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'), prop: 'dport', flexGrow: 1, sortable: false },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Protocol'),
                    prop: 'protocol',
                    flexGrow: 1,
                    sortable: false,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            /* eslint-disable @typescript-eslint/naming-convention */
                            tcp: { value: 'TCP' },
                            udp: { value: 'UDP' },
                            icmp: { value: 'ICMP' },
                            icmpv6: { value: 'ICMPv6' },
                            all: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('All') },
                            '!tcp': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not TCP') },
                            '!udp': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not UDP') },
                            '!icmp': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not ICMP') },
                            '!icmpv6': { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Not ICMPv6') }
                            /* eslint-enable @typescript-eslint/naming-convention */
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Extra options'),
                    prop: 'extraoptions',
                    cellTemplateName: 'text',
                    flexGrow: 1,
                    sortable: false
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
                    prop: 'rulenum'
                }
            ],
            store: {
                proxy: {
                    service: 'Iptables',
                    get: {
                        method: 'getRules6',
                        params: {
                            type: ['userdefined']
                        }
                    }
                }
            },
            actions: [
                {
                    type: 'iconButton',
                    icon: 'save',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Save'),
                    click: this.onSave.bind(this),
                    enabledConstraints: {
                        callback: () => this.dirty
                    }
                },
                {
                    type: 'divider'
                },
                {
                    template: 'add',
                    execute: {
                        type: 'url',
                        url: '/network/firewall/rules/inet6/create'
                    }
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/network/firewall/rules/inet6/edit/{{ _selected[0].uuid }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'arrowUp',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Up'),
                    click: this.onUp.bind(this),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'arrowDown',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Down'),
                    click: this.onDown.bind(this),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'Iptables',
                            method: 'deleteRule',
                            params: {
                                uuid: '{{ uuid }}'
                            }
                        }
                    }
                }
            ]
        };
    }
    onSave(action, table) {
        this.rpcService.request('Iptables', 'setRules6', table.data).subscribe(() => {
            this.dirty = false;
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__.NotificationType.success, (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated firewall rules.'));
        });
    }
    onUp(action, table) {
        const selected = table.selection.first();
        const index = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(table.data, selected);
        if (index <= 0) {
            return;
        }
        // Create a working copy.
        const modifiedData = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(table.data);
        // Relocate rule.
        lodash__WEBPACK_IMPORTED_MODULE_1__.pullAt(modifiedData, index);
        modifiedData.splice(index - 1, 0, selected);
        this.updateRuleNumbers(modifiedData);
        // Update the table data and redraw table content.
        table.updateData(modifiedData);
        // Mark the data as dirty.
        this.dirty = true;
    }
    onDown(action, table) {
        const selected = table.selection.first();
        const index = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(table.data, selected);
        if (index + 1 >= table.data.length) {
            return;
        }
        // Create a working copy.
        const modifiedData = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(table.data);
        // Relocate rule.
        lodash__WEBPACK_IMPORTED_MODULE_1__.pullAt(modifiedData, index);
        modifiedData.splice(index + 1, 0, selected);
        this.updateRuleNumbers(modifiedData);
        // Update the table data and redraw table content.
        table.updateData(modifiedData);
        // Mark the data as dirty.
        this.dirty = true;
    }
    updateRuleNumbers(rules) {
        lodash__WEBPACK_IMPORTED_MODULE_1__.forEach(rules, (value, key) => {
            lodash__WEBPACK_IMPORTED_MODULE_1__.set(value, 'rulenum', key);
        });
    }
}
FirewallRuleInet6DatatablePageComponent.ɵfac = function FirewallRuleInet6DatatablePageComponent_Factory(t) { return new (t || FirewallRuleInet6DatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_5__.RpcService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService)); };
FirewallRuleInet6DatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FirewallRuleInet6DatatablePageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FirewallRuleInet6DatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 60849:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/network/firewall/rules/firewall-rule-tabs-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirewallRuleTabsPageComponent": () => (/* binding */ FirewallRuleTabsPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/tabs-page/tabs-page.component */ 84696);



class FirewallRuleTabsPageComponent {
    constructor() {
        this.config = {
            singleRoute: false,
            tabs: [
                {
                    url: '/network/firewall/rules/inet',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv4')
                },
                {
                    url: '/network/firewall/rules/inet6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv6')
                }
            ]
        };
    }
}
FirewallRuleTabsPageComponent.ɵfac = function FirewallRuleTabsPageComponent_Factory(t) { return new (t || FirewallRuleTabsPageComponent)(); };
FirewallRuleTabsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FirewallRuleTabsPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function FirewallRuleTabsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-tabs-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_1__.TabsPageComponent], encapsulation: 2 });


/***/ }),

/***/ 3261:
/*!******************************************************************************!*\
  !*** ./src/app/pages/network/general/general-network-form-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralNetworkFormPageComponent": () => (/* binding */ GeneralNetworkFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class GeneralNetworkFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getGeneralSettings',
                    params: {}
                },
                post: {
                    method: 'setGeneralSettings',
                    params: {}
                }
            },
            fields: [
                {
                    type: 'textInput',
                    name: 'hostname',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hostname'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The hostname is a label that identifies the system to the network.'),
                    value: '',
                    validators: {
                        patternType: 'hostName',
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'domainname',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Domain name'),
                    value: '',
                    validators: {
                        patternType: 'domainName'
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
                        url: '/network'
                    }
                }
            ]
        };
    }
}
GeneralNetworkFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵGeneralNetworkFormPageComponent_BaseFactory; return function GeneralNetworkFormPageComponent_Factory(t) { return (ɵGeneralNetworkFormPageComponent_BaseFactory || (ɵGeneralNetworkFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](GeneralNetworkFormPageComponent)))(t || GeneralNetworkFormPageComponent); }; }();
GeneralNetworkFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GeneralNetworkFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function GeneralNetworkFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 79547:
/*!********************************************************************************!*\
  !*** ./src/app/pages/network/interfaces/interface-bond-form-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterfaceBondFormPageComponent": () => (/* binding */ InterfaceBondFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class InterfaceBondFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getBondIface',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setBondIface',
                    params: {
                        wol: false
                    }
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    disabled: true,
                    submitValue: false,
                    value: 'bond',
                    store: {
                        data: [
                            ['ethernet', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet')],
                            ['bond', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond')],
                            ['vlan', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN')],
                            ['wifi', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi')],
                            ['bridge', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'devicename',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    value: '',
                    disabled: true,
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: { operator: 'falsy', arg0: { prop: '_editing' } }
                        }
                    ]
                },
                {
                    type: 'select',
                    name: 'slaves',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Slaves'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select slave devices ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies the slave devices.'),
                    multiple: true,
                    valueField: 'devicename',
                    textField: 'description',
                    value: [],
                    store: {
                        proxy: {
                            service: 'Network',
                            get: {
                                method: 'enumerateBondSlaves',
                                params: {
                                    uuid: '{{ _routeParams.uuid | default(newconfobjuuid) }}',
                                    unused: true
                                }
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'devicename'
                            }
                        ]
                    },
                    validators: {
                        required: true,
                        custom: [
                            {
                                constraint: {
                                    operator: '>=',
                                    arg0: {
                                        operator: 'length',
                                        arg0: { prop: 'slaves' }
                                    },
                                    arg1: 1
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('At least one network interface is required.')
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'bondmode',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Mode'),
                    value: 1,
                    store: {
                        data: [
                            [0, 'balance-rr'],
                            [1, 'active-backup'],
                            [2, 'balance-xor'],
                            [3, 'broadcast'],
                            [4, '802.3ad'],
                            [5, 'balance-tlb'],
                            [6, 'balance-alb']
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'bondtransmithashpolicy',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Transmit Hash Policy'),
                    value: 'layer2',
                    store: {
                        data: [
                            ['layer2', 'layer2'],
                            ['layer2+3', 'layer2+3'],
                            ['layer3+4', 'layer3+4'],
                            ['encap2+3', 'encap2+3'],
                            ['encap3+4', 'encap3+4']
                        ]
                    },
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: {
                                operator: 'in',
                                arg0: { prop: 'bondmode' },
                                arg1: [2, 4, 5]
                            }
                        }
                    ]
                },
                {
                    type: 'textInput',
                    name: 'bondprimary',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Primary'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies which slave is the primary device.'),
                    value: '',
                    modifiers: [
                        {
                            type: 'value',
                            typeConfig: '{{ slaves | get(0) }}',
                            constraint: {
                                operator: 'and',
                                arg0: {
                                    operator: 'in',
                                    arg0: { prop: 'bondmode' },
                                    arg1: [1, 5, 6]
                                },
                                arg1: {
                                    operator: 'and',
                                    arg0: { operator: 'notEmpty', arg0: { prop: 'slaves' } },
                                    arg1: { operator: 'empty', arg0: { prop: 'bondprimary' } }
                                }
                            }
                        },
                        {
                            type: 'value',
                            typeConfig: '',
                            constraint: {
                                operator: 'not',
                                arg0: {
                                    operator: 'in',
                                    arg0: { prop: 'bondmode' },
                                    arg1: [1, 5, 6]
                                }
                            }
                        },
                        {
                            type: 'enabled',
                            constraint: {
                                operator: 'in',
                                arg0: { prop: 'bondmode' },
                                arg1: [1, 5, 6]
                            }
                        }
                    ],
                    validators: {
                        requiredIf: {
                            operator: 'in',
                            arg0: { prop: 'bondmode' },
                            arg1: [1, 5, 6]
                        },
                        custom: [
                            {
                                constraint: {
                                    operator: 'if',
                                    arg0: {
                                        operator: 'and',
                                        arg0: { operator: 'notEmpty', arg0: { prop: 'slaves' } },
                                        arg1: {
                                            operator: 'in',
                                            arg0: { prop: 'bondmode' },
                                            arg1: [1, 5, 6]
                                        }
                                    },
                                    arg1: {
                                        operator: 'and',
                                        arg0: { operator: 'notEmpty', arg0: { prop: 'bondprimary' } },
                                        arg1: {
                                            operator: 'in',
                                            arg0: { prop: 'bondprimary' },
                                            arg1: { prop: 'slaves' }
                                        }
                                    }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The value must be on of the slave network interfaces {{ slaves | join(", ") }}.')
                            },
                            {
                                constraint: {
                                    operator: 'if',
                                    arg0: {
                                        operator: 'and',
                                        arg0: { operator: 'empty', arg0: { prop: 'slaves' } },
                                        arg1: {
                                            operator: 'in',
                                            arg0: { prop: 'bondmode' },
                                            arg1: [1, 5, 6]
                                        }
                                    },
                                    arg1: {
                                        operator: 'in',
                                        arg0: { prop: 'bondprimary' },
                                        arg1: { prop: 'slaves' }
                                    }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The value must be on of the slave network interfaces.')
                            }
                        ]
                    }
                },
                {
                    type: 'numberInput',
                    name: 'bondmiimon',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MII monitoring frequency'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies the MII link monitoring frequency in milliseconds.'),
                    value: 100,
                    validators: {
                        min: 0,
                        patternType: 'integer'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'bonddowndelay',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Down delay'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies the time, in milliseconds, to wait before disabling a slave after a link failure has been detected.'),
                    value: 200,
                    validators: {
                        min: 0,
                        patternType: 'integer'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'bondupdelay',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Up delay'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies the time, in milliseconds, to wait before enabling a slave after a link recovery has been detected.'),
                    value: 200,
                    validators: {
                        min: 0,
                        patternType: 'integer'
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv4')
                },
                {
                    type: 'select',
                    name: 'method',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv4',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'textInput',
                    name: 'netmask',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netmask'),
                    value: '',
                    validators: {
                        patternType: 'netmask',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv4'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 0,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv6')
                },
                {
                    type: 'select',
                    name: 'method6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['auto', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Auto')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv6',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'numberInput',
                    name: 'netmask6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix length'),
                    value: 64,
                    validators: {
                        min: 0,
                        max: 128,
                        patternType: 'integer',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv6'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 1,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced settings')
                },
                {
                    type: 'textInput',
                    name: 'dnsnameservers',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DNS servers'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IP addresses of domain name servers used to resolve host names.'),
                    value: '',
                    validators: {
                        patternType: 'ipList'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnssearch',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Search domains'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Domains used when resolving host names.'),
                    value: '',
                    validators: {
                        patternType: 'domainNameList'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'mtu',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MTU'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The maximum transmission unit in bytes to set for the device. Set to 0 to use the default value.'),
                    value: 0,
                    validators: {
                        min: 0,
                        max: 65535,
                        patternType: 'integer'
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                }
            ]
        };
    }
}
InterfaceBondFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵInterfaceBondFormPageComponent_BaseFactory; return function InterfaceBondFormPageComponent_Factory(t) { return (ɵInterfaceBondFormPageComponent_BaseFactory || (ɵInterfaceBondFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InterfaceBondFormPageComponent)))(t || InterfaceBondFormPageComponent); }; }();
InterfaceBondFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InterfaceBondFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function InterfaceBondFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 38757:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/network/interfaces/interface-bridge-form-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterfaceBridgeFormPageComponent": () => (/* binding */ InterfaceBridgeFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class InterfaceBridgeFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getBridgeIface',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setBridgeIface',
                    params: {
                        wol: false
                    }
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    disabled: true,
                    submitValue: false,
                    value: 'bridge',
                    store: {
                        data: [
                            ['ethernet', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet')],
                            ['bond', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond')],
                            ['vlan', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN')],
                            ['wifi', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi')],
                            ['bridge', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'devicename',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    value: '',
                    disabled: true,
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: { operator: 'falsy', arg0: { prop: '_editing' } }
                        }
                    ]
                },
                {
                    type: 'select',
                    name: 'slaves',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Interfaces'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select interface devices ...'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Specifies the interface devices.'),
                    multiple: true,
                    valueField: 'devicename',
                    textField: 'description',
                    value: [],
                    store: {
                        proxy: {
                            service: 'Network',
                            get: {
                                method: 'enumerateBridgeSlaves',
                                params: {
                                    uuid: '{{ _routeParams.uuid | default(newconfobjuuid) }}',
                                    unused: true
                                }
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'devicename'
                            }
                        ]
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv4')
                },
                {
                    type: 'select',
                    name: 'method',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv4',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'textInput',
                    name: 'netmask',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netmask'),
                    value: '',
                    validators: {
                        patternType: 'netmask',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv4'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 0,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv6')
                },
                {
                    type: 'select',
                    name: 'method6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['auto', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Auto')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv6',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'numberInput',
                    name: 'netmask6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix length'),
                    value: 64,
                    validators: {
                        min: 0,
                        max: 128,
                        patternType: 'integer',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv6'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 1,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced settings')
                },
                {
                    type: 'textInput',
                    name: 'dnsnameservers',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DNS servers'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IP addresses of domain name servers used to resolve host names.'),
                    value: '',
                    validators: {
                        patternType: 'ipList'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnssearch',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Search domains'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Domains used when resolving host names.'),
                    value: '',
                    validators: {
                        patternType: 'domainNameList'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'mtu',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MTU'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The maximum transmission unit in bytes to set for the device. Set to 0 to use the default value.'),
                    value: 0,
                    validators: {
                        min: 0,
                        max: 65535,
                        patternType: 'integer'
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                }
            ]
        };
    }
}
InterfaceBridgeFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵInterfaceBridgeFormPageComponent_BaseFactory; return function InterfaceBridgeFormPageComponent_Factory(t) { return (ɵInterfaceBridgeFormPageComponent_BaseFactory || (ɵInterfaceBridgeFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InterfaceBridgeFormPageComponent)))(t || InterfaceBridgeFormPageComponent); }; }();
InterfaceBridgeFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InterfaceBridgeFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function InterfaceBridgeFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 79031:
/*!********************************************************************************!*\
  !*** ./src/app/pages/network/interfaces/interface-datatable-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterfaceDatatablePageComponent": () => (/* binding */ InterfaceDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);




class InterfaceDatatablePageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            stateId: '1c782151-4393-493b-9767-257620370fb2',
            autoReload: false,
            remoteSorting: true,
            remotePaging: true,
            hasSearchField: true,
            rowEnumFmt: '{{ devicename }}',
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'), prop: 'devicename', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    prop: 'type',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true,
                    cellTemplateName: 'chip',
                    cellTemplateConfig: {
                        map: {
                            ethernet: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet') },
                            bond: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond') },
                            vlan: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN') },
                            wifi: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi') },
                            bridge: { value: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge') }
                        }
                    }
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    prop: 'method',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: 
                    // eslint-disable-next-line max-len
                    'IPv4: {{ method | replace("manual", "Disabled") | replace("dhcp", "DHCP") | replace("auto", "Auto") | replace("static", "Static") | translate }}<br>IPv6: {{ method6 | replace("manual", "Disabled") | replace("dhcp", "DHCP") | replace("auto", "Auto") | replace("static", "Static") | translate }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    prop: 'address',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: 'IPv4: {{ address | default("-", true) }}<br>IPv6: {{ address6 | default("-", true) }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netmask'),
                    prop: 'netmask',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: 'IPv4: {{ netmask | default("-", true) }}<br>IPv6: {{ netmask6 | default("-", true) }}'
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                    prop: 'gateway',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: 'IPv4: {{ gateway | default("-", true) }}<br>IPv6: {{ gateway6 | default("-", true) }}'
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MTU'), prop: 'mtu', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('WOL'),
                    prop: 'wol',
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
                    prop: 'devicename'
                }
            ],
            store: {
                proxy: {
                    service: 'Network',
                    get: {
                        method: 'getInterfaceList'
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
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet'),
                            icon: 'mdi:ethernet',
                            execute: {
                                type: 'url',
                                url: '/network/interfaces/ethernet/create'
                            }
                        },
                        {
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi'),
                            icon: 'mdi:wifi',
                            execute: {
                                type: 'url',
                                url: '/network/interfaces/wifi/create'
                            }
                        },
                        {
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond'),
                            icon: 'mdi:link-variant',
                            execute: {
                                type: 'url',
                                url: '/network/interfaces/bond/create'
                            }
                        },
                        {
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN'),
                            icon: 'mdi:lan',
                            execute: {
                                type: 'url',
                                url: '/network/interfaces/vlan/create'
                            }
                        },
                        {
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge'),
                            icon: 'mdi:bridge',
                            execute: {
                                type: 'url',
                                url: '/network/interfaces/bridge/create'
                            }
                        }
                    ]
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces/{{ _selected[0].type }}/edit/{{ _selected[0].uuid }}'
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
                        url: '/network/interfaces/details/{{ _selected[0].devicename }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'search',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Identify'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1,
                        constraint: [{ operator: 'eq', arg0: { prop: 'type' }, arg1: 'ethernet' }]
                    },
                    execute: {
                        type: 'formDialog',
                        formDialog: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Identify network interface'),
                            fields: [
                                {
                                    type: 'textInput',
                                    name: 'devicename',
                                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                                    readonly: true,
                                    value: '{{ _selected[0].devicename }}'
                                },
                                {
                                    type: 'numberInput',
                                    name: 'seconds',
                                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Seconds'),
                                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Length of time in seconds to blink one or more LEDs on the specific ethernet port.'),
                                    validators: {
                                        required: true,
                                        min: 1,
                                        max: 30,
                                        patternType: 'integer'
                                    },
                                    value: 10
                                }
                            ],
                            buttons: {
                                submit: {
                                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Start'),
                                    execute: {
                                        type: 'request',
                                        request: {
                                            service: 'Network',
                                            method: 'identify',
                                            task: true,
                                            progressMessage: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Please wait, identifying network device ...')
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
                            service: 'Network',
                            method: 'deleteInterface',
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
InterfaceDatatablePageComponent.ɵfac = /*@__PURE__*/ function () { let ɵInterfaceDatatablePageComponent_BaseFactory; return function InterfaceDatatablePageComponent_Factory(t) { return (ɵInterfaceDatatablePageComponent_BaseFactory || (ɵInterfaceDatatablePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InterfaceDatatablePageComponent)))(t || InterfaceDatatablePageComponent); }; }();
InterfaceDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InterfaceDatatablePageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[3, "config"], ["page", ""]], template: function InterfaceDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-datatable-page", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 83175:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/network/interfaces/interface-details-form-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterfaceDetailsFormPageComponent": () => (/* binding */ InterfaceDetailsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);



class InterfaceDetailsFormPageComponent {
    constructor() {
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getInformation',
                    params: {
                        devicename: '{{ _routeParams.devicename }}'
                    },
                    transform: {
                        prefix: '{{ prefix | replace("-1", "") }}',
                        prefix6: '{{ prefix6 | replace("-1", "") }}'
                    }
                }
            },
            fields: [
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    disabled: true,
                    submitValue: false,
                    value: 'bond',
                    store: {
                        data: [
                            ['ethernet', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet')],
                            ['bond', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond')],
                            ['vlan', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN')],
                            ['wifi', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi')],
                            ['bridge', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'devicename',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    disabled: true
                },
                {
                    type: 'textInput',
                    name: 'ether',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Hardware Address'),
                    disabled: true,
                    hasCopyToClipboardButton: true
                },
                {
                    type: 'textInput',
                    name: 'mtu',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MTU'),
                    disabled: true
                },
                {
                    type: 'textInput',
                    name: 'state',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('State'),
                    disabled: true
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv4')
                },
                {
                    type: 'textInput',
                    name: 'address',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    disabled: true,
                    hasCopyToClipboardButton: true
                },
                {
                    type: 'textInput',
                    name: 'prefix',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix length'),
                    disabled: true
                },
                {
                    type: 'textInput',
                    name: 'netmask',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix address'),
                    disabled: true
                },
                {
                    type: 'textInput',
                    name: 'gateway',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                    disabled: true,
                    hasCopyToClipboardButton: true
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv6')
                },
                {
                    type: 'textInput',
                    name: 'address6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    disabled: true,
                    hasCopyToClipboardButton: true
                },
                {
                    type: 'textInput',
                    name: 'prefix6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix length'),
                    disabled: true
                },
                {
                    type: 'textInput',
                    name: 'netmask6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix address'),
                    disabled: true
                },
                {
                    type: 'textInput',
                    name: 'gateway6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                    disabled: true,
                    hasCopyToClipboardButton: true
                }
            ]
        };
    }
}
InterfaceDetailsFormPageComponent.ɵfac = function InterfaceDetailsFormPageComponent_Factory(t) { return new (t || InterfaceDetailsFormPageComponent)(); };
InterfaceDetailsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InterfaceDetailsFormPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function InterfaceDetailsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_1__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 97800:
/*!************************************************************************************!*\
  !*** ./src/app/pages/network/interfaces/interface-ethernet-form-page.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterfaceEthernetFormPageComponent": () => (/* binding */ InterfaceEthernetFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class InterfaceEthernetFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getEthernetIface',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setEthernetIface'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    disabled: true,
                    submitValue: false,
                    value: 'ethernet',
                    store: {
                        data: [
                            ['ethernet', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet')],
                            ['bond', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond')],
                            ['vlan', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN')],
                            ['wifi', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi')],
                            ['bridge', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge')]
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'devicename',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a device ...'),
                    textField: 'description',
                    valueField: 'devicename',
                    store: {
                        proxy: {
                            service: 'Network',
                            get: {
                                method: '{{ "enumerateDevices" if _routeConfig.data.editing else "getEthernetCandidates" }}'
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'devicename'
                            }
                        ]
                    },
                    value: '',
                    disabled: '{{ _routeConfig.data.editing | toboolean }}',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv4')
                },
                {
                    type: 'select',
                    name: 'method',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv4',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'textInput',
                    name: 'netmask',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netmask'),
                    value: '',
                    validators: {
                        patternType: 'netmask',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv4'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 0,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv6')
                },
                {
                    type: 'select',
                    name: 'method6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['auto', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Auto')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv6',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'numberInput',
                    name: 'netmask6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix length'),
                    value: 64,
                    validators: {
                        min: 0,
                        max: 128,
                        patternType: 'integer',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv6'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 1,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced settings')
                },
                {
                    type: 'textInput',
                    name: 'altmacaddress',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MAC address'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Force a specific MAC address on this interface.'),
                    value: '',
                    validators: {
                        patternType: 'macAddress'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnsnameservers',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DNS servers'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IP addresses of domain name servers used to resolve host names.'),
                    value: '',
                    validators: {
                        patternType: 'ipList'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnssearch',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Search domains'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Domains used when resolving host names.'),
                    value: '',
                    validators: {
                        patternType: 'domainNameList'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'mtu',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MTU'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The maximum transmission unit in bytes to set for the device. Set to 0 to use the default value.'),
                    value: 0,
                    validators: {
                        min: 0,
                        max: 65535,
                        patternType: 'integer'
                    }
                },
                {
                    type: 'checkbox',
                    name: 'wol',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wake-on-LAN'),
                    value: false
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                }
            ]
        };
    }
}
InterfaceEthernetFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵInterfaceEthernetFormPageComponent_BaseFactory; return function InterfaceEthernetFormPageComponent_Factory(t) { return (ɵInterfaceEthernetFormPageComponent_BaseFactory || (ɵInterfaceEthernetFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InterfaceEthernetFormPageComponent)))(t || InterfaceEthernetFormPageComponent); }; }();
InterfaceEthernetFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InterfaceEthernetFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function InterfaceEthernetFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 26823:
/*!********************************************************************************!*\
  !*** ./src/app/pages/network/interfaces/interface-vlan-form-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterfaceVlanFormPageComponent": () => (/* binding */ InterfaceVlanFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class InterfaceVlanFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getVlanIface',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setVlanIface',
                    params: {
                        wol: false
                    }
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    disabled: true,
                    submitValue: false,
                    value: 'vlan',
                    store: {
                        data: [
                            ['ethernet', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet')],
                            ['bond', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond')],
                            ['vlan', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN')],
                            ['wifi', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi')],
                            ['bridge', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge')]
                        ]
                    }
                },
                {
                    type: 'textInput',
                    name: 'devicename',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    value: '',
                    disabled: true,
                    modifiers: [
                        {
                            type: 'hidden',
                            constraint: { operator: 'falsy', arg0: { prop: '_editing' } }
                        }
                    ]
                },
                {
                    type: 'select',
                    name: 'vlanrawdevice',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Parent device'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a device ...'),
                    textField: 'description',
                    valueField: 'devicename',
                    store: {
                        proxy: {
                            service: 'Network',
                            get: {
                                method: 'getVlanCandidates'
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'devicename'
                            }
                        ]
                    },
                    value: '',
                    disabled: '{{ _routeConfig.data.editing | toboolean }}',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'numberInput',
                    name: 'vlanid',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN id'),
                    value: 1,
                    validators: {
                        required: true,
                        min: 1,
                        max: 4095,
                        patternType: 'integer'
                    },
                    disabled: '{{ _routeConfig.data.editing | toboolean }}'
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv4')
                },
                {
                    type: 'select',
                    name: 'method',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv4',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'textInput',
                    name: 'netmask',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netmask'),
                    value: '',
                    validators: {
                        patternType: 'netmask',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv4'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 0,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv6')
                },
                {
                    type: 'select',
                    name: 'method6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['auto', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Auto')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv6',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'numberInput',
                    name: 'netmask6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix length'),
                    value: 64,
                    validators: {
                        min: 0,
                        max: 128,
                        patternType: 'integer',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv6'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 1,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced settings')
                },
                {
                    type: 'textInput',
                    name: 'altmacaddress',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MAC address'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Force a specific MAC address on this interface.'),
                    value: '',
                    validators: {
                        patternType: 'macAddress'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnsnameservers',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DNS servers'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IP addresses of domain name servers used to resolve host names.'),
                    value: '',
                    validators: {
                        patternType: 'ipList'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnssearch',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Search domains'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Domains used when resolving host names.'),
                    value: '',
                    validators: {
                        patternType: 'domainNameList'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'mtu',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MTU'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The maximum transmission unit in bytes to set for the device. Set to 0 to use the default value.'),
                    value: 0,
                    validators: {
                        min: 0,
                        max: 65535,
                        patternType: 'integer'
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                }
            ]
        };
    }
}
InterfaceVlanFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵInterfaceVlanFormPageComponent_BaseFactory; return function InterfaceVlanFormPageComponent_Factory(t) { return (ɵInterfaceVlanFormPageComponent_BaseFactory || (ɵInterfaceVlanFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InterfaceVlanFormPageComponent)))(t || InterfaceVlanFormPageComponent); }; }();
InterfaceVlanFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InterfaceVlanFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function InterfaceVlanFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 80439:
/*!********************************************************************************!*\
  !*** ./src/app/pages/network/interfaces/interface-wifi-form-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterfaceWifiFormPageComponent": () => (/* binding */ InterfaceWifiFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class InterfaceWifiFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getWirelessIface',
                    params: {
                        uuid: '{{ _routeParams.uuid }}'
                    }
                },
                post: {
                    method: 'setWirelessIface'
                }
            },
            fields: [
                {
                    type: 'confObjUuid'
                },
                {
                    type: 'select',
                    name: 'type',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Type'),
                    disabled: true,
                    submitValue: false,
                    value: 'wifi',
                    store: {
                        data: [
                            ['ethernet', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Ethernet')],
                            ['bond', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bond')],
                            ['vlan', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('VLAN')],
                            ['wifi', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wi-Fi')],
                            ['bridge', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Bridge')]
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'devicename',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Device'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a device ...'),
                    textField: 'description',
                    valueField: 'devicename',
                    store: {
                        proxy: {
                            service: 'Network',
                            get: {
                                method: '{{ "enumerateDevices" if _routeConfig.data.editing else "getWirelessCandidates" }}'
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'devicename'
                            }
                        ]
                    },
                    value: '',
                    disabled: '{{ _routeConfig.data.editing | toboolean }}',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'wpassid',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSID'),
                    value: '',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'select',
                    name: 'keymanagement',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Security'),
                    value: 'psk',
                    store: {
                        data: [
                            ['psk', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('WPA2-Personal')],
                            ['sae', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('WPA3-Personal')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'wpapsk',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                    value: '',
                    autocomplete: 'new-password',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'checkbox',
                    name: 'hidden',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Connect to hidden network'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Connect even if the network is not broadcasting its SSID name.'),
                    value: false
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: ''
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv4')
                },
                {
                    type: 'select',
                    name: 'method',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv4',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'textInput',
                    name: 'netmask',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Netmask'),
                    value: '',
                    validators: {
                        patternType: 'netmask',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv4'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 0,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IPv6')
                },
                {
                    type: 'select',
                    name: 'method6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Method'),
                    value: 'manual',
                    store: {
                        data: [
                            ['manual', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disabled')],
                            ['dhcp', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DHCP')],
                            ['auto', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Auto')],
                            ['static', (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Static')]
                        ]
                    },
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'textInput',
                    name: 'address6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Address'),
                    value: '',
                    validators: {
                        patternType: 'ipv6',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'numberInput',
                    name: 'netmask6',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Prefix length'),
                    value: 64,
                    validators: {
                        min: 0,
                        max: 128,
                        patternType: 'integer',
                        requiredIf: { operator: 'eq', arg0: { prop: 'method6' }, arg1: 'static' }
                    },
                    modifiers: [
                        {
                            type: 'disabled',
                            constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                        }
                    ]
                },
                {
                    type: 'container',
                    fields: [
                        {
                            type: 'textInput',
                            name: 'gateway6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Gateway'),
                            value: '',
                            validators: {
                                patternType: 'ipv6'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ],
                            flex: 75
                        },
                        {
                            type: 'numberInput',
                            name: 'routemetric6',
                            label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Metric'),
                            value: 1,
                            validators: {
                                min: 0,
                                max: 65535,
                                patternType: 'integer'
                            },
                            modifiers: [
                                {
                                    type: 'disabled',
                                    constraint: { operator: 'ne', arg0: { prop: 'method6' }, arg1: 'static' }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Advanced settings')
                },
                {
                    type: 'textInput',
                    name: 'altmacaddress',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MAC address'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Force a specific MAC address on this interface.'),
                    value: '',
                    validators: {
                        patternType: 'macAddress'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnsnameservers',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('DNS servers'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('IP addresses of domain name servers used to resolve host names.'),
                    value: '',
                    validators: {
                        patternType: 'ipList'
                    }
                },
                {
                    type: 'textInput',
                    name: 'dnssearch',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Search domains'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Domains used when resolving host names.'),
                    value: '',
                    validators: {
                        patternType: 'domainNameList'
                    }
                },
                {
                    type: 'numberInput',
                    name: 'mtu',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('MTU'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The maximum transmission unit in bytes to set for the device. Set to 0 to use the default value.'),
                    value: 0,
                    validators: {
                        min: 0,
                        max: 65535,
                        patternType: 'integer'
                    }
                },
                {
                    type: 'checkbox',
                    name: 'wol',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Wake-on-LAN'),
                    value: false
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/network/interfaces'
                    }
                }
            ]
        };
    }
}
InterfaceWifiFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵInterfaceWifiFormPageComponent_BaseFactory; return function InterfaceWifiFormPageComponent_Factory(t) { return (ɵInterfaceWifiFormPageComponent_BaseFactory || (ɵInterfaceWifiFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InterfaceWifiFormPageComponent)))(t || InterfaceWifiFormPageComponent); }; }();
InterfaceWifiFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InterfaceWifiFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function InterfaceWifiFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 27671:
/*!*********************************************************!*\
  !*** ./src/app/pages/network/network-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkRoutingModule": () => (/* binding */ NetworkRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/pages/navigation-page/navigation-page.component */ 99076);
/* harmony import */ var _app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/route-config.service */ 23642);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-form-page.component */ 17068);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_inet_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-inet-datatable-page.component */ 48848);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_inet6_datatable_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-inet6-datatable-page.component */ 15220);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_tabs_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-tabs-page.component */ 60849);
/* harmony import */ var _app_pages_network_general_general_network_form_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/network/general/general-network-form-page.component */ 3261);
/* harmony import */ var _app_pages_network_interfaces_interface_bond_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-bond-form-page.component */ 79547);
/* harmony import */ var _app_pages_network_interfaces_interface_bridge_form_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-bridge-form-page.component */ 38757);
/* harmony import */ var _app_pages_network_interfaces_interface_datatable_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-datatable-page.component */ 79031);
/* harmony import */ var _app_pages_network_interfaces_interface_details_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-details-form-page.component */ 83175);
/* harmony import */ var _app_pages_network_interfaces_interface_ethernet_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-ethernet-form-page.component */ 97800);
/* harmony import */ var _app_pages_network_interfaces_interface_vlan_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-vlan-form-page.component */ 26823);
/* harmony import */ var _app_pages_network_interfaces_interface_wifi_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-wifi-form-page.component */ 80439);
/* harmony import */ var _app_pages_network_proxy_proxy_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/pages/network/proxy/proxy-form-page.component */ 76011);
/* harmony import */ var _app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/is-dirty-guard.service */ 71885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);




















const routes = [
    {
        path: '',
        component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
    },
    {
        path: 'general',
        component: _app_pages_network_general_general_network_form_page_component__WEBPACK_IMPORTED_MODULE_7__.GeneralNetworkFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('General'),
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated network settings.'),
            editing: true
        }
    },
    {
        path: 'interfaces',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Interfaces') },
        children: [
            { path: '', component: _app_pages_network_interfaces_interface_datatable_page_component__WEBPACK_IMPORTED_MODULE_10__.InterfaceDatatablePageComponent },
            {
                path: 'details/:devicename',
                component: _app_pages_network_interfaces_interface_details_form_page_component__WEBPACK_IMPORTED_MODULE_11__.InterfaceDetailsFormPageComponent,
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Details'), editing: true }
            },
            {
                path: 'ethernet/create',
                component: _app_pages_network_interfaces_interface_ethernet_form_page_component__WEBPACK_IMPORTED_MODULE_12__.InterfaceEthernetFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created wired network connection.')
                }
            },
            {
                path: 'ethernet/edit/:uuid',
                component: _app_pages_network_interfaces_interface_ethernet_form_page_component__WEBPACK_IMPORTED_MODULE_12__.InterfaceEthernetFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated wired network connection "{{ devicename }}".')
                }
            },
            {
                path: 'wifi/create',
                component: _app_pages_network_interfaces_interface_wifi_form_page_component__WEBPACK_IMPORTED_MODULE_14__.InterfaceWifiFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created wireless network connection.')
                }
            },
            {
                path: 'wifi/edit/:uuid',
                component: _app_pages_network_interfaces_interface_wifi_form_page_component__WEBPACK_IMPORTED_MODULE_14__.InterfaceWifiFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated wireless network connection "{{ devicename }}".')
                }
            },
            {
                path: 'bond/create',
                component: _app_pages_network_interfaces_interface_bond_form_page_component__WEBPACK_IMPORTED_MODULE_8__.InterfaceBondFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created bond network connection.')
                }
            },
            {
                path: 'bond/edit/:uuid',
                component: _app_pages_network_interfaces_interface_bond_form_page_component__WEBPACK_IMPORTED_MODULE_8__.InterfaceBondFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated bond network connection "{{ devicename }}".')
                }
            },
            {
                path: 'vlan/create',
                component: _app_pages_network_interfaces_interface_vlan_form_page_component__WEBPACK_IMPORTED_MODULE_13__.InterfaceVlanFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created VLAN network connection.')
                }
            },
            {
                path: 'vlan/edit/:uuid',
                component: _app_pages_network_interfaces_interface_vlan_form_page_component__WEBPACK_IMPORTED_MODULE_13__.InterfaceVlanFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated VLAN network connection "{{ devicename }}".')
                }
            },
            {
                path: 'bridge/create',
                component: _app_pages_network_interfaces_interface_bridge_form_page_component__WEBPACK_IMPORTED_MODULE_9__.InterfaceBridgeFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created bridge network connection.')
                }
            },
            {
                path: 'bridge/edit/:uuid',
                component: _app_pages_network_interfaces_interface_bridge_form_page_component__WEBPACK_IMPORTED_MODULE_9__.InterfaceBridgeFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated bridge network connection "{{ devicename }}".')
                }
            }
        ]
    },
    {
        path: 'proxy',
        component: _app_pages_network_proxy_proxy_form_page_component__WEBPACK_IMPORTED_MODULE_15__.ProxyFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Proxy'),
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated proxy settings.'),
            editing: true
        }
    },
    {
        path: 'firewall',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Firewall') },
        children: [
            { path: '', component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent },
            {
                path: 'rules',
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Rules') },
                children: [
                    {
                        path: '',
                        component: _app_pages_network_firewall_rules_firewall_rule_tabs_page_component__WEBPACK_IMPORTED_MODULE_6__.FirewallRuleTabsPageComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'inet',
                                pathMatch: 'full'
                            },
                            {
                                path: 'inet',
                                component: _app_pages_network_firewall_rules_firewall_rule_inet_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.FirewallRuleInetDatatablePageComponent,
                                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService]
                            },
                            {
                                path: 'inet6',
                                component: _app_pages_network_firewall_rules_firewall_rule_inet6_datatable_page_component__WEBPACK_IMPORTED_MODULE_5__.FirewallRuleInet6DatatablePageComponent,
                                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService]
                            }
                        ]
                    },
                    {
                        path: ':family/create',
                        component: _app_pages_network_firewall_rules_firewall_rule_form_page_component__WEBPACK_IMPORTED_MODULE_3__.FirewallRuleFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                            editing: false,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created firewall rule.')
                        }
                    },
                    {
                        path: ':family/edit/:uuid',
                        component: _app_pages_network_firewall_rules_firewall_rule_form_page_component__WEBPACK_IMPORTED_MODULE_3__.FirewallRuleFormPageComponent,
                        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_16__.IsDirtyGuardService],
                        data: {
                            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                            editing: true,
                            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated firewall rule.')
                        }
                    }
                ]
            }
        ]
    }
];
class NetworkRoutingModule {
}
NetworkRoutingModule.ɵfac = function NetworkRoutingModule_Factory(t) { return new (t || NetworkRoutingModule)(); };
NetworkRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: NetworkRoutingModule });
NetworkRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ROUTES,
            multi: true,
            useFactory: (routeConfigService) => {
                routeConfigService.inject('network', routes);
                return routes;
            },
            deps: [_app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__.RouteConfigService]
        }
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](NetworkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ }),

/***/ 17846:
/*!*************************************************!*\
  !*** ./src/app/pages/network/network.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkModule": () => (/* binding */ NetworkModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngneat/transloco */ 40668);
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/core.module */ 40294);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/material.module */ 63806);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-form-page.component */ 17068);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_inet_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-inet-datatable-page.component */ 48848);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_inet6_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-inet6-datatable-page.component */ 15220);
/* harmony import */ var _app_pages_network_firewall_rules_firewall_rule_tabs_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/network/firewall/rules/firewall-rule-tabs-page.component */ 60849);
/* harmony import */ var _app_pages_network_general_general_network_form_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/network/general/general-network-form-page.component */ 3261);
/* harmony import */ var _app_pages_network_interfaces_interface_bond_form_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-bond-form-page.component */ 79547);
/* harmony import */ var _app_pages_network_interfaces_interface_bridge_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-bridge-form-page.component */ 38757);
/* harmony import */ var _app_pages_network_interfaces_interface_datatable_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-datatable-page.component */ 79031);
/* harmony import */ var _app_pages_network_interfaces_interface_details_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-details-form-page.component */ 83175);
/* harmony import */ var _app_pages_network_interfaces_interface_ethernet_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-ethernet-form-page.component */ 97800);
/* harmony import */ var _app_pages_network_interfaces_interface_vlan_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-vlan-form-page.component */ 26823);
/* harmony import */ var _app_pages_network_interfaces_interface_wifi_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/network/interfaces/interface-wifi-form-page.component */ 80439);
/* harmony import */ var _app_pages_network_network_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/pages/network/network-routing.module */ 27671);
/* harmony import */ var _app_pages_network_proxy_proxy_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/pages/network/proxy/proxy-form-page.component */ 76011);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);




















class NetworkModule {
}
NetworkModule.ɵfac = function NetworkModule_Factory(t) { return new (t || NetworkModule)(); };
NetworkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: NetworkModule });
NetworkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__.SharedModule,
        _app_pages_network_network_routing_module__WEBPACK_IMPORTED_MODULE_14__.NetworkRoutingModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_19__.TranslocoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](NetworkModule, { declarations: [_app_pages_network_general_general_network_form_page_component__WEBPACK_IMPORTED_MODULE_6__.GeneralNetworkFormPageComponent,
        _app_pages_network_proxy_proxy_form_page_component__WEBPACK_IMPORTED_MODULE_15__.ProxyFormPageComponent,
        _app_pages_network_interfaces_interface_datatable_page_component__WEBPACK_IMPORTED_MODULE_9__.InterfaceDatatablePageComponent,
        _app_pages_network_interfaces_interface_ethernet_form_page_component__WEBPACK_IMPORTED_MODULE_11__.InterfaceEthernetFormPageComponent,
        _app_pages_network_interfaces_interface_wifi_form_page_component__WEBPACK_IMPORTED_MODULE_13__.InterfaceWifiFormPageComponent,
        _app_pages_network_interfaces_interface_bond_form_page_component__WEBPACK_IMPORTED_MODULE_7__.InterfaceBondFormPageComponent,
        _app_pages_network_interfaces_interface_vlan_form_page_component__WEBPACK_IMPORTED_MODULE_12__.InterfaceVlanFormPageComponent,
        _app_pages_network_firewall_rules_firewall_rule_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FirewallRuleFormPageComponent,
        _app_pages_network_firewall_rules_firewall_rule_tabs_page_component__WEBPACK_IMPORTED_MODULE_5__.FirewallRuleTabsPageComponent,
        _app_pages_network_firewall_rules_firewall_rule_inet_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__.FirewallRuleInetDatatablePageComponent,
        _app_pages_network_firewall_rules_firewall_rule_inet6_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.FirewallRuleInet6DatatablePageComponent,
        _app_pages_network_interfaces_interface_bridge_form_page_component__WEBPACK_IMPORTED_MODULE_8__.InterfaceBridgeFormPageComponent,
        _app_pages_network_interfaces_interface_details_form_page_component__WEBPACK_IMPORTED_MODULE_10__.InterfaceDetailsFormPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__.SharedModule,
        _app_pages_network_network_routing_module__WEBPACK_IMPORTED_MODULE_14__.NetworkRoutingModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_19__.TranslocoModule] }); })();


/***/ }),

/***/ 76011:
/*!******************************************************************!*\
  !*** ./src/app/pages/network/proxy/proxy-form-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyFormPageComponent": () => (/* binding */ ProxyFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class ProxyFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'Network',
                get: {
                    method: 'getProxy'
                },
                post: {
                    method: 'setProxy'
                }
            },
            fields: [
                {
                    type: 'paragraph',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('HTTP-Proxy')
                },
                {
                    type: 'checkbox',
                    name: 'httpenable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'httphost',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Host'),
                    value: '',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpenable' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'httpenable' } }
                    }
                },
                {
                    type: 'numberInput',
                    name: 'httpport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 8080,
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpenable' } }
                        }
                    ],
                    validators: {
                        patternType: 'port',
                        requiredIf: { operator: 'truthy', arg0: { prop: 'httpenable' } },
                        min: 1,
                        max: 65535
                    }
                },
                {
                    type: 'textInput',
                    name: 'httpusername',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User name'),
                    value: '',
                    autocomplete: 'off',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpenable' } }
                        }
                    ],
                    validators: {
                        patternType: 'userName'
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'httppassword',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                    value: '',
                    autocomplete: 'new-password',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpenable' } }
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('HTTPS-Proxy')
                },
                {
                    type: 'checkbox',
                    name: 'httpsenable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'httpshost',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Host'),
                    value: '',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpsenable' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'httpsenable' } }
                    }
                },
                {
                    type: 'numberInput',
                    name: 'httpsport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 8080,
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpsenable' } }
                        }
                    ],
                    validators: {
                        patternType: 'port',
                        requiredIf: { operator: 'truthy', arg0: { prop: 'httpsenable' } },
                        min: 1,
                        max: 65535
                    }
                },
                {
                    type: 'textInput',
                    name: 'httpsusername',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User name'),
                    value: '',
                    autocomplete: 'off',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpsenable' } }
                        }
                    ],
                    validators: {
                        patternType: 'userName'
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'httpspassword',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                    value: '',
                    autocomplete: 'new-password',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'httpsenable' } }
                        }
                    ]
                },
                {
                    type: 'divider',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('FTP-Proxy')
                },
                {
                    type: 'checkbox',
                    name: 'ftpenable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'ftphost',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Host'),
                    value: '',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'ftpenable' } }
                        }
                    ],
                    validators: {
                        requiredIf: { operator: 'truthy', arg0: { prop: 'ftpenable' } }
                    }
                },
                {
                    type: 'numberInput',
                    name: 'ftpport',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Port'),
                    value: 8080,
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'ftpenable' } }
                        }
                    ],
                    validators: {
                        patternType: 'port',
                        requiredIf: { operator: 'truthy', arg0: { prop: 'ftpenable' } },
                        min: 1,
                        max: 65535
                    }
                },
                {
                    type: 'textInput',
                    name: 'ftpusername',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User name'),
                    value: '',
                    autocomplete: 'off',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'ftpenable' } }
                        }
                    ],
                    validators: {
                        patternType: 'userName'
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'ftppassword',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                    value: '',
                    autocomplete: 'new-password',
                    modifiers: [
                        {
                            type: 'enabled',
                            constraint: { operator: 'truthy', arg0: { prop: 'ftpenable' } }
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
                        url: '/network'
                    }
                }
            ]
        };
    }
}
ProxyFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵProxyFormPageComponent_BaseFactory; return function ProxyFormPageComponent_Factory(t) { return (ɵProxyFormPageComponent_BaseFactory || (ɵProxyFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ProxyFormPageComponent)))(t || ProxyFormPageComponent); }; }();
ProxyFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProxyFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function ProxyFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_network_network_module_ts.js.map