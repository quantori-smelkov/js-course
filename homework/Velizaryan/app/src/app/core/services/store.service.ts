import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  post$: Subject<Post> = new Subject<Post>();
  posts$: Subject<Post[]> = new Subject<Post[]>();
}
