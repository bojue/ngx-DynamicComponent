import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import { MenuBreadCrumbService } from '../../../menu.breadcrumb.service';

@Component({
  selector: 'app-bread-curmb',
  templateUrl: './bread-curmb.component.html',
  styleUrls: ['./bread-curmb.component.scss']
})
export class BreadCurmbComponent implements OnInit {
  breadcurms: Promise<Node>;

  constructor(
    private activeRoute: ActivatedRoute,
    private menuBreadCurmsService: MenuBreadCrumbService,
    private router: Router ) {
    this.initData();
  }

  ngOnInit() {
   
  }

  initData() {
    this.breadcurms = this.menuBreadCurmsService.getMenuBreadCrumbs();
    console.log(this.breadcurms)
  }

 
}
