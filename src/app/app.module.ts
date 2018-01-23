import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FreeComponent } from './free/free.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureDetailComponent } from './furniture-detail/furniture-detail.component';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FurnitureComponent,
    FreeComponent,
    FashionComponent,
    FurnitureDetailComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
