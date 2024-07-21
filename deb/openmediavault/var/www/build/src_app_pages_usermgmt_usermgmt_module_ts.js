"use strict";
(self["webpackChunkopenmediavault_workbench"] = self["webpackChunkopenmediavault_workbench"] || []).push([["src_app_pages_usermgmt_usermgmt_module_ts"],{

/***/ 35107:
/*!*************************************************************************!*\
  !*** ./src/app/pages/usermgmt/groups/group-datatable-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupDatatablePageComponent": () => (/* binding */ GroupDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class GroupDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: '6846696d-6834-45b8-9154-423488469072',
            autoReload: false,
            remoteSorting: true,
            remotePaging: true,
            remoteSearching: true,
            hasSearchField: true,
            rowId: 'name',
            rowEnumFmt: '{{ name }}',
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'), prop: 'name', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('GID'),
                    prop: 'gid',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Members'),
                    prop: 'members',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ members | sort() | join(", ") }}'
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
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'UserMgmt',
                    get: {
                        method: 'getGroupList'
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
                                url: '/usermgmt/groups/create'
                            }
                        },
                        {
                            type: 'iconButton',
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                            icon: 'import',
                            execute: {
                                type: 'url',
                                url: '/usermgmt/groups/import'
                            }
                        }
                    ]
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/groups/edit/{{ _selected[0].name }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:folder-key',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder permissions'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'url',
                        url: '/usermgmt/groups/permissions/{{ _selected[0].name }}'
                    }
                },
                {
                    template: 'delete',
                    enabledConstraints: {
                        minSelected: 1,
                        constraint: [{ operator: 'z', arg0: { prop: 'members' } }]
                    },
                    execute: {
                        type: 'request',
                        request: {
                            service: 'UserMgmt',
                            method: 'deleteGroup',
                            params: {
                                name: '{{ name }}'
                            }
                        }
                    }
                }
            ]
        };
    }
}
GroupDatatablePageComponent.ɵfac = function GroupDatatablePageComponent_Factory(t) { return new (t || GroupDatatablePageComponent)(); };
GroupDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function GroupDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 8607:
/*!********************************************************************!*\
  !*** ./src/app/pages/usermgmt/groups/group-form-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupFormPageComponent": () => (/* binding */ GroupFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class GroupFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'UserMgmt',
                get: {
                    method: 'getGroup',
                    params: {
                        name: '{{ _routeParams.name }}'
                    }
                },
                post: {
                    method: 'setGroup'
                }
            },
            fields: [
                {
                    type: 'textInput',
                    name: 'name',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    disabled: '{{ _routeConfig.data.editing | toboolean }}',
                    value: '{{ _routeParams.name }}',
                    validators: {
                        required: true,
                        patternType: 'groupName'
                    }
                },
                {
                    type: 'select',
                    name: 'members',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Members'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select members ...'),
                    multiple: true,
                    valueField: 'name',
                    textField: 'name',
                    value: [],
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
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: '',
                    validators: {
                        maxLength: 65
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/groups'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/groups'
                    }
                }
            ]
        };
    }
}
GroupFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵGroupFormPageComponent_BaseFactory; return function GroupFormPageComponent_Factory(t) { return (ɵGroupFormPageComponent_BaseFactory || (ɵGroupFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](GroupFormPageComponent)))(t || GroupFormPageComponent); }; }();
GroupFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GroupFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function GroupFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 76352:
/*!***************************************************************************!*\
  !*** ./src/app/pages/usermgmt/groups/group-import-form-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupImportFormPageComponent": () => (/* binding */ GroupImportFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class GroupImportFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'UserMgmt',
                post: {
                    method: 'importGroups',
                    task: true
                }
            },
            fields: [
                {
                    type: 'textarea',
                    name: 'csv',
                    value: '# <groupname>;<gid>;<tags>',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Each line represents a group.'),
                    monospace: true,
                    rows: 10
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                    execute: {
                        type: 'url',
                        url: '/usermgmt/groups'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/groups'
                    }
                }
            ]
        };
    }
}
GroupImportFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵGroupImportFormPageComponent_BaseFactory; return function GroupImportFormPageComponent_Factory(t) { return (ɵGroupImportFormPageComponent_BaseFactory || (ɵGroupImportFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](GroupImportFormPageComponent)))(t || GroupImportFormPageComponent); }; }();
GroupImportFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GroupImportFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function GroupImportFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 25283:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/usermgmt/groups/group-shared-folder-permissions-datatable-page.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSharedFolderPermissionsDatatablePageComponent": () => (/* binding */ GroupSharedFolderPermissionsDatatablePageComponent)
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













