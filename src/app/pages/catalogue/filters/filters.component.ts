import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { filters, Filters, QueryParam } from '../../../models/filters.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input()
  params: any;
  @Output()
  addParam = new EventEmitter<QueryParam>();
  filters: Filters = filters;

  constructor() { }

  ngOnInit(): void {
    Object.entries(this.params).forEach(([key, value]) => {
      if(this.filters[key]) {
        this.filters[key].filterValues.find(filterValue => filterValue.value === value).checked = true;
      }      
    });
  }

  addFilter(paramName: string, paramValue: string) {
    this.addParam.emit({paramName: paramName, paramValue: paramValue});
  }

}
