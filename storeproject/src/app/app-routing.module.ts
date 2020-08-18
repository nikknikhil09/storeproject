import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CategoryComponent } from './category/category.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path:'about-us-component',component: AboutUsComponent},
  {path:'contact-us-component',component: ContactUsComponent},
  {path:'home-component',component: HomeComponent},
  {path:'logo-component',component: LogoComponent},
  {path:'product-component',component: ProductsComponent},
  {path:'profile-component',component: ProfileComponent},
  {path:'search-box-component',component: SearchBoxComponent},
  {path:'category-component',component: CategoryComponent},
  {path:'blogs-component',component: BlogsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
