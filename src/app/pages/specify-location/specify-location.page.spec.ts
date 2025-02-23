import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecifyLocationPage } from './specify-location.page';

describe('SpecifyLocationPage', () => {
  let component: SpecifyLocationPage;
  let fixture: ComponentFixture<SpecifyLocationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifyLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
