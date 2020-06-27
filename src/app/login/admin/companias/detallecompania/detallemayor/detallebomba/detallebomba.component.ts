import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MaterialMayorService} from '../../../../../../servicios/materialmayor.service';
import {MantencionService} from '../../../../../../servicios/mantencion.service';
import {RevisionService} from '../../../../../../servicios/revision.service';
import {CompañiaService} from '../../../../../../servicios/compañia.service';
import {global} from '../../../../../../modelos/global'

@Component({
  selector: 'app-detallebomba',
  templateUrl: './detallebomba.component.html',
  styleUrls: ['./detallebomba.component.css']
})
export class DetallebombaComponent implements OnInit {
  public id;
  public materialmayor;
  public url;
  public compania;
  public mantencion;
  public revision;
  constructor(private _revisionService:RevisionService ,private _mantencionService:MantencionService ,private _compañiaService:CompañiaService ,private _route:ActivatedRoute, private _router:Router,public _materialmayorService:MaterialMayorService) { 
    this.url=global.url;
  }

  ngOnInit() {
    this.getId();
    this.getMaterial();
    this.getMantenciones();
  }

  getId(){
    this._route.params.subscribe(params=>{
      this.id=params['id'];
    
    })
  }

  getMaterial(){
    this._materialmayorService.getMaterialM(this.id).subscribe(response =>{
      if(response.status =='success'){
        this.materialmayor=response.materialmayor;
      }      
    },
      err=>console.log(err)
    )      
  }
  getMantenciones(){
    this._mantencionService.getMantencion(this.id).subscribe(response =>{
      if(response.status =='success'){
        this.mantencion=response.mantencion;
        console.log(this.mantencion);
      }      
    },
      err=>console.log(err)
    )      
  }
  getRevisiones(){
    this._revisionService.getRevision(this.id).subscribe(response =>{
      if(response.status =='success'){
        this.revision=response.revision;
      }      
    },
      err=>console.log(err)
    )      
  }
  
 
}
