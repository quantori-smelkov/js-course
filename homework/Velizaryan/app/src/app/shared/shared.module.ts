import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryViewComponent } from './components/categoryview/category-view.component';
import { PostViewComponent } from './components/postview/post-view.component';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';
import {MaterialModule} from './modules/material/material.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import { GlobalPreloaderComponent } from './components/global-preloader/global-preloader.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    PostViewComponent,
    CategoryViewComponent,
    CategoryComponent,
    FooterComponent,
    HeaderComponent,
    PostComponent,
    GlobalPreloaderComponent,
    GlobalPreloaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    PostViewComponent,
    CategoryViewComponent,
    MaterialModule,
    FooterComponent,
    HeaderComponent,
    PostComponent,
    GlobalPreloaderComponent,
    RouterModule
    ]
})
export class SharedModule { }
