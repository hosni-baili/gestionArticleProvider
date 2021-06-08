import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(myform){
    this.service.createUser(myform).subscribe(
      response => {
        console.log(response);
        alert("Inscription avec succes!")
        this.router.navigate(['login']);
      }, error => {
        if (error.status === 400) {  
          if (error.error.message === "Email is already used") {
            alert("user exist");
          }
        }
      }
    );
  }

}
