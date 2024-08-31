import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
  {path:'',
    component:HomeComponent
  },
  {path:'search/:query',
    component:SearchComponent
  },
  {path:'details/:pid',
    component:DetailsProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
