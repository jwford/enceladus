import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFeedItemComponent } from './article-feed-item.component';

describe('ArticleFeedItemComponent', () => {
  let component: ArticleFeedItemComponent;
  let fixture: ComponentFixture<ArticleFeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFeedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