const _c0 = ["page"];
class GroupSharedFolderPermissionsDatatablePageComponent {
    constructor(router, rpcService, notificationService) {
        this.router = router;
        this.rpcService = rpcService;
        this.notificationService = notificationService;
        this.config = {
            stateId: '21212794-27c1-11ea-abdb-e3fc0648b2ae',
            autoReload: false,
            limit: 0,
            hasFooter: false,
            hasSearchField: true,
            hints: [
                {
                    type: 'info',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('These settings are used by the services to configure the access rights for the group "{{ _routeParams.name }}". Please note that these settings have no effect on file system permissions.')
                }
            ],
            selectionType: 'none',
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'), prop: 'name', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    prop: 'perms',
                    flexGrow: 1,
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
                    dir: 'asc',
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'ShareMgmt',
                    get: {
                        method: 'getPrivilegesByRole',
                        params: {
                            role: 'group',
                            name: '{{ _routeParams.name }}'
                        }
                    }
                }
            },
            buttons: [
                {
                    template: 'cancel',
                    url: '/usermgmt/groups'
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
            uuid: obj.uuid,
            perms: lodash__WEBPACK_IMPORTED_MODULE_1__.toInteger(obj.perms)
        }));
        this.rpcService
            .request('ShareMgmt', 'setPrivilegesByRole', {
            role: 'group',
            name: lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeParams, 'name'),
            privileges
        })
            .subscribe(() => {
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_4__.NotificationType.success, (0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_3__.format)(lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeConfig, 'data.notificationTitle'), this.page.routeParams));
            this.router.navigate(['/usermgmt/groups']);
        });
    }
}
GroupSharedFolderPermissionsDatatablePageComponent.ɵfac = function GroupSharedFolderPermissionsDatatablePageComponent_Factory(t) { return new (t || GroupSharedFolderPermissionsDatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_6__.RpcService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService)); };
GroupSharedFolderPermissionsDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GroupSharedFolderPermissionsDatatablePageComponent, selectors: [["ng-component"]], viewQuery: function GroupSharedFolderPermissionsDatatablePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } }, decls: 2, vars: 1, consts: [[3, "config"], ["page", ""]], template: function GroupSharedFolderPermissionsDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "omv-intuition-datatable-page", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 48242:
/*!***********************************************************!*\
  !*** ./src/app/pages/usermgmt/usermgmt-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsermgmtRoutingModule": () => (/* binding */ UsermgmtRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/pages/navigation-page/navigation-page.component */ 99076);
/* harmony import */ var _app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/services/route-config.service */ 23642);
/* harmony import */ var _app_pages_usermgmt_groups_group_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-datatable-page.component */ 35107);
/* harmony import */ var _app_pages_usermgmt_groups_group_form_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-form-page.component */ 8607);
/* harmony import */ var _app_pages_usermgmt_groups_group_import_form_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-import-form-page.component */ 76352);
/* harmony import */ var _app_pages_usermgmt_groups_group_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-shared-folder-permissions-datatable-page.component */ 25283);
/* harmony import */ var _app_pages_usermgmt_users_user_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-datatable-page.component */ 16380);
/* harmony import */ var _app_pages_usermgmt_users_user_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-form-page.component */ 85694);
/* harmony import */ var _app_pages_usermgmt_users_user_import_form_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-import-form-page.component */ 46669);
/* harmony import */ var _app_pages_usermgmt_users_user_password_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-password-form-page.component */ 69526);
/* harmony import */ var _app_pages_usermgmt_users_user_profile_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-profile-form-page.component */ 68594);
/* harmony import */ var _app_pages_usermgmt_users_user_settings_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-settings-form-page.component */ 34331);
/* harmony import */ var _app_pages_usermgmt_users_user_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-shared-folder-permissions-datatable-page.component */ 12819);
/* harmony import */ var _app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/services/is-dirty-guard.service */ 71885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);


















