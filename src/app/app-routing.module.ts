import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UxComponent } from './ux/ux.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { GamedevComponent } from './gamedev/gamedev.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConfirmPageComponent } from './contact/confirm-page/confirm-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'ux', component: UxComponent, data: {animation: 'Ux'} },
  { path: 'fullstack', component: FullstackComponent, data: {animation: 'Fullstack'} },
  { path: 'gamedev', component: GamedevComponent, data: {animation: 'Gamedev'} },
  { path: 'about', component: AboutComponent, data: {animation: 'About'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'Contact'} },
  { path: 'confirm', component: ConfirmPageComponent, data: {animation: 'Contact'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
