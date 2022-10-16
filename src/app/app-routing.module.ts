import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginPageComponent} from './login-page/login-page.component'

const routes: Routes = [

    { path: '', component: LoginPageComponent },
    { path: 'connection', component: LoginPageComponent },
    { path: 'inscription', component: LoginPageComponent },
    { path: '**', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
