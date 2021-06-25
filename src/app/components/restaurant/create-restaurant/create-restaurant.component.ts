import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from "rxjs";

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  unsibscribe = new Subject<void>();

  // Attributes
  store: Store;

  // Form groupe add store
  restaurantFrom: FormGroup ;
  restaurantId : number
  showForm =false
  editAdd :string = "add"
  constructor(private storeServie: StoreService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params,params.id !== "add")
        if(params.id != 'add'){
          this.editAdd = "Edit"
          this.storeServie.getRestaurantById(params.id).subscribe(
            (restaurant)=>{
              this.initUpdate(restaurant.nomResto,restaurant.adresseResto,restaurant.idResto);
              this.showForm = true;
            }
          )
        }else {
          this.initCreate();
          this.showForm = true;
        }

      }
    )
  }

  ngOnInit(): void {
  }

  // getters
  get name() {
    return this.restaurantFrom.get('name');
  }

  get address() {
    return this.restaurantFrom.get('address');
  }


  // Add Store function
  addStore() {
    const store = new Store()
    store.nomResto = this.restaurantFrom.controls.name.value;
    store.adresseResto = this.restaurantFrom.controls.address.value;
    if (this.editAdd == "add"){
      console.log(store)
      this.storeServie.create(store).pipe(takeUntil(this.unsibscribe)).subscribe(
        (rep) => {
          console.log(store)

          this.router.navigate(['/restaurants'])
        },
        (error) => {
          this.router.navigate(['/restaurants'])
        }
      );
    }else{
      store.idResto = this.restaurantFrom.controls.id.value;
      this.storeServie.update(store).pipe(takeUntil(this.unsibscribe)).subscribe(
        (rep) => {
          this.router.navigate(['/restaurants'])
        },
        (error) => {
          console.log(error);
        }
      );
    }


  }
  initCreate():void {
    this.restaurantFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required])
    });
  }
  initUpdate(name, address,id):void {
    this.restaurantFrom = new FormGroup({
      name: new FormControl(name, [Validators.required, Validators.minLength(3)]),
      id: new FormControl(id, []),
      address: new FormControl(address, [Validators.required])
    });
  }
  get f() {
    return this.restaurantFrom.controls;
  }
}
