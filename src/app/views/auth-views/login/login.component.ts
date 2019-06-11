import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonRequestService } from '../../../shared/services/http/common-request.service';
import { RequestEnums } from '../../../shared/constants/request-enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private commonRequestService: CommonRequestService) { }

  ngOnInit() { }
  registration() {
    this.router.navigate(['registration']);
  }

  getInfo() {
    this.commonRequestService.request(RequestEnums.LOGIN).subscribe(res => {
      console.log(res);
    })
  }
}
