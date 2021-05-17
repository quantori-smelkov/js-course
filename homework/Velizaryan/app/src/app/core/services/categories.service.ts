import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  create(category: Category): Observable<Category> {
    console.log(category);
    return this.httpClient
      .post<{ name: string }>(`${environment.fbDBUrl}/categories.json`, category)
      .pipe(
        map(({ name }: { name: string }) => ({
          ...category,
          id: name
        }))
      );
  }

  find(): Observable<Category[]> {
    return this.httpClient
      .get<{ [id: string]: Category }>(`${environment.fbDBUrl}/categories.json?`)
      .pipe(
        map(
          (res: { [id: string]: Category }) => Object
            .keys(res)
            .map((id: string) => ({
              id, ...res[id]
            }))
        )
      );
  }

  findOne(id: string): Observable<Category> {
    return this.httpClient
      .get<Category>(`${environment.fbDBUrl}/categories/${id}.json`);
  }

  remove(id: string): Observable<null> {
    return this.httpClient.delete<null>(`${environment.fbDBUrl}/categories/${id}.json`);
  }

  update(category: Category): Observable<Category> {
    return this.httpClient.patch<Category>(`${environment.fbDBUrl}/categories/${category.id}.json`, category);
  }
}
