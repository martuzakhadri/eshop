import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_API = 'https://fakestoreapi.com';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpclient: HttpClient) {}
  // getAllProducts(
  //   limit = '12',
  //   sort = 'desc',
  //   category?: string
  // ): Observable<Array<Product>> {
  //   return this.httpclient.get<Array<Product>>(
  //     `${STORE_BASE_API}/products${
  //       category ? '/category/' + category : ''
  //     }?sort=${sort}&limit=${limit}`
  //   );
  // }
  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    return this.httpclient.get<Array<Product>>(
      `${STORE_BASE_API}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }
  getAllcategories(): Observable<Array<string>> {
    return this.httpclient.get<Array<string>>(
      `${STORE_BASE_API}/products/categories`
    );
  }
  
}
