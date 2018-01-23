import { Injectable } from '@angular/core';
import { Furniture } from './furniture.model';
import { FURNITURES } from './mock-furniture';

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

}
