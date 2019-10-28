import { Component, OnInit } from '@angular/core';
import { ItemData } from 'src/models/ItemData.model';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';


@Component({
  selector: 'app-seguridad-tabla',
  templateUrl: './seguridad-tabla.component.html',
  styleUrls: ['./seguridad-tabla.component.css']
})
export class SeguridadTablaComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData: ItemData[] = [];
  loading = true;
  sortValue: string | null = null;
  sortKey: string | null = null;
  filterGender = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
  searchGenderList: string[] = [];

  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  constructor(private randomUserService: SeguridadService) {}

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.randomUserService
      .getUsers(this.pageIndex, this.pageSize, this.sortKey!, this.sortValue!, this.searchGenderList)
      .subscribe(data => {
        console.log(data);
        this.loading = false;
        this.total = 200;
        this.listOfData = data.results;
        console.log(this.listOfData);
      });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

  ngOnInit(): void {
    this.searchData();

  }
}
