import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsCatComponent } from './components/products-cat/products-cat.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'siriushome',
        pathMatch:'full'
    },
    {
        path:'siriushome',
        component:HomeComponent
    },
    {
        path:'products',
        component:ProductsCatComponent
    },
    {
        path:'**',
        redirectTo:'siriushome',
        pathMatch:'full'
    }
];
