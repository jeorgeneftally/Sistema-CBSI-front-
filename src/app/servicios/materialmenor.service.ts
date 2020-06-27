import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class MaterialMenorService {
  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getMaterialMenor():Observable<any>{    
    return this.http.get(this.url+'materialmenors',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getMaterialM(id):Observable<any>{
    return this.http.get(this.url+'materialmenor/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param materialmenor objeto que contiene los datos de modelo
   */
  create(materialmenor):Observable<any>{
    let json=JSON.stringify(materialmenor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'materialmenor',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param materialmenor objeto que contiene los datos de modelo
   */
  update(materialmenor):Observable<any>{
    let json=JSON.stringify(materialmenor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'materialmenor/'+materialmenor.id,params,{headers:headers});
  }
  
  deleteMaterialmenor(id):Observable<any>{
    return this.http.delete(this.url+"materialmenor/"+id,{headers:this.headers});
  }
}
