import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonRequestService } from '../../../shared/services/http/common-request.service';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { LoginActions } from './login.action';
import { Store } from '@ngrx/store';
import { IAppState } from './../../../shared/store/ngrxstore/ngrxstore.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
     private commonRequestService: CommonRequestService,
     private loginAction: LoginActions,
     private storeObj: Store<IAppState>,) { }

  ngOnInit() { }
  registration() {
    this.router.navigate(['registration']);
  }

  getInfo() {
    this.commonRequestService.request(RequestEnums.LOGIN).subscribe(res => {
      console.log(res);
    })
  }

  dispactAction(){
    this.storeObj.dispatch(this.loginAction.login({username:'vipul',password:'parmar'}));
  }
}
