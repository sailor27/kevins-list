import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FreeComponent } from './free/free.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureDetailComponent } from  './furniture-detail/furniture-detail.component';
import { AddPostComponent } from './add-post/add-post.component';

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
  {
    path: 'add-post',
    component: AddPostComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
