import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'strict',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'items', component: ItemsComponent },
  {
    path: 'items/:id',
    component: ItemComponent,
    children: [
      { path: 'detail', component: DetailComponent}
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
