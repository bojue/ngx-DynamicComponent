import { SettingObject } from '../../communal/module/setting-object.module';
import { SettingStyle } from '../../communal/module/setting-style.module';
import { Component, OnInit, Renderer2, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp-setting',
  templateUrl: './comp-setting.component.html',
  styleUrls: ['./comp-setting.component.scss']
})
export class CompSettingComponent implements OnInit{
   @Input() activeSettingObj: SettingObject;
   @Output() settingObjChange = new EventEmitter<any>();
   styles: SettingStyle;

  constructor() { 
    this.initData()
  }

  ngOnInit() {

  }

  initData() {
   this.styles = this.activeSettingObj && this.activeSettingObj['style']
   console.log(this.activeSettingObj, this.styles)
  }

  paramsChange(key: string) {
    this.settingObjChange.emit(this.activeSettingObj)
  }

}