import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [

  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  
  { path: 'home',  component:HomeComponent, canActivate:[AuthGuard] }, 

  { path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//component:HomeComponent, canActivate:[AuthGuard]