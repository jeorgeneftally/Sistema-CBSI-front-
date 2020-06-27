import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class RevisionService {
  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getRevisiones():Observable<any>{    
    return this.http.get(this.url+'revisiones',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getRevision(id):Observable<any>{
    return this.http.get(this.url+'revision/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param revision objeto que contiene los datos de modelo
   */
  create(revision):Observable<any>{
    let json=JSON.stringify(revision);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'revision',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param revision objeto que contiene los datos de modelo
   */
  update(revision):Observable<any>{
    let json=JSON.stringify(revision);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'revision/'+revision.id,params,{headers:headers});
  }
  
  deleteRevision(id):Observable<any>{
    return this.http.delete(this.url+"revision/"+id,{headers:this.headers});
  }
}
