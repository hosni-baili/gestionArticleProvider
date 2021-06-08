import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
  

export class ArticleAddComponent implements OnInit {

  article: any;
  providers: any;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  constructor(private service: ArticleService,private pservice: ProviderService, private router: Router) { }

  


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
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

}
