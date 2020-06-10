import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Article } from 'src/app/models/article.model';
import { ApiResponse } from 'src/app/models/api-response.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParam } from 'src/app/models/filters.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  articles: Article[];
  pageQuantity: number;

  params = {};

  constructor(private catalogueService: CatalogueService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      Object.assign(this.params, params);
      this.catalogueService.getArticles(this.params).subscribe((response: ApiResponse) => {
        this.articles = response.data;
        this.pageQuantity = response.meta.pageQuantity;
      });
    })
  }

  changePage(pageNumber: number) {
    this.params['page'] = pageNumber.toString();
    this.refreshParams();
  }

  addParam(param: QueryParam) {
    if(this.params[param.paramName] === param.paramValue) {
      delete this.params[param.paramName];
    } else {
      this.params[param.paramName] = param.paramValue;
    }    
    this.refreshParams();
  }

  refreshParams() {
    this.router.navigate([], {queryParams: this.params})
  }

}
