import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
// Components
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { StoreComponent } from './components/store/store.component';

const appRoutes: Routes = [
    {path:'', component: StoreComponent},
    {path:'home', component: HomeComponent},
    {path:'**', component: NotFoundComponent}
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)