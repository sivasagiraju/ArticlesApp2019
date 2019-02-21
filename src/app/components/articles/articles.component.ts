import { Component, OnInit } from '@angular/core';
import { ArticlesService, Article } from '../../services/articles.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subject, merge } from 'rxjs';
import { Page } from 'src/app/Custom/Page';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  filterForm: FormGroup;
  page: Observable<Page<Article>>
  pageUrl = new Subject<string>();
  private articles:any;
  constructor(private articlesService:ArticlesService) {
      this.filterForm = new FormGroup({
        is_available: new FormControl(),
        search: new FormControl()
      });

      // this.page = this.filterForm.valueChanges.pipe(
      //   debounceTime(200),
      //   startWith(this.filterForm.value),
      //   merge(this.pageUrl),
      //   switchMap(urlOrFilter => this.articlesService.list(urlOrFilter)),
      //   share()
      // );
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

  ngOnInit() {
    this.articlesService.list().subscribe(res=>{this.articles = res});
  }

}
