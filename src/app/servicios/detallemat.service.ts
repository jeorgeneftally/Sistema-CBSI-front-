import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class DetalleMatService {
  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getDetalleMaterial():Observable<any>{    
    return this.http.get(this.url+'detallesmaterialmayors',{headers:this.headers});
  } 
  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getDetalle(id):Observable<any>{
    return this.http.get(this.url+'detallesmaterialmayor/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param detallesmaterialmayor objeto que contiene los datos de modelo
   */
  create(detallesmaterialmayor):Observable<any>{
    let json=JSON.stringify(detallesmaterialmayor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'detallesmaterialmayor',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param detallesmaterialmayor objeto que contiene los datos de modelo
   */
  update(detallesmaterialmayor):Observable<any>{
    let json=JSON.stringify(detallesmaterialmayor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'detallesmaterialmayor/'+detallesmaterialmayor.id,params,{headers:headers});
  }
   
  deleteDetalle(id):Observable<any>{
    return this.http.delete(this.url+"detallesmaterialmayor/"+id,{headers:this.headers});
  }
  
 
 

}
