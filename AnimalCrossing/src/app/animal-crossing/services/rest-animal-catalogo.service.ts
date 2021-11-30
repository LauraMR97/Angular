import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestAnimalCatalogoService {
  public urlCatalogo: string="http://acnhapi.com/v1/sea/1";
  constructor(private http: HttpClient) { }

  public getCatalogo(){
    return this.http.get(this.urlCatalogo);
  }
}
