import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import {SharedModule} from '../../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [PostsComponent, EditPostComponent, CreatePostComponent, FormPostComponent, LayoutComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ]
})
export class AdminModule { }