const routes = [
    {
        path: '',
        component: _app_core_pages_navigation_page_navigation_page_component__WEBPACK_IMPORTED_MODULE_1__.NavigationPageComponent
    },
    {
        path: 'change-password',
        component: _app_pages_usermgmt_users_user_password_form_page_component__WEBPACK_IMPORTED_MODULE_10__.UserPasswordFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Change Password'),
            editing: true,
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated password.')
        }
    },
    {
        path: 'profile',
        component: _app_pages_usermgmt_users_user_profile_form_page_component__WEBPACK_IMPORTED_MODULE_11__.UserProfileFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Profile'),
            editing: true,
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated user profile.')
        }
    },
    {
        path: 'users',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Users') },
        children: [
            { path: '', component: _app_pages_usermgmt_users_user_datatable_page_component__WEBPACK_IMPORTED_MODULE_7__.UserDatatablePageComponent },
            {
                path: 'create',
                component: _app_pages_usermgmt_users_user_form_page_component__WEBPACK_IMPORTED_MODULE_8__.UserFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created user "{{ name }}".')
                }
            },
            {
                path: 'import',
                component: _app_pages_usermgmt_users_user_import_form_page_component__WEBPACK_IMPORTED_MODULE_9__.UserImportFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'), notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Imported users.') }
            },
            {
                path: 'edit/:name',
                component: _app_pages_usermgmt_users_user_form_page_component__WEBPACK_IMPORTED_MODULE_8__.UserFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated user "{{ name }}".')
                }
            },
            {
                path: 'permissions/:name',
                component: _app_pages_usermgmt_users_user_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_13__.UserSharedFolderPermissionsDatatablePageComponent,
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    breadcrumb: {
                        text: '{{ "Permissions" | translate }} @ {{ _routeParams.name }}'
                    },
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated permissions of user "{{ name }}".')
                }
            }
        ]
    },
    {
        path: 'groups',
        data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Groups') },
        children: [
            { path: '', component: _app_pages_usermgmt_groups_group_datatable_page_component__WEBPACK_IMPORTED_MODULE_3__.GroupDatatablePageComponent },
            {
                path: 'create',
                component: _app_pages_usermgmt_groups_group_form_page_component__WEBPACK_IMPORTED_MODULE_4__.GroupFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Create'),
                    editing: false,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Created group "{{ name }}".')
                }
            },
            {
                path: 'import',
                component: _app_pages_usermgmt_groups_group_import_form_page_component__WEBPACK_IMPORTED_MODULE_5__.GroupImportFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
                data: { title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'), notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Imported groups.') }
            },
            {
                path: 'edit/:name',
                component: _app_pages_usermgmt_groups_group_form_page_component__WEBPACK_IMPORTED_MODULE_4__.GroupFormPageComponent,
                canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Edit'),
                    editing: true,
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated group "{{ name }}".')
                }
            },
            {
                path: 'permissions/:name',
                component: _app_pages_usermgmt_groups_group_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__.GroupSharedFolderPermissionsDatatablePageComponent,
                data: {
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    breadcrumb: {
                        text: '{{ "Permissions" | translate }} @ {{ _routeParams.name }}'
                    },
                    notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated permissions of group "{{ name }}".')
                }
            }
        ]
    },
    {
        path: 'settings',
        component: _app_pages_usermgmt_users_user_settings_form_page_component__WEBPACK_IMPORTED_MODULE_12__.UserSettingsFormPageComponent,
        canDeactivate: [_app_shared_services_is_dirty_guard_service__WEBPACK_IMPORTED_MODULE_14__.IsDirtyGuardService],
        data: {
            title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Settings'),
            editing: true,
            notificationTitle: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Updated settings.')
        }
    }
];
class UsermgmtRoutingModule {
}
UsermgmtRoutingModule.ɵfac = function UsermgmtRoutingModule_Factory(t) { return new (t || UsermgmtRoutingModule)(); };
UsermgmtRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: UsermgmtRoutingModule });
UsermgmtRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ROUTES,
            multi: true,
            useFactory: (routeConfigService) => {
                routeConfigService.inject('usermgmt', routes);
                return routes;
            },
            deps: [_app_core_services_route_config_service__WEBPACK_IMPORTED_MODULE_2__.RouteConfigService]
        }
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](UsermgmtRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


/***/ }),

