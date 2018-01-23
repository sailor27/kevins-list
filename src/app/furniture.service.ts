import { Injectable } from '@angular/core';
import { Furniture } from './furniture.model';
import { FURNITURES } from './mock-furniture';
import { Input } from '@angular/core';
@Injectable()
export class FurnitureService {

  constructor() { }

  getFurniture() {
    return FURNITURES;
  }

  getFurnitureById(furnitureId: number){
    for (var i = 0; i <= FURNITURES.length - 1; i++) {
      if (FURNITURES[i].id === furnitureId) {
        return FURNITURES[i];
      }
    }
  }

	//input to recieve new furniture items from add-post form -- where does this go in the application???
	@Input() furnitures: Furniture[];

	addFurniture(newFurnitureFromChild: Furniture){
		this.furnitures.push(newFurnitureFromChild);
	}

}
