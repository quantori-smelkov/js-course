import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostviewComponent } from './post-view.component';

describe('PostviewComponent', () => {
  let component: PostviewComponent;
  let fixture: ComponentFixture<PostviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
