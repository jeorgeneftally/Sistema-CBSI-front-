import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getConductores():Observable<any>{    
    return this.http.get(this.url+'conductores',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getConductor(id):Observable<any>{
    return this.http.get(this.url+'conductor/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param conductor objeto que contiene los datos de modelo
   */
  create(conductor):Observable<any>{
    let json=JSON.stringify(conductor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'conductor',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param conductor objeto que contiene los datos de modelo
   */
  update(conductor):Observable<any>{
    let json=JSON.stringify(conductor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'conductor/'+conductor.id,params,{headers:headers});
  }
   
  deleteConductor(id):Observable<any>{
    return this.http.delete(this.url+"conductor/"+id,{headers:this.headers});
  }
  

}