/***/ 45284:
/*!***************************************************!*\
  !*** ./src/app/pages/usermgmt/usermgmt.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsermgmtModule": () => (/* binding */ UsermgmtModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/core/core.module */ 40294);
/* harmony import */ var _app_pages_usermgmt_groups_group_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-datatable-page.component */ 35107);
/* harmony import */ var _app_pages_usermgmt_groups_group_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-form-page.component */ 8607);
/* harmony import */ var _app_pages_usermgmt_groups_group_import_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-import-form-page.component */ 76352);
/* harmony import */ var _app_pages_usermgmt_groups_group_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/pages/usermgmt/groups/group-shared-folder-permissions-datatable-page.component */ 25283);
/* harmony import */ var _app_pages_usermgmt_usermgmt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/pages/usermgmt/usermgmt-routing.module */ 48242);
/* harmony import */ var _app_pages_usermgmt_users_user_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-datatable-page.component */ 16380);
/* harmony import */ var _app_pages_usermgmt_users_user_form_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-form-page.component */ 85694);
/* harmony import */ var _app_pages_usermgmt_users_user_import_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-import-form-page.component */ 46669);
/* harmony import */ var _app_pages_usermgmt_users_user_password_form_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-password-form-page.component */ 69526);
/* harmony import */ var _app_pages_usermgmt_users_user_profile_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-profile-form-page.component */ 68594);
/* harmony import */ var _app_pages_usermgmt_users_user_settings_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-settings-form-page.component */ 34331);
/* harmony import */ var _app_pages_usermgmt_users_user_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/pages/usermgmt/users/user-shared-folder-permissions-datatable-page.component */ 12819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);















class UsermgmtModule {
}
UsermgmtModule.ɵfac = function UsermgmtModule_Factory(t) { return new (t || UsermgmtModule)(); };
UsermgmtModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: UsermgmtModule });
UsermgmtModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_pages_usermgmt_usermgmt_routing_module__WEBPACK_IMPORTED_MODULE_5__.UsermgmtRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](UsermgmtModule, { declarations: [_app_pages_usermgmt_users_user_datatable_page_component__WEBPACK_IMPORTED_MODULE_6__.UserDatatablePageComponent,
        _app_pages_usermgmt_users_user_form_page_component__WEBPACK_IMPORTED_MODULE_7__.UserFormPageComponent,
        _app_pages_usermgmt_users_user_password_form_page_component__WEBPACK_IMPORTED_MODULE_9__.UserPasswordFormPageComponent,
        _app_pages_usermgmt_users_user_settings_form_page_component__WEBPACK_IMPORTED_MODULE_11__.UserSettingsFormPageComponent,
        _app_pages_usermgmt_users_user_import_form_page_component__WEBPACK_IMPORTED_MODULE_8__.UserImportFormPageComponent,
        _app_pages_usermgmt_groups_group_form_page_component__WEBPACK_IMPORTED_MODULE_2__.GroupFormPageComponent,
        _app_pages_usermgmt_groups_group_import_form_page_component__WEBPACK_IMPORTED_MODULE_3__.GroupImportFormPageComponent,
        _app_pages_usermgmt_groups_group_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.GroupDatatablePageComponent,
        _app_pages_usermgmt_groups_group_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_4__.GroupSharedFolderPermissionsDatatablePageComponent,
        _app_pages_usermgmt_users_user_shared_folder_permissions_datatable_page_component__WEBPACK_IMPORTED_MODULE_12__.UserSharedFolderPermissionsDatatablePageComponent,
        _app_pages_usermgmt_users_user_profile_form_page_component__WEBPACK_IMPORTED_MODULE_10__.UserProfileFormPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _app_core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _app_pages_usermgmt_usermgmt_routing_module__WEBPACK_IMPORTED_MODULE_5__.UsermgmtRoutingModule] }); })();


