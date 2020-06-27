import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class DetalleBodService {
  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getDetallesBodegas():Observable<any>{    
    return this.http.get(this.url+'detallesbodegas',{headers:this.headers});
  } 
  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getDetalleBodega(id):Observable<any>{
    return this.http.get(this.url+'detallesbodega/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param detallesbodega objeto que contiene los datos de modelo
   */
  create(detallesbodega):Observable<any>{
    let json=JSON.stringify(detallesbodega);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'detallesbodega',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param detallesbodega objeto que contiene los datos de modelo
   */
  update(detallesbodega):Observable<any>{
    let json=JSON.stringify(detallesbodega);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'detallesbodega/'+detallesbodega.id,params,{headers:headers});
  }
   
  deleteDetalleBodega(id):Observable<any>{
    return this.http.delete(this.url+"detallesbodega/"+id,{headers:this.headers});
  }
  
 
 

}
