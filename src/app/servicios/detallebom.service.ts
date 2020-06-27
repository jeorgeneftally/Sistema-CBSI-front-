import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class DetalleBomService {
  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getDetalleBomberos():Observable<any>{    
    return this.http.get(this.url+'detallesbomberos',{headers:this.headers});
  } 
  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getDetalleBombero(id):Observable<any>{
    return this.http.get(this.url+'detallesbombero/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param detallesbomberos objeto que contiene los datos de modelo
   */
  create(detallesbomberos):Observable<any>{
    let json=JSON.stringify(detallesbomberos);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'detallesbombero',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param detallesbomberos objeto que contiene los datos de modelo
   */
  update(detallesbomberos):Observable<any>{
    let json=JSON.stringify(detallesbomberos);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'detallesbombero/'+detallesbomberos.id,params,{headers:headers});
  }
   
  deleteDetalleBombero(id):Observable<any>{
    return this.http.delete(this.url+"detallesbombero/"+id,{headers:this.headers});
  }
  
 
 

}
