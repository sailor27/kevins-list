import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FreeComponent } from './free/free.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureDetailComponent } from  './furniture-detail/furniture-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'furniture',
    component: FurnitureComponent
  },
  {
    path: 'free',
    component: FreeComponent
  },
  {
    path: 'fashion',
    component: FashionComponent
  },
  {
    path: 'furniture/:id',
    component: FurnitureDetailComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
