import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Furniture } from '../furniture.model';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	@Output() newPostSender = new EventEmitter();

  submitForm(title: string, price: number,  description: string, location: string,id: number) {

	  var newPostToAdd: Furniture = new Furniture(title, price, description, location, id);

	  this.newPostSender.emit(newPostToAdd);
		console.log(newPostToAdd.id);
  }
}
