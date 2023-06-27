import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Smar2Page } from './smar2.page';

describe('Smar2Page', () => {
  let component: Smar2Page;
  let fixture: ComponentFixture<Smar2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Smar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
