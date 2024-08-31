import { Component , OnInit} from '@angular/core';
import { product } from 'data-typs';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit  {

productdetails :undefined | product ;
  constructor(private service:ServicesService, private router:Router ,private activeRoute:ActivatedRoute ){}

  ngOnInit(): void {
    let pid = this.activeRoute.snapshot.paramMap.get('pid');
    if (pid) {
     pid && this.service.productData(pid).subscribe((result) => {
        console.warn(result);
        this.productdetails = result;
      });
    }
    }
  
  }

