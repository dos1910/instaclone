import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private http: HttpClient) { }

  getList(option?: any){
    return this.http.get<any>(`${environment.basePath}`, { params: option as any } );
  }

}
