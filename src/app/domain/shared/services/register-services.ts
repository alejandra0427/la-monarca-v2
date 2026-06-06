import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterServices {

  private http = inject(HttpClient);
  private url = 'https://monarcaweb.onrender.com/usuarios';
  

  register(data: {nombresyapellidos:string; cedula: string; email: string; telefono: string; ciudad: string; direccion:string; password:string}){
      return this.http.post(this.url, data);
  }
  
  
}
