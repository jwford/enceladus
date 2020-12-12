import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { ArticleFeedItemComponent } from './article-feed-item/article-feed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarHeaderComponent,
    ArticleFeedComponent,
    ArticleFeedItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