/***/ }),

/***/ 16380:
/*!***********************************************************************!*\
  !*** ./src/app/pages/usermgmt/users/user-datatable-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDatatablePageComponent": () => (/* binding */ UserDatatablePageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/components/intuition/datatable-page/datatable-page.component */ 7839);



class UserDatatablePageComponent {
    constructor() {
        this.config = {
            stateId: '9dd2c07e-4572-4112-9de7-c3ccad5ef52e',
            autoReload: false,
            remoteSorting: true,
            remotePaging: true,
            remoteSearching: true,
            hasSearchField: true,
            rowId: 'name',
            rowEnumFmt: '{{ name }}',
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'), prop: 'name', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('UID'),
                    prop: 'uid',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('GID'),
                    prop: 'gid',
                    flexGrow: 1,
                    sortable: true,
                    hidden: true
                },
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Email'), prop: 'email', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Groups'),
                    prop: 'groups',
                    flexGrow: 1,
                    sortable: true,
                    cellTemplateName: 'template',
                    cellTemplateConfig: '{{ groups | sort() | join(", ") }}'
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
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'UserMgmt',
                    get: {
                        method: 'getUserList'
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
                                url: '/usermgmt/users/create'
                            }
                        },
                        {
                            type: 'iconButton',
                            text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                            icon: 'import',
                            execute: {
                                type: 'url',
                                url: '/usermgmt/users/import'
                            }
                        }
                    ]
                },
                {
                    template: 'edit',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/users/edit/{{ _selected[0].name }}'
                    }
                },
                {
                    type: 'iconButton',
                    icon: 'mdi:folder-key',
                    tooltip: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder permissions'),
                    enabledConstraints: {
                        minSelected: 1,
                        maxSelected: 1
                    },
                    execute: {
                        type: 'url',
                        url: '/usermgmt/users/permissions/{{ _selected[0].name }}'
                    }
                },
                {
                    template: 'delete',
                    execute: {
                        type: 'request',
                        request: {
                            service: 'UserMgmt',
                            method: 'deleteUser',
                            params: {
                                name: '{{ name }}'
                            }
                        }
                    }
                }
            ]
        };
    }
}
UserDatatablePageComponent.ɵfac = function UserDatatablePageComponent_Factory(t) { return new (t || UserDatatablePageComponent)(); };
UserDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserDatatablePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UserDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omv-intuition-datatable-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_1__.DatatablePageComponent], encapsulation: 2 });


/***/ }),

