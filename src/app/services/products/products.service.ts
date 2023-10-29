import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl: string = 'https://fakestoreapi.com/productsdas';

  constructor(private http: HttpClient) {}

  getAllProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(this.productsUrl);
  };
}
