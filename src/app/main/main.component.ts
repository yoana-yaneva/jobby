import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  posts!: Post[];

  constructor() { 
  }



}
