import { AdminRoutingModule } from './admin-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';



@NgModule({
  declarations: [PostsComponent, PostComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
