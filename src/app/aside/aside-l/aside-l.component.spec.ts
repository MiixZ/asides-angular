import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLComponent } from './aside-l.component';

describe('AsideLComponent', () => {
  let component: AsideLComponent;
  let fixture: ComponentFixture<AsideLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
