import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Furniture } from '../furniture.model';
import { FurnitureDetailComponent } from  '../furniture-detail/furniture-detail.component';
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  constructor(private router: Router) {}
  furnitures: Furniture[] = [
    new Furniture('Mirror', 15, 'Eighteen inch vanity mirror in fair condition', 'Lake Oswego, OR', 200),
    new Furniture('Table', 35, 'Full size dining table with leaves', 'Sellwood', 210),
    new Furniture('Desk', 20, 'Lightly used office desk, great for students', 'North Portland', 220)
  ];

  goToDetailPage(clickedFurniture: Furniture) {
    // alert('u clicked the furniture item');
     this.router.navigate(['furniture', clickedFurniture.id]);
    //  console.log(clickedFurniture.id);
  };
  ngOnInit() {
  }
}
