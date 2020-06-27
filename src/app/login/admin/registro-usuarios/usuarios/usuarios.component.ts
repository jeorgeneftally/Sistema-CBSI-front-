import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../servicios/user.service'
import { User } from '../../../../modelos/user';
import { global} from '../../../../modelos/global';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios;
  public status;
  public url;

  constructor(private _userService:UserService) { 
    this.url=global.url;
  }

  ngOnInit() {
    this.getUsuarios();
  }


  getUsuarios() {
    this._userService.getUsuarios().subscribe(response => {
      if (response.status == 'success') {
        this.usuarios = response.users;
        console.log(this.usuarios);
      }
    },
      err => console.log(err)
    )

  }


  //desabilita user -- actualiza campo de estado
  disableUser(id,name,surname){
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
    })
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea deshabilitar a ${name +" "+ surname} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, deshabilitar!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._userService.disableUser(id).subscribe(
          response=>{
            if(response.status=="success"){
              console.log(response);
              swalWithBootstrapButtons.fire(
                'Deshabilitado!',
                `${name +" "+ surname} deshabilitado con éxito.`,
                'success'
              )
            }
            this.getUsuarios();
          },
          error=>{
            console.log(error);
          }
        )
       
      }
    });
  }



  //habilita user -- actualiza campo de estado
  habilitaUser(id,name,surname){
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
    })
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea habilitar a ${name +" "+ surname} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, habilitar!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._userService.habilitarUser(id).subscribe(
          response=>{
            if(response.status=="success"){
              console.log(response);
              swalWithBootstrapButtons.fire(
                'Habilitado!',
                `${name +" "+ surname} habilitado con éxito.`,
                'success'
              )
            }
            this.getUsuarios();
          },
          error=>{
            console.log(error);
          }
        )
       
      }
    });
  }

  //cambiar rol user -- actualiza campo de estado
  roleB(id,name,surname){
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
    })
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea cambiar rol a ${name +" "+ surname} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, cambiar!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._userService.roleB(id).subscribe(
          response=>{
            if(response.status=="success"){
              console.log(response);
              swalWithBootstrapButtons.fire(
                'Rol Bombero!',
                `${name +" "+ surname} cambiado con éxito.`,
                'success'
              )
            }
            this.getUsuarios();
          },
          error=>{
            console.log(error);
          }
        )
       
      }
    });
  }

   //cambiar rol user -- actualiza campo de estado
   roleA(id,name,surname){
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
    })
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea cambiar rol a ${name +" "+ surname} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, cambiar!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._userService.roleA(id).subscribe(
          response=>{
            if(response.status=="success"){
              console.log(response);
              swalWithBootstrapButtons.fire(
                'Rol Administrador!',
                `${name +" "+ surname} cambiado con éxito.`,
                'success'
              )
            }
            this.getUsuarios();
          },
          error=>{
            console.log(error);
          }
        )
       
      }
    });
  }



  roleO(id,name,surname){
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
    })
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea cambiar rol a ${name +" "+ surname} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, cambiar!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._userService.roleO(id).subscribe(
          response=>{
            if(response.status=="success"){
              console.log(response);
              swalWithBootstrapButtons.fire(
                'Rol Oficial!',
                `${name +" "+ surname} cambiado con éxito.`,
                'success'
              )
            }
            this.getUsuarios();
          },
          error=>{
            console.log(error);
          }
        )
       
      }
    });
  }
}
