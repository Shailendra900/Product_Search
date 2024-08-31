import { Component , OnInit } from '@angular/core';
import { product } from 'data-typs';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendyProduct: undefined | product[];
  filteredItems : undefined | product [];
  filterTerm: string = '';
  sortDirection: string = 'asc';
  searchResult: undefined | product[]

  constructor(private service:ServicesService, private router:Router ){}

  ngOnInit(): void {

    this.service.trendyProduct().subscribe((data)=>{
      this.trendyProduct = data;
      this.filteredItems = data;

    });
  }
  submitSearch(val:string){
    this.router.navigate([`search/${val}`])
  }

  filterItems() {
    this.filteredItems = this.trendyProduct?.filter(item => 
      item.category.toLowerCase().includes(this.filterTerm.toLowerCase())
    );
  }
  sortItems() {
    this.filteredItems = this.filteredItems?.sort((a, b) => {
      const comparison = a.category.localeCompare(b.category);
    return this.sortDirection == 'asc' ? comparison : -comparison;
    });
  }
 

}
