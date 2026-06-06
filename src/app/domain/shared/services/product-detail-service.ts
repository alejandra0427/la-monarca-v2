import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  private http = inject(HttpClient);
  private apiUrl ='https://monarcaweb.onrender.com/producto';

  getProductById(id: string): Observable<productModel>{
    return this.http.get<productModel>(`${this.apiUrl}/${id}`);
  }
  
}
