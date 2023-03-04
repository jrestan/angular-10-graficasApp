import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(){

    return this.http.get('http://localhost:3000/grafica');
    
  }

  getUsuariosRedesSocialesDonaData(){
    return this.getUsuariosRedesSociales()
      .pipe(
        delay(1000),  //<== este delay le pongo para que demore 1 segundo en devolver la data y se muestre el "Cargando Datos..."
        map(data=>{
          const labels = Object.keys(data);
          const values = Object.values(data);
          return {labels,values};
        })
      );
  }
  


}
