import { Component, OnInit } from '@angular/core';
import {User} from '../../../modelos/user';
import {UserService} from '../../../servicios/user.service';
import Swal from 'sweetalert2'
import { RolService } from 'src/app/servicios/rol.service';
import { CompañiaService } from 'src/app/servicios/compañia.service';
import { MallaService } from 'src/app/servicios/malla.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  public user:User={id:null,name:"",surname:"",email:"",password:"",profesion:"",image:"",estado:"Activo",
  rut:"",fecha_nacimiento:null,fecha_ingreso:null,direccion:"",telefono:"",talla_calzado:"",talla_ropa:"",
  cargo:"",numero_registro:null,servicio:"",rol_id:null,compania_id:null,malla_id:null,conductor_id:null,};
  public status:string;
  roles: any;
  companias: any;
  mallas: any;
  constructor(private _mallasService:MallaService, private _userService:UserService, private _rolService:RolService, private _compañiaService:CompañiaService) { }

  ngOnInit() {
    this.getRoles();
    this.getCompañias();
    this.getMallas();
  }
 /**
   * onRegister permite registrar un nuevo usuario
   */
  onRegister(form){
    
    this._userService.register(this.user).subscribe(
      response=>{
        if(response.status=='success'){
          this.status=response.status;
          form.reset();
          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Usuario registrado con exito!!',
            showConfirmButton: false,
            timer: 1500
          })
        }else{
          this.status="error";
        }
        console.log(response);
      },
      error=>{
        this.status="error";
        console.log(<any>error);
      }
    );
  }

 getRoles(){
    this._rolService.getRoles().subscribe(response =>{
      if(response.status =='success'){
        this.roles=response.roles;
        console.log(this.roles);
      }      
    },
      err=>console.log(err)
    )      
 } 

 getCompañias(){
  this._compañiaService.getCompañias().subscribe(response =>{
    if(response.status =='success'){
      this.companias=response.companias;
      console.log(this.companias);
    }      
  },
    err=>console.log(err)
  )      
}

getMallas(){
  this._mallasService.getMallas().subscribe(response =>{
    if(response.status =='success'){
      this.mallas=response.mallas;
      console.log(this.mallas);
    }      
  },
    err=>console.log(err)
  )      
}
  

}
