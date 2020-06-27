import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class CompañiaService {
  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getCompañias():Observable<any>{    
    return this.http.get(this.url+'compañias',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getCompañia(id):Observable<any>{
    return this.http.get(this.url+'compañia/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param compañia objeto que contiene los datos de modelo
   */
  create(compañia):Observable<any>{
    let json=JSON.stringify(compañia);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'compañia',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param compañia objeto que contiene los datos de modelo
   */
  update(compañia):Observable<any>{
    let json=JSON.stringify(compañia);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'compañia/'+compañia.id,params,{headers:headers});
  }
   
  deleteCompañia(id):Observable<any>{
    return this.http.delete(this.url+"compañia/"+id,{headers:this.headers});
  }
}
