import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  user: any;
  urlProviders = environment.rootURL+'registration';
  constructor(private Http: HttpClient) { }

  createUser(myform){
    this.user = {
      'name':myform.value.name,
      'email': myform.value.username,
      'password': myform.value.password,
      'temp': myform.value.role
    }
    //return this.Http.post(this.urlProviders + '/add', this.provider,{ headers });
    return this.Http.post(this.urlProviders, this.user);
  }
}
