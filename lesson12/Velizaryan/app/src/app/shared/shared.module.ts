import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './components/postview/post-view.component';
import { PostComponent } from './components/post/post.component';
import {MaterialModule} from './modules/material/material.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import { GlobalPreloaderComponent } from './components/global-preloader/global-preloader.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PostViewComponent, FooterComponent, HeaderComponent, PostComponent, GlobalPreloaderComponent, GlobalPreloaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    PostViewComponent,
    MaterialModule,
    FooterComponent,
    HeaderComponent,
    PostComponent,
    GlobalPreloaderComponent,
    ]
})
export class SharedModule { }
