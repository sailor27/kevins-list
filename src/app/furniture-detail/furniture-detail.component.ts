import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Furniture } from '../furniture.model';
import { FurnitureService } from '../furniture.service';
@Component({
  selector: 'app-furniture-detail',
  templateUrl: './furniture-detail.component.html',
  styleUrls: ['./furniture-detail.component.css'],
  providers: [FurnitureService]
})
export class FurnitureDetailComponent implements OnInit {
  furnitureId: number;
  furnitureToDisplay: Furniture;

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.furnitureId = parseInt(urlParameters['id']);
    });
    this.furnitureToDisplay = this.furnitureService.getFurnitureById(this.furnitureId);
  }

}
