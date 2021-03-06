import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44314/api/products/getall';
  constructor(private httpClient: HttpClient) { }
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef-whitespace
  getProducts(): Observable<ProductResponseModel> {
   return this.httpClient.get<ProductResponseModel>(this.apiUrl);
     }
}

