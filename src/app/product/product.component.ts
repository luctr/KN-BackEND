import {Component, OnInit} from '@angular/core';
import {City} from "../model/city";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: City[] = [];

  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((data: City[]) => {
      this.products = data
    })
  }

}
