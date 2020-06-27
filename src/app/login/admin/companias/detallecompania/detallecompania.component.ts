import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CompañiaService} from '../../../../servicios/compañia.service'

@Component({
  selector: 'app-detallecompania',
  templateUrl: './detallecompania.component.html',
  styleUrls: ['./detallecompania.component.css']
})
export class DetallecompaniaComponent implements OnInit {
  public id;
  public compania;
  public nombre;
  constructor(private _route:ActivatedRoute, private _router:Router, private _compañiaService:CompañiaService) { }
 
  ngOnInit() {
    this.getId();
  }

  getId(){
    this._route.params.subscribe(params=>{
      this.id=params['id'];

    })
    this._compañiaService.getCompañia(this.id).subscribe(response =>{
      if(response.status =='success'){
        this.compania=response.compania;
        this.nombre=this.compania.nombre;
      }      
    },
      err=>console.log(err)
    )
  }
}