/***/ 85694:
/*!******************************************************************!*\
  !*** ./src/app/pages/usermgmt/users/user-form-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFormPageComponent": () => (/* binding */ UserFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class UserFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'UserMgmt',
                get: {
                    method: 'getUser',
                    params: {
                        name: '{{ _routeParams.name }}'
                    }
                },
                post: {
                    method: 'setUser'
                }
            },
            fields: [
                {
                    type: 'textInput',
                    name: 'name',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    disabled: '{{ _routeConfig.data.editing | toboolean }}',
                    value: '{{ _routeParams.name }}',
                    autocomplete: 'off',
                    validators: {
                        required: true,
                        patternType: 'userName'
                    }
                },
                {
                    type: 'textInput',
                    name: 'email',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Email'),
                    value: '',
                    autocomplete: 'off',
                    validators: {
                        patternType: 'email'
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'password',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password'),
                    value: '',
                    autocomplete: 'new-password',
                    validators: {
                        required: '{{ _routeConfig.data.editing | toboolean === false }}'
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'passwordconf',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Confirm password'),
                    submitValue: false,
                    value: '',
                    autocomplete: 'new-password',
                    validators: {
                        custom: [
                            {
                                constraint: {
                                    operator: 'eq',
                                    arg0: { prop: 'password' },
                                    arg1: { prop: 'passwordconf' }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Password does not match.')
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'shell',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shell'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select a shell ...'),
                    value: '/bin/sh',
                    store: {
                        proxy: {
                            service: 'System',
                            get: {
                                method: 'getShells'
                            }
                        },
                        sorters: [
                            {
                                dir: 'asc',
                                prop: 'text'
                            }
                        ]
                    }
                },
                {
                    type: 'select',
                    name: 'groups',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Groups'),
                    placeholder: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Select groups ...'),
                    multiple: true,
                    valueField: 'name',
                    textField: 'name',
                    value: [],
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
                    }
                },
                {
                    type: 'datatable',
                    name: 'sshpubkeys',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSH public keys'),
                    hasHeader: false,
                    hasFooter: false,
                    columns: [
                        {
                            prop: 'sshpubkey',
                            flexGrow: 1,
                            cellClass: 'omv-text-wrap omv-text-monospace'
                        }
                    ],
                    actions: [
                        {
                            template: 'add',
                            formDialogConfig: {
                                title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('SSH public key'),
                                fields: [
                                    {
                                        type: 'fileInput',
                                        name: 'sshpubkey',
                                        value: '',
                                        rows: 10,
                                        wrap: 'off',
                                        monospace: true,
                                        trim: true,
                                        label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Public key'),
                                        hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The SSH public key in OpenSSH or RFC 4716 format.'),
                                        validators: {
                                            required: true,
                                            patternType: 'sshPubKey'
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            template: 'delete'
                        }
                    ],
                    valueType: 'string',
                    value: []
                },
                {
                    type: 'checkbox',
                    name: 'disallowusermod',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disallow account modification'),
                    value: false,
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Disallow the user to modify their own account.')
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: '',
                    validators: {
                        maxLength: 65
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/users'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/users'
                    }
                }
            ]
        };
    }
}
UserFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵUserFormPageComponent_BaseFactory; return function UserFormPageComponent_Factory(t) { return (ɵUserFormPageComponent_BaseFactory || (ɵUserFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UserFormPageComponent)))(t || UserFormPageComponent); }; }();
UserFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UserFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 46669:
/*!*************************************************************************!*\
  !*** ./src/app/pages/usermgmt/users/user-import-form-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserImportFormPageComponent": () => (/* binding */ UserImportFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class UserImportFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'UserMgmt',
                post: {
                    method: 'importUsers',
                    task: true
                }
            },
            fields: [
                {
                    type: 'textarea',
                    name: 'csv',
                    value: '# <username>;<uid>;<tags>;<email>;<password>;<shell>;<groupname,groupname,...>;<disallowusermod>',
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Each line represents a user. Note, the password must be entered in plain text.'),
                    monospace: true,
                    rows: 10
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Import'),
                    execute: {
                        type: 'url',
                        url: '/usermgmt/users'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/usermgmt/users'
                    }
                }
            ]
        };
    }
}
UserImportFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵUserImportFormPageComponent_BaseFactory; return function UserImportFormPageComponent_Factory(t) { return (ɵUserImportFormPageComponent_BaseFactory || (ɵUserImportFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UserImportFormPageComponent)))(t || UserImportFormPageComponent); }; }();
UserImportFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserImportFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UserImportFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 69526:
/*!***************************************************************************!*\
  !*** ./src/app/pages/usermgmt/users/user-password-form-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPasswordFormPageComponent": () => (/* binding */ UserPasswordFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class UserPasswordFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'UserMgmt',
                post: {
                    method: 'setPasswordByContext'
                }
            },
            fields: [
                {
                    type: 'passwordInput',
                    name: 'password',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('New password'),
                    autocomplete: 'new-password',
                    validators: {
                        required: true
                    }
                },
                {
                    type: 'passwordInput',
                    name: 'passwordconf',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Confirm password'),
                    submitValue: false,
                    validators: {
                        required: true,
                        custom: [
                            {
                                constraint: {
                                    operator: 'eq',
                                    arg0: { prop: 'password' },
                                    arg1: { prop: 'passwordconf' }
                                },
                                errorData: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)("Password doesn't match.")
                            }
                        ]
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    execute: {
                        type: 'url',
                        url: '/'
                    }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/'
                    }
                }
            ]
        };
    }
}
UserPasswordFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵUserPasswordFormPageComponent_BaseFactory; return function UserPasswordFormPageComponent_Factory(t) { return (ɵUserPasswordFormPageComponent_BaseFactory || (ɵUserPasswordFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UserPasswordFormPageComponent)))(t || UserPasswordFormPageComponent); }; }();
UserPasswordFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserPasswordFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UserPasswordFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 68594:
/*!**************************************************************************!*\
  !*** ./src/app/pages/usermgmt/users/user-profile-form-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileFormPageComponent": () => (/* binding */ UserProfileFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class UserProfileFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'UserMgmt',
                get: {
                    method: 'getUserByContext'
                },
                post: {
                    method: 'setUserByContext'
                }
            },
            fields: [
                {
                    type: 'hidden',
                    name: '_readonly',
                    value: false
                },
                {
                    type: 'textInput',
                    name: 'name',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Name'),
                    readonly: true
                },
                {
                    type: 'textInput',
                    name: 'email',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Email'),
                    value: '',
                    validators: {
                        patternType: 'email'
                    }
                },
                {
                    type: 'tagInput',
                    name: 'comment',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Tags'),
                    value: '',
                    validators: {
                        maxLength: 65
                    }
                }
            ],
            buttons: [
                {
                    template: 'submit',
                    enabledConstraint: { operator: 'falsy', arg0: { prop: '_readonly' } }
                },
                {
                    template: 'cancel',
                    execute: {
                        type: 'url',
                        url: '/'
                    }
                }
            ]
        };
    }
}
UserProfileFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵUserProfileFormPageComponent_BaseFactory; return function UserProfileFormPageComponent_Factory(t) { return (ɵUserProfileFormPageComponent_BaseFactory || (ɵUserProfileFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UserProfileFormPageComponent)))(t || UserProfileFormPageComponent); }; }();
UserProfileFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserProfileFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UserProfileFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 34331:
/*!***************************************************************************!*\
  !*** ./src/app/pages/usermgmt/users/user-settings-form-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsFormPageComponent": () => (/* binding */ UserSettingsFormPageComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/transloco-keys-manager/marker */ 82191);
