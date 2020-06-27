import { Component, OnInit } from '@angular/core';
import { CompañiaService} from '../../../servicios/compañia.service'
import { Compañia } from 'src/app/modelos/compañia';
import { UserService } from 'src/app/servicios/user.service';
import { global } from 'src/app/modelos/global';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-companias',
  templateUrl: './companias.component.html',
  styleUrls: ['./companias.component.css']
})
export class CompaniasComponent implements OnInit {
  public companias;
  public compania:Compañia={id:null,nombre:"",fecha_fundacion:null, lema:"", descripcion:"", imagen_logo:""};
  public status:string;
  public activarModal:string='';
  url: any;
  constructor(public _userService: UserService,private _compañiaService:CompañiaService) { 
    this.url=global.url;
  }

  ngOnInit() {
    this.getCompañias();
  }

  getCompañias() {
    this._compañiaService.getCompañias().subscribe(response => {
      if (response.status == 'success') {
        this.companias = response.companias;
      }
    },
      err => console.log(err)
    )
  }



   /**
   * onSubmit crea o actualiza un modelo según el this.modelo
   * contenga un id o no, el id se asigna dependiendo de donde
   * accede al modal (desde crear modelo o editar modelo)
   */
  onSubmit(form){
    if(this.compania.id==null){
      //crear un modelo
      this._compañiaService.create(this.compania).subscribe(
        response=>{
          if(response.status=="success"){
            this.compania=response.compania;
            this.status="success";
            this.getCompañias();
            this.activarModal='';
            this.compania.id=null;
            this.compania.nombre="";
            this.compania.descripcion="";
            this.compania.fecha_fundacion=null;
            this.compania.imagen_logo="";
            this.compania.lema="";
            this.ocultarModal();
            form.reset();
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'Compañia registrada con exito!!',
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
      this._compañiaService.update(this.compania).subscribe(
        response=>{
          if(response.status=="success"){
            this.compania=response.compania;
            this.status="success";
            this.compania.id=null;
            this.compania.nombre="";
            this.compania.descripcion="";
            this.compania.fecha_fundacion=null;
            this.compania.imagen_logo="";
            this.compania.lema="";
            this.getCompañias();
            this.ocultarModal();
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'Compañia actualizada con exito!!',
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
  mostrarModal(id?,nombre?,descripcion?,fecha_fundacion?,imagen_logo?,lema?){
    this.activarModal='block';
    if(id){
      this.compania.id=id;
      this.compania.nombre=nombre;
      this.compania.descripcion=descripcion;
      this.compania.fecha_fundacion=fecha_fundacion;
      this.compania.imagen_logo=imagen_logo;
      this.compania.lema=lema;
            
    }
  }

  /**
   * ocultarModal oculta el modal y reinicia los valores para que el form no siga msotrando
   * los valores que se habian asignado
   */
  ocultarModal(){
    this.activarModal='';
    this.compania.id=null;
    this.compania.nombre="";
    this.compania.descripcion="";
    this.compania.fecha_fundacion=null;
    this.compania.imagen_logo="";
    this.compania.lema="";
  }
//elimina campeonato 
  eliminarCompania(id, nombre){
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
        this._compañiaService.deleteCompañia(id).subscribe(
          response=>{
            if(response.status=="success"){
              console.log(response);
              swalWithBootstrapButtons.fire(
                'Compañia eliminada!',
                `Carro ${nombre} eliminada con éxito.`,
                'success'
              )
              this.getCompañias();
            }
          },
          error=>{
            console.log(error);
          }
        )
      }
    });
  }

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'compania/upload',
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
    this.compania.imagen_logo= data.image;
  }


  

}
