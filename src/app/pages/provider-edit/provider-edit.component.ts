import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-edit',
  templateUrl: './provider-edit.component.html',
  styleUrls: ['./provider-edit.component.css']
})
export class ProviderEditComponent implements OnInit {

  public id;
  private providerToUpdate;
  public name;
  public email;
  public adress;
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

    this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      response => {
        //console.log(response);
        this.name = response["name"];
        this.email = response["email"];
        this.adress = response["address"];
      }
    );
  }


  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.adress,
      'id': this.id
    }
    this.service.updateProvider(this.providerToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );

  }

}
