import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  stores: Store[] =[]
  loading: Boolean = false;
  error: string | null = null;
  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit() {
    this.getAllStores();
  }

  getAllStores()  {

    this.storeService.getAll().subscribe(
        data => {
          this.stores = data
          console.log(this.stores);
        },
        error => {
          console.log(error);
        });

  }

  deleteStore(id: number) {
    console.log(id);
    this.storeService.delete(id).subscribe(
      response => {
        console.log(response);



      },
      error => {
        console.log(error); });
    window.location.reload();
    // this.router.navigate(['/stores']);
  }

}
