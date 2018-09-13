import { Injectable } from '@angular/core';
import { ApiService } from './../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _apiService: ApiService
  ) { }

  authenticate() {
    this._apiService.get('authenticate').subscribe(response => {
      console.log('Done');
    });
  }
}
