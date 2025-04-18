import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [

    //{path:'',redirectTo:'/home',pathMatch:'full'},
    // {path:'home',component:HomeComponent},
    // {path:'about/:id',component:AboutComponent},
    {
        path:'',
        loadComponent : ()=>import('./home/home.component').then((c)=>c.HomeComponent), // this is use for lazy loading
    }, 
    {
        path:'about/:id',
        
        loadComponent : ()=>import('./components/about/about.component').then((c)=>c.AboutComponent),
    }


];
