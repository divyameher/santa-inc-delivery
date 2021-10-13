import { Component, OnInit } from '@angular/core';
import { IChildren } from '../shared/domain/IChildren';
import { ChildrenService } from './children.service';

@Component({
  selector: 'app-gift-delivery',
  templateUrl: './gift-delivery.component.html',
  styleUrls: ['./gift-delivery.component.scss']
})
export class GiftDeliveryComponent implements OnInit {
  childrenDataResponse: IChildren[];

  constructor(private childrenService: ChildrenService) {
    this.childrenDataResponse = []
  }

  ngOnInit(): void {
    this.getChildrenData();
  }
  getChildrenData() {
    this.childrenService.getChildrenList().subscribe(
      (response) => {
        this.childrenDataResponse = response;
      }
    );
  }
}
