import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full', data: { title: '首页', module: '/index/home', power: 'SHOW' }},
    　　{ path: 'home', component: HomeComponent, data: { title: '首页', module: '/index/home', power: 'SHOW' }},
    　　{ path: 'about', component: AboutComponent, data: { title: '关于', module: '/index/about', power: 'SHOW' }},
        { path: 'login', component: LoginComponent, data: { title: '登录', module: '/index/login', power: 'SHOW' }},
        { path: '**', redirectTo: 'home'},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
