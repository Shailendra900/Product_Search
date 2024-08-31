import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'data-typs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  trendyProduct() {
    return this.http.get<product[]>('https://fakestoreapi.com/products');
}
searchProducts(query: string) {
  return this.http.get<product[]>(`https://fakestoreapi.com/products/category/${query}`);
}
productData(id: string) {
  return this.http.get<product>(`https://fakestoreapi.com/products/${id}`);
}
}
// return this.http.get<product[]>(`https://fakestoreapi.com/products?q=${query}`);
// return this.http.get<product[]>(`http://localhost:3000/products?category=${query}`);
