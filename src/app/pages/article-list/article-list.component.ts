import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any;
  constructor(private service: ArticleService,private router: Router) { }

  ngOnInit() {
    this.refreshListArticles();
 
  }

  deleteArticle(myObj) {
    this.service.deleteArticle(myObj).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    })
  }

  refreshListArticles() {
    this.service.listArticle().subscribe(
      response => {
        this.articles = response;
      }
    );
  }

  updateArticle(myObj) {
    this.router.navigate(['articleEdit' + '/' + myObj['id']]);
  }


}
