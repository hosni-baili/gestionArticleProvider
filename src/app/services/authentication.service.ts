import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }

  authenticate(username,password) {
    /*
    if (username === "amine" && password === "1234") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('password', password)
      return true;
    } else {
      return false;
    }*/

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    console.log(headers);
    console.log(username);
    console.log(password);

    return this.httpClient.get('http://localhost:8080/basicauth', { headers }).pipe
      (
        map(
          userData => {
            //console.log(username + " " + password);
            //console.log("User info :");
            //console.log(userData["roles"][0]["role"]);
            let authString = 'Basic ' + btoa(username + ':' + password);
            console.log(authString);
            sessionStorage.setItem('faketoken', authString);
            sessionStorage.setItem('username', username);
            //sessionStorage.setItem('password', password);
            sessionStorage.setItem('role', userData["roles"][0]["role"]);
            return userData;
          }
        )
      );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
  }
}
