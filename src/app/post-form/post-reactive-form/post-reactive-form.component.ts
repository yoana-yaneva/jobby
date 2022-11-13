import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-post-reactive-form',
  templateUrl: './post-reactive-form.component.html',
  styleUrls: ['./post-reactive-form.component.scss']
})
export class PostReactiveFormComponent implements OnInit, OnChanges {

  @Input() post!: Post;

  @Output() postSubmitted = new EventEmitter<Post>();

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [this.post.title, [Validators.required]],
      content: [this.post.content, [Validators.required]]
    });
  }

  ngOnChanges(): void {
    if(this.formGroup) {
      this.formGroup.get('title')?.setValue(this.post.title);
    this.formGroup.get('content')?.setValue(this.post.content);
    }
    
  }

  onSubmit(): void {
    this.formGroup.value;
    
    const post: Post = {
      ...this.formGroup.value,
      author: 'Company name',
      publishDate: "12 NOV 2022",
      category: 'front-end'
    };

    this.postSubmitted.emit(post);
  }

}
