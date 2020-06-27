import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {global} from '../modelos/global';


@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getBodegas():Observable<any>{    
    return this.http.get(this.url+'bodegas',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getBodega(id):Observable<any>{
    return this.http.get(this.url+'bodega/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param bodega objeto que contiene los datos de modelo
   */
  create(bodega):Observable<any>{
    let json=JSON.stringify(bodega);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'bodega',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param bodega objeto que contiene los datos de modelo
   */
  update(bodega):Observable<any>{
    let json=JSON.stringify(bodega);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'bodega/'+bodega.id,params,{headers:headers});
  }

  deleteBodega(id):Observable<any>{
    return this.http.delete(this.url+"bodega/"+id,{headers:this.headers});
  }

   
}
