import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardListViewComponent } from './card-list-view/card-list-view.component';
import { CardItemComponent } from './card-item/card-item.component';
import { PostReactiveFormComponent } from './post-form/post-reactive-form/post-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardListViewComponent,
    CardItemComponent,
    PostReactiveFormComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
