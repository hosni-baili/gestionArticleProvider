import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  providerId: any;
  article: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  urlArticles = environment.rootURL+'articles';

  constructor(private Http: HttpClient) { }

  listArticle() {

    return this.Http.get(this.urlArticles + '/list');
  }

  createArticle(myform) {


    this.article = {
      'label': myform.value.articleLabel,
      'price': myform.value.articlePrice,
      'picture': myform.value.articlePicture
    };
    this.providerId = myform.value.articleProvider;
    return this.Http.post(this.urlArticles + '/add/'+ this.providerId, this.article);
  }



  updateArticle(myObj) {
    console.log(myObj.provider.id);
    this.providerId = myObj.provider.id;
    return this.Http.put(this.urlArticles + '/update/' + this.providerId + '/' + myObj['id'], myObj);
  }
  deleteArticle(myObj) {

    return this.Http.delete(this.urlArticles + '/delete/' + myObj['id'])
  }
  getArticle(id) {

    return this.Http.get(this.urlArticles + '/' + id)
  }

}
