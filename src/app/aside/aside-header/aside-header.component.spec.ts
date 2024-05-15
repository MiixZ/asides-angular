import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideHeaderComponent } from './aside-header.component';

describe('AsideHeaderComponent', () => {
  let component: AsideHeaderComponent;
  let fixture: ComponentFixture<AsideHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
