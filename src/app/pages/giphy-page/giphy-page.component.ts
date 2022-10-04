import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GiphyService} from "../../services/giphy.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {FormGroup, FormControl} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";


@Component({
  selector: 'app-giphy-page',
  templateUrl: './giphy-page.component.html',
  styleUrls: ['./giphy-page.component.scss']
})
export class GiphyPageComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: MatPaginator | undefined;
  loading = false;
  offset = 0;
  limit = 9;

  myForm: FormGroup = new FormGroup({
    searchText: new FormControl<string>('')
  });

  obs: Subscription | undefined;

  constructor(public giphyService: GiphyService) { }

  ngOnInit(): void {
    this.getTrendingGiphies(this.offset);

    this.obs = this.myForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
        if(data.searchText.length) {
          this.getSearchedGiphies(this.offset, data.searchText)
        } else {
          this.getTrendingGiphies(this.offset);
        }
      });
  }

  getTrendingGiphies(offset: number): void {
    this.loading = true;
    this.giphyService.getTrending(offset, this.limit).subscribe(() => {
      this.loading = false;
    })
  }

  getSearchedGiphies(offset: number, text: string ): void {
    this.loading = true;
    this.giphyService.search(offset, this.limit, text).subscribe(() => {
      this.loading = false;
    });
  }

  onChangePage(event: PageEvent){
    const searchValue = this.myForm.controls['searchText'].value;
    const pageOffset = event.pageIndex * this.limit;
    if(this.myForm.controls['searchText'].value) {
      this.getSearchedGiphies(pageOffset, searchValue)
    } else {
      this.getTrendingGiphies(pageOffset)
    }
  }

  ngOnDestroy() {
    this.obs?.unsubscribe();
  }

}
