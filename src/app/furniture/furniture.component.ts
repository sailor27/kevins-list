import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Furniture } from '../furniture.model';
// import { FurnitureDetailComponent } from  '../furniture-detail/furniture-detail.component';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
  providers: [FurnitureService]
})
export class FurnitureComponent implements OnInit {
  furnitures: Furniture[];
  constructor(private router: Router, private furnitureService: FurnitureService) {}

  ngOnInit() {
    this.furnitures = this.furnitureService.getFurniture();
    console.log(this.furnitures);
  }

  goToDetailPage(clickedFurniture: Furniture) {
    // alert('u clicked the furniture item');
     this.router.navigate(['furniture', clickedFurniture.id]);

  };
}
