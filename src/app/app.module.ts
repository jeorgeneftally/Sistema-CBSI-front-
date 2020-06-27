import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';

import { NgxPaginationModule} from 'ngx-pagination';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {AuthGuard} from '././guard/auth.guard';
import { AdminComponent } from './login/admin/admin.component';
import { RegistroUsuariosComponent } from './login/admin/registro-usuarios/registro-usuarios.component';
import { UsuariosComponent } from './login/admin/registro-usuarios/usuarios/usuarios.component';
import { EditarPerfilComponent } from './login/admin/registro-usuarios/editar-perfil/editar-perfil.component';
import { InicioComponent } from './login/admin/inicio/inicio.component';
import { CompaniasComponent } from './login/admin/companias/companias.component';
import { DetallecompaniaComponent } from './login/admin/companias/detallecompania/detallecompania.component';
import { DetallemayorComponent } from './login/admin/companias/detallecompania/detallemayor/detallemayor.component';
import { DetallemenorComponent } from './login/admin/companias/detallecompania/detallemenor/detallemenor.component';
import { DetallebomberoComponent } from './login/admin/companias/detallecompania/detallebombero/detallebombero.component';
import { MaterialmayorComponent } from './login/admin/materialmayor/materialmayor.component';
import { DetallebombaComponent } from './login/admin/companias/detallecompania/detallemayor/detallebomba/detallebomba.component';
import { MiinfoComponent } from './login/admin/registro-usuarios/miinfo/miinfo.component';
import { PersonalmaterialComponent } from './login/admin/registro-usuarios/personalmaterial/personalmaterial.component';


registerLocaleData(localeEsCL,'es-CL');
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout/:sure',component:LoginComponent},
  
  {path:'inicio',component:AdminComponent,
   children:[
       {
        path:'',
        component:InicioComponent
      },
      {
        path:'registro',
        component:RegistroUsuariosComponent
        
      }  
      ,
      {
        path:'editarperfil',
        component:EditarPerfilComponent
      }
      ,
      {
        path:'usuarios',
        component:UsuariosComponent
       
      }
      ,
      {
        path:'compañias',
        component:CompaniasComponent
      }
      ,
      {
        path:'detalle/:id',
        component:DetallecompaniaComponent
      }
      ,
      {
        path:'matmayor/:id',
        component:DetallemayorComponent
      }
      ,
      {
        path:'matmenor/:id',
        component:DetallemenorComponent
      }
      ,
      {
        path:'detallebomberos/:id',
        component:DetallebomberoComponent
      }
      ,
      {
        path:'materialmayor',
        component:MaterialmayorComponent
      },
      {
        path:'detallebomba/:id/:nombre',
        component:DetallebombaComponent
      },
      {
        path:'miinfo',
        component:MiinfoComponent
      },
      {
        path:'diponibilidad',
        component:PersonalmaterialComponent

      }

    ]
  },
  
];

@NgModule({
      declarations: [
        AppComponent,
        LoginComponent,
        AdminComponent,
        UsuariosComponent,
        EditarPerfilComponent,
        RegistroUsuariosComponent,
        InicioComponent,
        CompaniasComponent,
        DetallecompaniaComponent,
        DetallemayorComponent,
        DetallemenorComponent,
        DetallebomberoComponent,
        MaterialmayorComponent,
        DetallebombaComponent,
        MiinfoComponent,
        PersonalmaterialComponent,
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        AngularFileUploaderModule
      ],
      providers: [{provide: LOCALE_ID, useValue:'es-CL'}],
      bootstrap: [AppComponent]
    })
export class AppModule { }
