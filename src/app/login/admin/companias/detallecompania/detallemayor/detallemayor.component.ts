import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MaterialMayorService} from '../../../../../servicios/materialmayor.service';
import { CompañiaService} from '../../../../../servicios/compañia.service';
import Swal from 'sweetalert2';
import { MaterialMayor } from 'src/app/modelos/materialmayor';
import {global} from '../../../../../modelos/global'
import {UserService} from '../../../../../servicios/user.service';

@Component({
  selector: 'app-detallemayor',
  templateUrl: './detallemayor.component.html',
  styleUrls: ['./detallemayor.component.css']
})
export class DetallemayorComponent implements OnInit {
  public id;
  public materialmayor;
  public nombre;
  public compania;
  public nombre2;
  public status:string;
  public activarModal:string='';
  public materialmayors:MaterialMayor={id:null,nombre:"",descripcion:"",fecha_creacion:null,capacidad:"",chasis:"",motor:"",patente:"",marca:"",modelo:"",estado:"En Servicio",imagen:"",compania_id:null};
  public url;

  constructor(public _userService: UserService,private _compañiaService:CompañiaService,private _route:ActivatedRoute, private _router:Router,public _materialmayorService:MaterialMayorService) {
    this.url=global.url;
   }

  ngOnInit() {
    this.getId();
    this.getMaterial();
    this.getCompania();
  }

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'materialmayor/upload',
      headers: {
          "Authorization" : this._userService.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText:'Sube tu avatar de usuario',
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  /**
   * imageUpload se activa inmediatamente despues de subir la imagen al servidor
   * recibe la respuesta y guarda el nombre de la imagen en el user para luego
   * al actualizar desde el formulario el user ya tenga el nombre de la imagen asignado
   * @param datos corresponde a la respuesta del servidor al subir la imagen
   */
  imageUpload(datos){
    //guardar datos de la respuesta del servidor a la subida de imagen en una variable
    //la respuesta contiene el nombre de la imagen en el servidor  
    let data=JSON.parse(datos.response);
    this.materialmayors.imagen= data.image;
  }

  getId(){
      this._route.params.subscribe(params=>{
      this.id=params['id'];
    })
  }

  getMaterial(){
    this._materialmayorService.getMaterialMa(this.id).subscribe(response =>{
      if(response.status =='success'){
        this.materialmayor=response.materialmayor;
        this.nombre=this.materialmayor.nombre
 
      }      
    },
      err=>console.log(err)
    )      
  }
  getCompania(){
    this._compañiaService.getCompañia(this.id).subscribe(response =>{
      if(response.status =='success'){
        this.compania=response.compania;
        this.nombre2=this.compania.nombre

      }      
    },
      err=>console.log(err)
    )      
  }

    /**
   * onSubmit crea o actualiza un modelo según el this.modelo
   * contenga un id o no, el id se asigna dependiendo de donde
   * accede al modal (desde crear modelo o editar modelo)
   */
  onSubmit(form){
    if(this.materialmayors.id==null){
      //crear un modelo
      this.materialmayors.compania_id=this.id;
      this._materialmayorService.create(this.materialmayors).subscribe(
        response=>{
          if(response.status=="success"){
            this.materialmayors=response.materialmayor;
            this.status="success";
            this.getMaterial();
            this.activarModal='';
            this.materialmayors.id=null;
            this.materialmayors.nombre="";
            this.materialmayors.descripcion="";
            this.materialmayors.fecha_creacion=null;
            this.materialmayors.capacidad="";
            this.materialmayors.motor="";
            this.materialmayors.chasis="";
            this.materialmayors.patente="";
            this.materialmayors.marca="";
            this.materialmayors.modelo="";
            this.materialmayors.estado="";
            this.materialmayors.imagen="";
            this.materialmayors.compania_id=null;
            this.ocultarModal();
            form.reset();
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'Material registrado con exito!!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        },
        error=>{
          console.log(error);
          this.status="error";
        }
      )
    }else{
      //actualiza el campeonato
      this.materialmayors.compania_id=this.id;
      this._materialmayorService.update(this.materialmayors).subscribe(
        response=>{
          if(response.status=="success"){
            this.materialmayors=response.materialmayor;
            this.status="success";
            this.materialmayors.id=null;
            this.materialmayors.nombre="";
            this.materialmayors.descripcion="";
            this.materialmayors.fecha_creacion=null;
            this.materialmayors.capacidad="";
            this.materialmayors.motor="";
            this.materialmayors.chasis="";
            this.materialmayors.patente="";
            this.materialmayors.marca="";
            this.materialmayors.modelo="";
            this.materialmayors.estado="";
            this.materialmayors.imagen="";
            this.materialmayors.compania_id=null;
            this.getMaterial();
            this.ocultarModal();
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'Campeonato actualizado con exito!!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        },
        error=>{
          console.log(error);
          this.status="error";
        }
      )
    }
    
  }
   /**
   * mostrarModal despliega el modal y puede cargar los datos en el formulario
   * en caso de que se reciban por parametro (si se accede desde el boton editar)
   */
  mostrarModal(id?,nombre?,descripcion?,fecha_creacion?,capacidad?,motor?,chasis?,patente?,marca?,modelo?,imagen?){
    this.activarModal='block';
    if(id){
            this.materialmayors.id=id;
            this.materialmayors.nombre=nombre;
            this.materialmayors.descripcion=descripcion;
            this.materialmayors.fecha_creacion=fecha_creacion;
            this.materialmayors.capacidad=capacidad;
            this.materialmayors.motor=motor;
            this.materialmayors.chasis=chasis;
            this.materialmayors.patente=patente;
            this.materialmayors.marca=marca;
            this.materialmayors.modelo=modelo;
            this.materialmayors.imagen=imagen;
            this.materialmayors.compania_id=null;
    }
  }

  /**
   * ocultarModal oculta el modal y reinicia los valores para que el form no siga msotrando
   * los valores que se habian asignado
   */
  ocultarModal(){
    this.activarModal='';
    this.materialmayors.id=null;
            this.materialmayors.nombre="";
            this.materialmayors.descripcion="";
            this.materialmayors.fecha_creacion=null;
            this.materialmayors.capacidad="";
            this.materialmayors.motor="";
            this.materialmayors.chasis="";
            this.materialmayors.patente="";
            this.materialmayors.marca="";
            this.materialmayors.modelo="";
            this.materialmayors.estado="";
            this.materialmayors.imagen="";
            this.materialmayors.compania_id=null;
  }
//elimina campeonato 
  eliminarMaterial(id, nombre){
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
      text: `¿Está seguro que desea eliminar a ${nombre} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._materialmayorService.deleteMaterialmayor(id).subscribe(
          response=>{
            if(response.status=="success"){
              console.log(response);
              swalWithBootstrapButtons.fire(
                'Material eliminado!',
                `Carro ${nombre} eliminado con éxito.`,
                'success'
              )
              this.getMaterial();
            }
          },
          error=>{
            console.log(error);
          }
        )
      }
    });
  }

}
