import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { LandingComponent } from './landing/landing.component';
import { HouseFormComponent } from './house-form/house-form.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryComponent } from './category/category.component'
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent },
  {path:'login', component:AuthenticationComponent },
  {path: '', redirectTo: 'landing', pathMatch: 'full' },
  {path: 'houses', component: HomeComponent},
  {path: 'houses/:id', component: HomeDetailComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'add', component: HouseFormComponent},
  {path: 'homes', component: HouseListComponent },
  {path: 'homepage', component: HomepageComponent},
  {path: 'category', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