/* harmony import */ var _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/pages/base-page-component */ 97713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/core/components/intuition/form-page/form-page.component */ 87939);




class UserSettingsFormPageComponent extends _app_pages_base_page_component__WEBPACK_IMPORTED_MODULE_1__.BaseFormPageComponent {
    constructor() {
        super(...arguments);
        this.config = {
            request: {
                service: 'UserMgmt',
                get: {
                    method: 'getSettings'
                },
                post: {
                    method: 'setSettings'
                }
            },
            fields: [
                {
                    type: 'paragraph',
                    title: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('User home directory')
                },
                {
                    type: 'checkbox',
                    name: 'enable',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Enabled'),
                    value: false
                },
                {
                    type: 'sharedFolderSelect',
                    name: 'sharedfolderref',
                    label: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Location'),
                    hint: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('The location of the user home directories.'),
                    hasEmptyOption: true,
                    value: '',
                    validators: {
                        requiredIf: { operator: 'eq', arg0: { prop: 'enable' }, arg1: true }
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
                        url: '/usermgmt'
                    }
                }
            ]
        };
    }
}
UserSettingsFormPageComponent.ɵfac = /*@__PURE__*/ function () { let ɵUserSettingsFormPageComponent_BaseFactory; return function UserSettingsFormPageComponent_Factory(t) { return (ɵUserSettingsFormPageComponent_BaseFactory || (ɵUserSettingsFormPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UserSettingsFormPageComponent)))(t || UserSettingsFormPageComponent); }; }();
UserSettingsFormPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserSettingsFormPageComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function UserSettingsFormPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "omv-intuition-form-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_2__.FormPageComponent], encapsulation: 2 });


