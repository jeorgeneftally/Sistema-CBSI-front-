import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { global } from 'src/app/modelos/global';

@Component({
  selector: 'app-miinfo',
  templateUrl: './miinfo.component.html',
  styleUrls: ['./miinfo.component.css']
})
export class MiinfoComponent implements OnInit {

  public identity;
  public url;

  constructor(
    private _userService:UserService
  ) {
    this.identity=_userService.getIdentity();
    this.url=global.url;
  }

  ngOnInit() {
    this.identity=this._userService.getIdentity();
  }

}
