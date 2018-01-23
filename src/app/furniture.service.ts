import { Injectable } from '@angular/core';
import { Furniture } from './furniture.model';
import { FURNITURES } from './mock-furniture';

@Injectable()
export class FurnitureService {

  constructor() { }

  getFurniture() {
    console.log(FURNITURES);
    return FURNITURES;
  }

}
