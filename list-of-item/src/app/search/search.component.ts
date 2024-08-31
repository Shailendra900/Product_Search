import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { product } from 'data-typs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult:undefined | product[];
  


  constructor(private activeRoute:ActivatedRoute, private service:ServicesService){}

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
     
  query && this.service.searchProducts(query).subscribe((result)=>{
    this.searchResult=result;

  })
  }
  
}


// getItems(): Observable<any[]> {
//   return this.http.get<any[]>(this.apiUrl);
// }
// items: any[] = [];
//   filteredItems: any[] = [];
//   filterTerm: string = '';
//   sortDirection: string = 'asc';