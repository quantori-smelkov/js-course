
import { CreatePostComponent } from './components/create-post/create-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import {PostComponent} from '../../shared/components/post/post.component';
import {PostResolver} from '../../shared/resolvers/post.resolver';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'posts/create', component: CreatePostComponent, canActivate: [AuthGuard] },
      { path: 'posts/:id/edit', component: EditPostComponent, canActivate: [AuthGuard] },
      {
        path: 'posts/:id',
        component: PostComponent,
        canActivate: [AuthGuard],
        resolve: {
          post: PostResolver
        }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
