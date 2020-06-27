import { Component, OnInit } from '@angular/core';
import { MaterialMayorService } from 'src/app/servicios/materialmayor.service';
import { global } from 'src/app/modelos/global';

@Component({
  selector: 'app-personalmaterial',
  templateUrl: './personalmaterial.component.html',
  styleUrls: ['./personalmaterial.component.css']
})
export class PersonalmaterialComponent implements OnInit {
  comandancia;
  primera;
  segunda;
  tercera;
  url: any;
  color; 
  constructor(private _materialmayorService:MaterialMayorService) { 
    this.url=global.url;
  }

  ngOnInit() {
    this.getMaterial();
  }
  
  getColor(estado) {
    switch (estado) {
      case 'En Servicio':
        return 'green';
      case 'Disponible':
        return 'blue';
      case 'Fuera de Servicio':
        return 'red';
    }
  }

  getMaterial(){
    this._materialmayorService.getMaterialMa(5).subscribe(response =>{
      if(response.status =='success'){
        this.comandancia=response.materialmayor;
        console.log(this.comandancia);
      }      
    },
      err=>console.log(err)
    )
    this._materialmayorService.getMaterialMa(1).subscribe(response =>{
      if(response.status =='success'){
        this.primera=response.materialmayor;
        console.log(this.primera);
      }      
    },
      err=>console.log(err)
    )  
    this._materialmayorService.getMaterialMa(2).subscribe(response =>{
      if(response.status =='success'){
        this.segunda=response.materialmayor;
        console.log(this.segunda);
      }      
    },
      err=>console.log(err)
    )  
    this._materialmayorService.getMaterialMa(3).subscribe(response =>{
      if(response.status =='success'){
        this.tercera=response.materialmayor;
        console.log(this.tercera);
      }      
    },
      err=>console.log(err)
    )        
  }
}
