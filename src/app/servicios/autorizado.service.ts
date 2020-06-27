import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {global} from '../modelos/global';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoService {

  url;
  headers;
  constructor(public http:HttpClient) { 
    this.url=global.url;
    this.headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }
  getAutorizados():Observable<any>{    
    return this.http.get(this.url+'autorizados',{headers:this.headers});
  } 

  /**
   * getModelo obtiene un modelo en especifico desde el backend
   * @param id id del modelo que se quiere obtener
   */
  getAutorizado(id):Observable<any>{
    return this.http.get(this.url+'autorizado/'+id,{headers:this.headers});
  }
   /**
   * create crea un nuevo modelo enviandolo al backend
   * @param autorizado objeto que contiene los datos de modelo
   */
  create(autorizado):Observable<any>{
    let json=JSON.stringify(autorizado);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'autorizado',params,{headers:headers});
  }

  /**
   * update actualiza un modelo enviandolo al backend
   * @param autorizado objeto que contiene los datos de modelo
   */
  update(autorizado):Observable<any>{
    let json=JSON.stringify(autorizado);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'autorizado/'+autorizado.id,params,{headers:headers});
  }
  
  deleteAutorizado(id):Observable<any>{
    return this.http.delete(this.url+"autorizado/"+id,{headers:this.headers});
  }

}
