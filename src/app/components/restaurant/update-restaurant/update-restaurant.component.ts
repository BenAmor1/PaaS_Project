import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  store: Store;
  idStore: number;

  // Form groupe add store
  storeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required])
  });


  constructor(
    private activatedrouter: ActivatedRoute,
    private storeService: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStoreById();
  }

  // initial store
  getStoreById() {
    //this.store = { name: '', address: '' };
    this.activatedrouter.paramMap.subscribe(result => {
      this.idStore = Number(result.get('id'));
      this.storeService.getById(this.idStore).then(
        store => {
          this.store = store;
        }
      );
    });
  }

  // update store


}
