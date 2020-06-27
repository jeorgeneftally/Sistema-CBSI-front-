import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class MaterialMayorService {
  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getMaterialMayor():Observable<any>{    
    return this.http.get(this.url+'materialmayors',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getMaterialMa(id):Observable<any>{
    return this.http.get(this.url+'materialmayor/'+id,{headers:this.headers});
  }

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getMaterialM(id):Observable<any>{
    return this.http.get(this.url+'materialmayor2/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param materialmayor objeto que contiene los datos de modelo
   */
  create(materialmayor):Observable<any>{
    let json=JSON.stringify(materialmayor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'materialmayor',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param materialmayor objeto que contiene los datos de modelo
   */
  update(materialmayor):Observable<any>{
    let json=JSON.stringify(materialmayor);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'materialmayor/'+materialmayor.id,params,{headers:headers});
  }
  
  deleteMaterialmayor(id):Observable<any>{
    return this.http.delete(this.url+"materialmayor/"+id,{headers:this.headers});
  }
}
