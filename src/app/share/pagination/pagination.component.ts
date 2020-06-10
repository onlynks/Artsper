import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  pageQuantity: number;
  @Output()
  navigate = new EventEmitter<number>();

  currentPageNumber = 1;

  constructor() { }

  ngOnInit(): void {

  }

  changePage(pageNumber: number) {
    this.currentPageNumber = pageNumber;
    this.navigate.emit(pageNumber);
  }

}
