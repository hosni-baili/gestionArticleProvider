import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  public id;
  private articleToUpdate;
  public label;
  public price;
  public picture;
  public provider;
 public providers;
  constructor(private service: ArticleService,private pservice: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    this.pservice.listProviders().subscribe(
      response => {
        this.providers = response;
      })
    this.articleToUpdate = this.service.getArticle(this.id).subscribe(
      response => {
        console.log(response);
        this.label = response["label"];
        this.price = response["price"];
        this.picture = response["picture"];
        this.provider = response["provider"];

      }
    );
  }


  updateArticle() {
    this.articleToUpdate = {
      'label': this.label,
      'price': this.price,
      'picture': this.picture,
      'provider':this.provider,
      'id': this.id
    }
    console.log(this.articleToUpdate);

    this.service.updateArticle(this.articleToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listArticle']);
      }
    );

  }

}

