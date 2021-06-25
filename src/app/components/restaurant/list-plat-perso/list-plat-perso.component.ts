import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../services/store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PlatPersoModel} from "../../../models/PlatPerso.model";

@Component({
  selector: 'app-list-plat-perso',
  templateUrl: './list-plat-perso.component.html',
  styleUrls: ['./list-plat-perso.component.css']
})
export class ListPlatPersoComponent implements OnInit {

  plats: PlatPersoModel[];
  loading: Boolean = false;
  error: string | null = null;
  constructor(private storeService: StoreService, private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(
      (params)=> {
        this.storeService.getPlatByResto(params.id).subscribe(
          (data) => {
              this.plats = data;
          },
          error => {
            console.log(error);
          });
      }
    )
  }

  ngOnInit() {


  }




}
