import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {

    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        /*
        console.log("Data :");
        console.log(data);
        this.router.navigate([''])
        this.invalidLogin = false*/
        if (sessionStorage.getItem('role') === "ADMIN") {
          this.router.navigate(['/admin/layout']);
        }

        if (sessionStorage.getItem('role') === "MANAGER") {
          this.router.navigate(['/admin/layout']);
        }

        if (sessionStorage.getItem('role') === "USER") {
          this.router.navigate(['/admin/layout']);
        }
      },
      error => {
        this.invalidLogin = true
      }
    );
    /*if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
    } else
      this.invalidLogin = true*/
  }
  ngOnDestroy() {
  }

}
