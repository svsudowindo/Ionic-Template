// Angular Moudles
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { PredefinedModule } from './modules/predefined/predefined.module';
import { CustomModule } from './modules/custom/custom.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  NgrxStoreModule } from './store/ngrxstore/ngrxstore.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomModule,
    PredefinedModule,
    NgrxStoreModule
  ],
  exports: [
    CustomModule,
    PredefinedModule
  ]
})

// Import this Module in all submodules for reusablility
export class SharedModule { }
