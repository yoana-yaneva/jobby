import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  @Input() post!: Post;

  @Output() postSelected = new EventEmitter<Post>();

  @Output() postSelectedForEdit = new EventEmitter<Post>();

  @Output() postDeleted = new EventEmitter<number>();

  constructor() { }

  onLike(): void {
    this.postSelected.emit(this.post);
  }

  onEdit(): void {
    this.postSelectedForEdit.emit(this.post);
  }

}
