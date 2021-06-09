import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
  

export class ArticleAddComponent implements OnInit {


  imageName: any;


  article: any;
  providers: any;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  constructor(private service: ArticleService,private httpClient: HttpClient,private pservice: ProviderService, private router: Router) { }

  


  ngOnInit(): void {
    this.pservice.listProviders().subscribe(
      response => {
        this.providers = response;
      })
  }
  createArticle(myform) {
    console.log(this.selectedFile);
    this.service.createArticle(myform).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listArticle']);
      }
    );
  }


  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}