/***/ }),

/***/ 12819:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/usermgmt/users/user-shared-folder-permissions-datatable-page.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSharedFolderPermissionsDatatablePageComponent": () => (/* binding */ UserSharedFolderPermissionsDatatablePageComponent)
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













const _c0 = ["page"];
class UserSharedFolderPermissionsDatatablePageComponent {
    constructor(router, rpcService, notificationService) {
        this.router = router;
        this.rpcService = rpcService;
        this.notificationService = notificationService;
        this.config = {
            stateId: '3752268a-27c1-11ea-a5b1-a3d1c7dcb22c',
            autoReload: false,
            limit: 0,
            hasFooter: false,
            hasSearchField: true,
            hints: [
                {
                    type: 'info',
                    text: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('These settings are used by the services to configure the access rights for the user "{{ _routeParams.name }}". Please note that these settings have no effect on file system permissions.')
                }
            ],
            selectionType: 'none',
            columns: [
                { name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Shared folder'), prop: 'name', flexGrow: 1, sortable: true },
                {
                    name: (0,_ngneat_transloco_keys_manager_marker__WEBPACK_IMPORTED_MODULE_0__.marker)('Permissions'),
                    prop: 'perms',
                    flexGrow: 1,
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
                    dir: 'asc',
                    prop: 'name'
                }
            ],
            store: {
                proxy: {
                    service: 'ShareMgmt',
                    get: {
                        method: 'getPrivilegesByRole',
                        params: {
                            role: 'user',
                            name: '{{ _routeParams.name }}'
                        }
                    }
                }
            },
            buttons: [
                {
                    template: 'submit',
                    click: this.onSave.bind(this)
                },
                {
                    template: 'cancel',
                    url: '/usermgmt/users'
                }
            ]
        };
    }
    onSave() {
        const privileges = lodash__WEBPACK_IMPORTED_MODULE_1__.map(lodash__WEBPACK_IMPORTED_MODULE_1__.reject(this.page.table.data, ['perms', null]), (obj) => ({
            uuid: obj.uuid,
            perms: lodash__WEBPACK_IMPORTED_MODULE_1__.toInteger(obj.perms)
        }));
        this.rpcService
            .request('ShareMgmt', 'setPrivilegesByRole', {
            role: 'user',
            name: lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeParams, 'name'),
            privileges
        })
            .subscribe(() => {
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_4__.NotificationType.success, (0,_app_functions_helper__WEBPACK_IMPORTED_MODULE_3__.format)(lodash__WEBPACK_IMPORTED_MODULE_1__.get(this.page.routeConfig, 'data.notificationTitle'), this.page.routeParams));
            this.router.navigate(['/usermgmt/users']);
        });
    }
}
UserSharedFolderPermissionsDatatablePageComponent.ɵfac = function UserSharedFolderPermissionsDatatablePageComponent_Factory(t) { return new (t || UserSharedFolderPermissionsDatatablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_rpc_service__WEBPACK_IMPORTED_MODULE_6__.RpcService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService)); };
UserSharedFolderPermissionsDatatablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UserSharedFolderPermissionsDatatablePageComponent, selectors: [["ng-component"]], viewQuery: function UserSharedFolderPermissionsDatatablePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
    } }, decls: 2, vars: 1, consts: [[3, "config"], ["page", ""]], template: function UserSharedFolderPermissionsDatatablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "omv-intuition-datatable-page", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.config);
    } }, dependencies: [_app_core_components_intuition_datatable_page_datatable_page_component__WEBPACK_IMPORTED_MODULE_2__.DatatablePageComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_usermgmt_usermgmt_module_ts.js.map