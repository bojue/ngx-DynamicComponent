(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workspace-workspace-module-ngfactory"], {
  /***/
  "./src/app/pages/workspace/workspace.module.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./src/app/pages/workspace/workspace.module.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: WorkspaceModuleNgFactory */

  /***/
  function srcAppPagesWorkspaceWorkspaceModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkspaceModuleNgFactory", function () {
      return WorkspaceModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _workspace_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./workspace.module */
    "./src/app/pages/workspace/workspace.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _project_project_list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./project/project-list/list.component.ngfactory */
    "./src/app/pages/workspace/project/project-list/list.component.ngfactory.js");
    /* harmony import */


    var _project_project_add_project_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./project/project-add/project-add.component.ngfactory */
    "./src/app/pages/workspace/project/project-add/project-add.component.ngfactory.js");
    /* harmony import */


    var _project_project_detail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./project/project-detail/detail.component.ngfactory */
    "./src/app/pages/workspace/project/project-detail/detail.component.ngfactory.js");
    /* harmony import */


    var _page_page_add_page_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page/page-add/page-add.component.ngfactory */
    "./src/app/pages/workspace/page/page-add/page-add.component.ngfactory.js");
    /* harmony import */


    var _page_page_edit_page_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./page/page-edit/page-edit.component.ngfactory */
    "./src/app/pages/workspace/page/page-edit/page-edit.component.ngfactory.js");
    /* harmony import */


    var _project_project_editor_project_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./project/project-editor/project-editor.component.ngfactory */
    "./src/app/pages/workspace/project/project-editor/project-editor.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../core/emitSub/emit-sub.service */
    "./src/app/core/emitSub/emit-sub.service.ts");
    /* harmony import */


    var _core_provider_baseHttp_base_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../core/provider/baseHttp/base-http.service */
    "./src/app/core/provider/baseHttp/base-http.service.ts");
    /* harmony import */


    var _core_provider_baseHttp_InjectUrlString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../core/provider/baseHttp/InjectUrlString */
    "./src/app/core/provider/baseHttp/InjectUrlString.ts");
    /* harmony import */


    var _editor_provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../editor/provider/comp-dynamic-create.service */
    "./src/app/editor/provider/comp-dynamic-create.service.ts");
    /* harmony import */


    var _providers_menu_breadcrumb_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../providers/menu.breadcrumb.service */
    "./src/app/providers/menu.breadcrumb.service.ts");
    /* harmony import */


    var _core_tool_user_agent_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../core/tool/user-agent.service */
    "./src/app/core/tool/user-agent.service.ts");
    /* harmony import */


    var _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../core/provider/toaster/toastr.service */
    "./src/app/core/provider/toaster/toastr.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../core/provider/indexDB/indexDB.service */
    "./src/app/core/provider/indexDB/indexDB.service.ts");
    /* harmony import */


    var _core_provider_global_variables_variables_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../core/provider/global-variables/variables.service */
    "./src/app/core/provider/global-variables/variables.service.ts");
    /* harmony import */


    var _core_provider_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../core/provider/localStorage/localStorage.service */
    "./src/app/core/provider/localStorage/localStorage.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../editor/provider/comp-config.service */
    "./src/app/editor/provider/comp-config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_code_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../core/code.module */
    "./src/app/core/code.module.ts");
    /* harmony import */


    var _workspace_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./workspace.routing.module */
    "./src/app/pages/workspace/workspace.routing.module.ts");
    /* harmony import */


    var _project_project_list_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./project/project-list/list.component */
    "./src/app/pages/workspace/project/project-list/list.component.ts");
    /* harmony import */


    var _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./project/project-add/project-add.component */
    "./src/app/pages/workspace/project/project-add/project-add.component.ts");
    /* harmony import */


    var _project_project_detail_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./project/project-detail/detail.component */
    "./src/app/pages/workspace/project/project-detail/detail.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var WorkspaceModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_workspace_module__WEBPACK_IMPORTED_MODULE_1__["WorkspaceModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _project_project_list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ListComponentNgFactory"], _project_project_add_project_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ProjectAddComponentNgFactory"], _project_project_detail_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DetailComponentNgFactory"], _page_page_add_page_add_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["PageAddComponentNgFactory"], _page_page_edit_page_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["PageEditComponentNgFactory"], _project_project_editor_project_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ProjectEditorComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_12__["EmitSubService"], _core_emitSub_emit_sub_service__WEBPACK_IMPORTED_MODULE_12__["EmitSubService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_provider_baseHttp_base_http_service__WEBPACK_IMPORTED_MODULE_13__["BaseHttpService"], _core_provider_baseHttp_base_http_service__WEBPACK_IMPORTED_MODULE_13__["BaseHttpService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _core_provider_baseHttp_InjectUrlString__WEBPACK_IMPORTED_MODULE_14__["URL_STRING"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _editor_provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_15__["CompDynamicCreateService"], _editor_provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_15__["CompDynamicCreateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _providers_menu_breadcrumb_service__WEBPACK_IMPORTED_MODULE_16__["MenuBreadCrumbService"], _providers_menu_breadcrumb_service__WEBPACK_IMPORTED_MODULE_16__["MenuBreadCrumbService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_tool_user_agent_service__WEBPACK_IMPORTED_MODULE_17__["UserAgentService"], _core_tool_user_agent_service__WEBPACK_IMPORTED_MODULE_17__["UserAgentService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_18__["TempoToastrService"], _core_provider_toaster_toastr_service__WEBPACK_IMPORTED_MODULE_18__["TempoToastrService"], [ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_20__["IndexDBService"], _core_provider_indexDB_indexDB_service__WEBPACK_IMPORTED_MODULE_20__["IndexDBService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _core_provider_global_variables_variables_service__WEBPACK_IMPORTED_MODULE_21__["VariablesService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_provider_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_22__["LocalStorageService"], _core_provider_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_22__["LocalStorageService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_25__["CompConfigService"], _editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_25__["CompConfigService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_code_module__WEBPACK_IMPORTED_MODULE_27__["CodeModule"], _core_code_module__WEBPACK_IMPORTED_MODULE_27__["CodeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _workspace_routing_module__WEBPACK_IMPORTED_MODULE_28__["WorkspaceRoutingModule"], _workspace_routing_module__WEBPACK_IMPORTED_MODULE_28__["WorkspaceRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _workspace_module__WEBPACK_IMPORTED_MODULE_1__["WorkspaceModule"], _workspace_module__WEBPACK_IMPORTED_MODULE_1__["WorkspaceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTES"], function () {
        return [[{
          path: "",
          component: _project_project_list_list_component__WEBPACK_IMPORTED_MODULE_29__["ListComponent"]
        }, {
          path: "addProject",
          component: _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_30__["ProjectAddComponent"]
        }, {
          path: "detail",
          component: _project_project_detail_detail_component__WEBPACK_IMPORTED_MODULE_31__["DetailComponent"]
        }, {
          path: "develop",
          loadChildren: _workspace_routing_module__WEBPACK_IMPORTED_MODULE_28__["ɵ0"]
        }]];
      }, [])]);
    });
    /***/

  }
}]);
//# sourceMappingURL=workspace-workspace-module-ngfactory-es5.js.map