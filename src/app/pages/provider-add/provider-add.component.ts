import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent implements OnInit {

  provider: any;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  constructor(private service: ProviderService, private router: Router) { }

  ngOnInit(): void {
  }
  createProvider(myform) {
    console.log(this.selectedFile);
    this.service.createProvider(myform).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

}
