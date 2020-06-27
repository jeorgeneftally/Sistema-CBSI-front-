import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class MantencionService {

  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getMantenciones():Observable<any>{    
    return this.http.get(this.url+'mantenciones',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getMantencion(id):Observable<any>{
    return this.http.get(this.url+'mantencion/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param mantencion objeto que contiene los datos de modelo
   */
  create(mantencion):Observable<any>{
    let json=JSON.stringify(mantencion);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'mantencion',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param mantencion objeto que contiene los datos de modelo
   */
  update(mantencion):Observable<any>{
    let json=JSON.stringify(mantencion);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'mantencion/'+mantencion.id,params,{headers:headers});
  }
   
  deleteMantencion(id):Observable<any>{
    return this.http.delete(this.url+"mantencion/"+id,{headers:this.headers});
  }
  
}
